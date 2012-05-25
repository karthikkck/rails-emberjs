Railse.homeController = Em.ResourceController.create({
  logout: function(){
    Railse.routeManager.goToState('loggedout');
  },
  login: function(){
    Railse.routeManager.goToState('loggedin');
  }

});
