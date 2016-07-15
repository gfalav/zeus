Meteor.publish('clientesPublish', function(id, apellido, nombres, documentoNro) {
	if (id) {
		return Clientes.find({"_id": id})
	} else if (documentoNro) {
		return Clientes.find({"documentoNro": documentoNro})
	} else if (apellido) {
		return Clientes.find({"apellido": {$regex:  "^"+ apellido}, "nombres": {$regex: "^" + nombres}})
	} else {
		return this.ready();
	}
})