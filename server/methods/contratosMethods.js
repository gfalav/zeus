Meteor.methods({
	contratosNew: function(doc) {
		if (this.userId) {
			check(doc, ContratoSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var contrato = Contratos.insert(doc);			
		}
	},

	contratosUpdate: function(doc) {
		if (this.userId) {
			check(doc, ContratoSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var contrato = Contratos.update(doc._id, {$set: doc} );
		}
	}

})