Template.atClientesTreeview.helpers({

	cuentasCount: function() {
		//define datos del cliente
		//define datos de las cuentas
		cuentaSubscript = Meteor.subscribe('cuentasPublish', this._id);

		return Cuentas.find({'clienteId': this._id}).count();

	},

	cuentasPath: function() {
		return '/cuentas/' + this._id;
	}
})