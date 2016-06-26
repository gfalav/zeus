Meteor.methods({
	cuentasNew: function(doc) {
		if (this.userId) {
			check(doc, CuentaSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var cuenta = Cuentas.insert(doc);			
		}
	},

	cuentasUpdate: function(doc) {
		if (this.userId) {
			check(doc, CuentaSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var cuenta = Cuentas.update(doc._id, {$set: doc} );
		}
	}

})