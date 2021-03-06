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
        Railse.current_user = e.data;
        Railse.usersController.login();
        $(self.tagName).find('div.errors').html(errorsObject.errors);
      },
      error: function(e) {
        var errorsObject = $.parseJSON(e.responseText);
        $(self.tagName).find('div.errors').html(errorsObject.errors);
      }
    });
  },

  register: function(event) {
    var self = this;
    var user = Railse.User.create();

    user.email = self.get('email');
    user.password = self.get('password');

    event.preventDefault();

    user.saveResource()
      .fail( function(e) {
        var errorString = '', key, errorsObject;

        errorsObject = $.parseJSON(e.responseText);

        $.each(errorsObject.errors, function(key, value) {
          errorString += '<strong>' + key + ':</strong><br />';
          $.each(value, function(arrayKey, arrayValue) {
            errorString += arrayValue + '<br />';
          });
          errorString += '<br />';
        });

        $(self.tagName).find('div.errors').html(errorString);

      })
      .done(function(e) {
        Railse.current_user = e.data;
        Railse.usersController.login();
      });
  }

});
