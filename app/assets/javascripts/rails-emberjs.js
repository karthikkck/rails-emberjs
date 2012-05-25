//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require ember
//= require ember-rest
//= require ember-layout
//= require ember-routemanager
//= require_self
//= require_tree ./controllers
//= require_tree ./templates
//= require_tree ./views
//= require_tree ./config

var Railse = Em.Application.create();

Railse.layout = Em.View.create({
  templateName: 'templates_layouts_main_layout',
});

Railse.layout.appendTo('body');
