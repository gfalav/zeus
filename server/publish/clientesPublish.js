Meteor.publish('clientesPublish', function() {
	return Clientes.find();
})