Railse.articlesController = Em.ResourceController.create({
  articles: function(){
    Railse.routeManager.goToState('loggedout.articles');
  }
});
