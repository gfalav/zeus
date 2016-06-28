Meteor.methods({
	suministrosNew: function(doc) {
		if (this.userId) {
			check(doc, SuministroSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var suministro = Suministros.insert(doc);			
			Currents.insert({"entorno": "AtClientes", "tipo":"idSuministro", "idCollection":suministro, "fLog": new Date, "usuario":this.userId})
		}
	},

	suministrosUpdate: function(doc) {
		if (this.userId) {
			check(doc, SuministroSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var suministro = Suministros.update(doc._id, {$set: doc} );
			Currents.insert({"entorno": "AtClientes", "tipo":"idSuministro", "idCollection":doc._id, "fLog": new Date, "usuario":this.userId})
		}
	}

})