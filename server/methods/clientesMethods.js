Meteor.methods({
	clientesNew: function(doc) {
		if (this.userId) {
			check(doc, ClienteSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var cliente = Clientes.insert(doc);			
		}
	},

	clientesUpdate: function(doc) {
		if (this.userId) {
			check(doc, ClienteSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var cliente = Clientes.update(doc._id, {$set: doc} );
		}
	}

})