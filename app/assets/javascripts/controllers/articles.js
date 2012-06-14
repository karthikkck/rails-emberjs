Railse.articlesController = Em.ResourceController.create({
  resourceType: Railse.Article,
  articles: function(){
    var articlesView;
    Railse.articlesController.findAll();
    articlesView = Railse.ArticlesView.create();
    Railse.layout.set('content', articlesView);
  }
});
