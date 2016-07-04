Meteor.methods({
	contratosNew: function(doc) {
		if (this.userId) {
			check(doc, ContratoSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var contrato = Contratos.insert(doc);			
			Currents.insert({"entorno": "AtClientes", "tipo":"idContrato", "idCollection":contrato, "action": "insert", "fLog": new Date, "usuario":this.userId})
		}
	},

	contratosUpdate: function(doc) {
		if (this.userId) {
			check(doc, ContratoSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var contrato = Contratos.update(doc._id, {$set: doc} );
			Currents.insert({"entorno": "AtClientes", "tipo":"idContrato", "idCollection":doc._id, "action": "update", "fLog": new Date, "usuario":this.userId})
		}
	}

})