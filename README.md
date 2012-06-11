## Ruby on Rails - Ember.js

A sample application(under development) to showcase use of ember.js with ruby on rails.

Thanks to the developers of following gems:

1. [ember-rails](https://github.com/emberjs/ember-rails)
2. [ember-rest-rails](https://github.com/mmacedo/ember-rest-rails)
3. [ember-layout] (https://github.com/ghempton/ember-layout)
4. [ember-routemanager](https://github.com/ghempton/ember-routemanager)

### Feature Plan:

1. user login feature
2. articles and sections - A section belongs to an article, and an article has many sections
3. A loggedin user can edit/delete/add articles
4. A public user can only view all the articles

### Already implemented features:

1. The basic framework is ready with emberjs routes and layout managers.
2. Login and Registration feature has been implemented.
3. Articles list created for public users and linked with database.

**Note:** Use console to add new articles.

### Currently working on:

1. Articles and sections

### Current routes.js file under app/assets/javascripts/config:

```js

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

```

### Disclaimer:

I have tried to follow the standards as much as possible. As I am not yet familiar with any best practices in using emberjs, kindly let me know if I can improve any feature.

