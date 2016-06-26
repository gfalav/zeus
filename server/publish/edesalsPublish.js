Meteor.publish('edesalsPublish', function() {
	return Edesals.find();
})