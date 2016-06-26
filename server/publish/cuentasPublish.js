Meteor.publish('cuentasPublish', function() {
	return Cuentas.find();
})