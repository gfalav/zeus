Meteor.methods({
	clientesNew: function(doc) {
		if (this.userId) {
			check(doc, ClienteSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var cliente = Clientes.insert(doc);
			Currents.insert({"entorno": "AtClientes", "tipo":"idCliente", "idCollection":cliente, "action": "insert", "fLog": new Date, "usuario":this.userId});
			return cliente;
		}
	},

	clientesUpdate: function(doc) {
		if (this.userId) {
			check(doc, ClienteSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var cliente = Clientes.update(doc._id, {$set: doc} );
			Currents.insert({"entorno": "AtClientes", "tipo":"idCliente", "idCollection":doc._id, "action": "update","fLog": new Date, "usuario":this.userId})
			return cliente;
		}
	}

})