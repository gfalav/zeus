Template.edesalsNewTemplate.events({
	"submit form": function(e){
		Router.go('edesalsListTemplate');
	}
})

Template.edesalsUpdateTemplate.events({
	"submit form": function(e){
		Router.go('edesalsListTemplate');
	}
})

Template.edesalsListTemplate.helpers({
	edesalsVar: function() {
		return Edesals.find();
	}
})


Meteor.subscribe('edesalsPublish');