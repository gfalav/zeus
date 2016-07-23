Meteor.publish('clientesPublish', function(id, apellido, nombres, documentoNro) {
	if (id) {
		result = Clientes.find({"_id": id})
	} else if (documentoNro) {
		result = Clientes.find({"documentoNro": documentoNro})
	} else if (apellido && nombres) {
		result = Clientes.find({"apellido": {$regex:  "^"+ apellido}, "nombres": {$regex: "^" + nombres}})
	} else if (apellido) {
		result = Clientes.find({"apellido": {$regex:  "^"+ apellido}})
	} else {
		result = [];
	}

	return result;

})