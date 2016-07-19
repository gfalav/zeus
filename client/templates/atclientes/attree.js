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

			for (var contrato of cuenta.contratos) {
				edesalSubscribe = Meteor.subscribe('edesalsPublish', contrato._id);
				edesal = Edesals.findOne({contratoId: contrato._id});
				contrato.edesal = edesal;

				suministroSubscribe = Meteor.subscribe('suministrosPublish', edesal._id);
				contrato.edesal.suministro = Suministros.findOne({edesalId: edesal._id});

			}

		}

		return result;

	} 
})