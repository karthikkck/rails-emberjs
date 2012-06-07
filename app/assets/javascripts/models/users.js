Railse.User = Em.Resource.extend({
  resourceUrl:        '/api/users',
  resourceName:       'user',
  resourceProperties: ['first_name', 'last_name', 'email', 'password'],

  fullName: function() {
    return this.get('first_name') + ' ' + this.get('last_name');
  }.property('first_name', 'last_name')
});
