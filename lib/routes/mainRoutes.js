Router.configure({
	notFoundTemplate: 'notFound', //template with name notFound
	loadingTemplate: 'loading', //template with name loading
	layoutTemplate: 'mainLayoutTemplate' //layout para todo el sitio
});

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
  	this.layout('mainLayoutTemplate');
    this.render('homeTemplate');
  } else {
    this.next();
  }
});

// Lista de rutas
Router.route('/', {
	name: "homeTemplate",
	template: "homeTemplate",
	layoutTemplate: 'mainLayoutTemplate'
});