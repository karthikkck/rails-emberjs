Railse.articlesController = Em.ResourceController.create({
  resourceType: Railse.Article,
  articles: function(){
    Railse.articlesController.findAll();
    Railse.routeManager.goToState('loggedout.articles');
  }
});
