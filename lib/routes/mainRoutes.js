Router.configure({
	notFoundTemplate: 'notFound', //template with name notFound
	loadingTemplate: 'loading', //template with name loading
	layoutTemplate: 'mainLayoutTemplate' //layout para todo el sitio
});

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('home');
  } else {
    this.next();
  }
});

// Lista de rutas
Router.route('/', {
	name: "home",
	template: "home"
});