Meteor.publish('contratosPublish', function() {
	return Contratos.find();
})