Railse.routeManager = Em.RouteManager.create({
  initialState: 'loggedout.home',
  rootView: Railse.layout,

  loggedout: Em.StateManager.create({
    route: 'logged-out',
    enter: function (stateManager, transition) {
      this._super(stateManager, transition);

      var signInView = Railse.SignInView.create();
      var mainNavView = Railse.MainNavView.create();

      Railse.layout.set('sidebar', signInView);
      Railse.layout.set('mainnav', mainNavView);
    },
    home: Em.LayoutState.create({
    route: 'home',
    viewClass: Railse.HomePageView.extend({ text: 'you are currently loggedout.' }),
    enter: function (stateManager, transition) {
      this._super(stateManager, transition);
    }
    }),
    articles: Em.LayoutState.create({
      route: 'articles',
      viewClass: Railse.ArticlesView.extend(),
      enter: function (stateManager, transition) {
        this._super(stateManager, transition);
      }
    })
  }),

  loggedin: Em.LayoutState.create({
    route: 'logged-in',
    viewClass: Railse.UserProfileView.extend(),
    enter: function (stateManager, transition) {
      this._super(stateManager, transition);
      var signInView = Railse.SignInView.create({ loggedin: true });
      var mainNavView = Railse.MainNavView.create();

      mainNavView.initialMenu.push({name: 'Logout', action: 'logout', controllername: 'Railse.usersController'});
      Railse.layout.set('sidebar', signInView);
      Railse.layout.set('mainnav', mainNavView);
    }
  })
});

