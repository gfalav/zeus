Meteor.publish('suministrosPublish', function() {
	return Suministros.find();
})