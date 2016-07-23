Template.atClientesTreeview.helpers({
	treeVar: function() {

		cuentaSubscript = Meteor.subscribe("cuentasPublish", this._id);

		cuentas = Cuentas.find({'clienteId': this._id});

		cuentas.forEach( function(cuenta) {
			contratoSubscript = Meteor.subscribe("contratosPublish", cuenta._id);
		});


		return "ok";
	},

	cuentasCount: function() {
		return Cuentas.find().count();
	},

	contratosCount: function() {
		return Contratos.find().count();
	},


	cuentasPath: function() {
		return '/cuentas/' + this._id;
	}
})