Railse.usersController = Em.ResourceController.create({
  login: function(){
    if(typeof Railse.current_user != undefined && !Railse.current_user.isEmptyObject) {
      Railse.routeManager.goToState('loggedin');
    }
    else {
      Railse.routeManager.goToState('loggedout');
    }
  },

  logout: function(){
    delete Railse.current_user;
    Railse.routeManager.goToState('loggedout');
  },

});
