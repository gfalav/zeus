Template.suministrosNewTemplate.events({
	"submit form": function(e){
		Router.go('suministrosListTemplate');
	}
})

Template.suministrosUpdateTemplate.events({
	"submit form": function(e){
		Router.go('suministrosListTemplate');
	}
})

Template.suministrosListTemplate.helpers({
	suministrosVar: function() {
		return Suministros.find();
	}
})


Meteor.subscribe('suministrosPublish');