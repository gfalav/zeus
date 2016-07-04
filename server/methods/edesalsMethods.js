Meteor.methods({
	edesalsNew: function(doc) {
		if (this.userId) {
			check(doc, EdesalSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var edesal = Edesals.insert(doc);			
			Currents.insert({"entorno": "AtClientes", "tipo":"idEdesal", "idCollection":edesal, "action": "insert", "fLog": new Date, "usuario":this.userId})
		}
	},

	edesalsUpdate: function(doc) {
		if (this.userId) {
			check(doc, EdesalSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var edesal = Edesals.update(doc._id, {$set: doc} );
			Currents.insert({"entorno": "AtClientes", "tipo":"idEdesal", "idCollection":doc._id, "action": "update", "fLog": new Date, "usuario":this.userId})
		}
	}

})