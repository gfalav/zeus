Meteor.publish('edesalsPublish', function(contratoId) {
	return Edesals.find({"contratoId": contratoId});
})