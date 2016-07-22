Meteor.methods({
	cuentasNew: function(doc) {
		if (this.userId) {
			check(doc, CuentaSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var cuenta = Cuentas.insert(doc);
			Currents.insert({"entorno": "AtClientes", "tipo":"idCuenta", "idCollection":cuenta, "action": "insert", "fLog": new Date, "usuario":this.userId});
			return cuenta;			
		}
	},

	cuentasUpdate: function(doc) {
		if (this.userId) {
			check(doc, CuentaSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var cuenta = Cuentas.update(doc._id, {$set: doc} );
			Currents.insert({"entorno": "AtClientes", "tipo":"idCuenta", "idCollection":doc._id, "action": "update", "fLog": new Date, "usuario":this.userId})
			return cuenta;			
		}
	}

})