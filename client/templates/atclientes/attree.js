Template.atClientesTreeview.helpers({
	treeVar: function() {
		result = {};
		//define datos del cliente
		cliente = Clientes.findOne({_id: this._id});
		result.cliente = cliente;

		//define datos de las cuentas
		cuentaSubscript = Meteor.subscribe('cuentasPublish', cliente._id);
		cuentas = Cuentas.find({clienteId: cliente._id});
		result.cliente.cuentas = cuentas.fetch();

		//define datos de los contratos
		for (var cuenta of result.cliente.cuentas) {
			contratoSubscribe = Meteor.subscribe('contratosPublish', cuenta._id);
			contratos = Contratos.find({cuentaId: cuenta._id});
			cuenta.contratos = contratos.fetch();
		}

		return result;

	} 
})