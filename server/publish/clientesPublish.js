Meteor.publish('clientesPublish', function(apellido, nombres, documentoNro) {
	if (documentoNro) {
		return Clientes.find({"documentoNro": documentoNro})
	} else if (apellido) {
		return Clientes.find({"apellido": {$regex:  "^"+ apellido}, "nombres": {$regex: "^" + nombres}})
	} else {
		return this.ready();
	}
})