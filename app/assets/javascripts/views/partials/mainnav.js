Railse.MainNavView = Em.View.extend({
  initialMenu: null,
  classNames: ['nav'],
  tagName: 'ul',
  templateName: 'templates_partials_mainnav',

  init: function() {
    var initialMenu = [];
    this._super();

    initialMenu[0] = {name: 'Articles', action: 'articles', controllername: 'Railse.articlesController'};
    this.set('initialMenu', initialMenu);
  }

});

