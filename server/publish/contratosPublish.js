Meteor.publish('contratosPublish', function(cuentaId) {
	return Contratos.find({"cuentaId": cuentaId});
})