Railse.UserProfileView = Em.View.extend({
  tagName: 'form',
  currentUser: null,
  templateName: 'templates_users_profile',
  usersBinding: 'Railse.usersController',

  init: function() {
    this._super();
    this.set('user', Railse.User.create(Railse.current_user));
  },

  submit: function(event) {
    var self = this;
    var user = this.get("user");

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
        $(self.tagName).find('div.errors').html(e.messages);
      });

  }
});

