Railse.usersController = Em.ResourceController.create({
  resourceType: Railse.User,

  login: function(){
    if(typeof Railse.current_user != undefined && !Railse.current_user.isEmptyObject) {
      $.ajaxSetup({
        headers: {
          'API_KEY': Railse.current_user.authentication_token
        }
      });
      Railse.routeManager.goToState('loggedin');
    }
    else {
      Railse.routeManager.goToState('loggedout');
    }
  },

  logout: function(){
    delete Railse.current_user;
    $.ajaxSetup({
      headers: {
        'API_KEY': ''
      }
    });
    Railse.routeManager.goToState('loggedout');
  },

  profile: function() {
      Railse.routeManager.goToState('loggedin#viewProfile');
  }

});
