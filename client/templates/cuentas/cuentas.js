Template.cuentasNewTemplate.events({
	"submit form": function(e){
		Router.go('cuentasListTemplate');
	}
})

Template.cuentasUpdateTemplate.events({
	"submit form": function(e){
		Router.go('cuentasListTemplate');
	}
})

Template.cuentasListTemplate.helpers({
	cuentasVar: function() {
		return Cuentas.find();
	}
})


Meteor.subscribe('cuentasPublish');