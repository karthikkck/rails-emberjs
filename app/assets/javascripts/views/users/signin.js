Railse.SignInView = Em.View.extend({
  tagName:      'form',
  templateName: 'templates_users_login',
  loggedin: false,

  submit: function(event) {
    var self = this;
    var email = self.get('email');
    var password = self.get('password');

    event.preventDefault();

    $.ajax({
      type: "post",
      url: "/api/users/sign_in",
      data: {email: email, password: password},
      dataType: "json",
      success: function(e) {
        Railse.current_user = e.user;
        Railse.usersController.login();
      },
      error: function(e) {
        var errorsObject = $.parseJSON(e.responseText);
        $(self.tagName).find('div.errors').html(errorsObject.errors);
      }
    });
  }

});
