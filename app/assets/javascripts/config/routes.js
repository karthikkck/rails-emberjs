Railse.routeManager = Em.RouteManager.create({
  initialState: 'loggedout',
  rootView: Railse.layout,

  loggedout: Em.LayoutState.create({
    route: 'logged-out',
    viewClass: Railse.HomePageView.extend({ text: 'you are currently loggedout.' }),
    enter: function (stateManager, transition) {
      this._super(stateManager, transition);
      var signInView = Railse.SignInView.create();
      Railse.layout.set('sidebar', signInView);
    }
  }),
  loggedin: Em.LayoutState.create({
    route: 'logged-in',
    viewClass: Railse.HomePageView.extend({ text: 'you logged in successfully.' }),
    enter: function (stateManager, transition) {
      this._super(stateManager, transition);
      var signInView = Railse.SignInView.create({ loggedin: true });
      Railse.layout.set('sidebar', signInView);
    }
  })
});

