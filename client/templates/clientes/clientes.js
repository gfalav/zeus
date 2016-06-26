Template.clientesNewTemplate.events({
	"submit form": function(e){
		Router.go('clientesListTemplate');
	}
})

Template.clientesUpdateTemplate.events({
	"submit form": function(e){
		Router.go('clientesListTemplate');
	}
})

Template.clientesListTemplate.helpers({
	clientesVar: function() {
		return Clientes.find();
	}
})


Meteor.subscribe('clientesPublish');