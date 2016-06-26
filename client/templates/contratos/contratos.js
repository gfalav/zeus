Template.contratosNewTemplate.events({
	"submit form": function(e){
		Router.go('contratosListTemplate');
	}
})

Template.contratosUpdateTemplate.events({
	"submit form": function(e){
		Router.go('contratosListTemplate');
	}
})

Template.contratosListTemplate.helpers({
	contratosVar: function() {
		return Contratos.find();
	}
})


Meteor.subscribe('contratosPublish');