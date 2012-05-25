## Ruby on Rails - Ember.js

A sample application(under development) to showcase use of ember.js with ruby on rails.

Thanks to the developers of following gems:
1. ember-rails https://github.com/emberjs/ember-rails
2. ember-rest-rails https://github.com/mmacedo/ember-rest-rails
3. ember-layout https://github.com/ghempton/ember-layout
4. ember-routemanager https://github.com/ghempton/ember-routemanager

### Feature Plan:

1. user login feature
2. articles and sections - A section belongs to an article, and an article has many sections
3. A loggedin user can edit/delete/add articles
4. A public user can only view all the articles

### Already implemented features:

1. The basic framework is ready with emberjs routes and layout managers.

### Current working:

1. By seeing user login section do not assume that it has been implemented. :)
2. The menu has been linked to routes and state change based on clicking "login" and "logout" has been implemented.

### Current routes.js file under app/assets/javascripts/config:

```js

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

```

### Disclaimer:

I have tried to follow the standards as much as possible. As I am not yet familiar with any best practices in using emberjs, kindly let me know if I can improve any feature.

