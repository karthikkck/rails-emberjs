Railse.ArticleListView = Em.View.extend({
  tagName: 'li',
  templateName: 'templates_articles_list',
  show: function(){
    var article = Railse.Article.create({id: this.bindingContext.id});
    var thistag = this;

    article.findResource()
    .fail( function(e) {
      alert('article not found');
    })
    .done(function(e) {
      var articleShowView = Railse.ArticleShowView.create({ article: e });
      thistag._parentView.bindingContext.set('articlecontent', articleShowView);
    });
  }
});

