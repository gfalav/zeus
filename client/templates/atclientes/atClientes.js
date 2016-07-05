Template.atClientesFormSearchTemplate.events({
	"submit form": function(e){
		if (typeof clienteSubscript !== 'undefined') {
    		clienteSubscript.stop();
    	};
		clienteSubscript = Meteor.subscribe('clientesPublish', e.target.apellido.value, e.target.nombres.value, e.target.documentoNro.value);
	}
})

Template.atClientesListTemplate.helpers({
	resultsVar: function() {
		return Clientes.find({});
	}
})

Template.atClientesTreeTemplate.helpers({
	apellido: function() {
		return this.apellido + " " + this.apellido2 + ", " + this.nombres;
	},
	cuentasCount: function () {
		return Cuentas.find({clienteId: this._id}).count();
	},

	contratosCount: function() {
		return Contratos.find({clienteId: this._id}).count();
	}
})

Template.atClientesTreeTemplate.onCreated(function () {
	if (typeof cuentaSubscript !== 'undefined') {
    		cuentaSubscript.stop();
    };
	cuentaSubscript = Meteor.subscribe('cuentasPublish', this.data._id);

	if (typeof contratoSubscript !== 'undefined') {
    		contratoSubscript.stop();
    };
	contratoSubscript = Meteor.subscribe('contratosPublish', this.data._id);
})