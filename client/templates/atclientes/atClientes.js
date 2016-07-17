Template.atClientesFormSearchTemplate.events({
	"submit form": function(e){
		if (typeof clienteSubscript !== 'undefined') {
    		clienteSubscript.stop();
    	};
		clienteSubscript = Meteor.subscribe('clientesPublish', null, e.target.apellido.value, e.target.nombres.value, e.target.documentoNro.value);
	}
})

Template.atClientesListTemplate.helpers({
	resultsVar: function() {
		return Clientes.find({});
	}
})

Template.atClientesTreeview.helpers({
	apenom: function() {
		if (typeof this.apellido !== 'undefined') {
			return this.apellido + " " + this.apellido2 + ", " + this.nombres;
		} else {
			return "";
		}
	},
	cuentasCount: function () {
		return Cuentas.find({clienteId: this._id}).count();
	},

	contratosCount: function() {
		return Contratos.find({clienteId: this._id}).count();
	}
})