Template.searchAtClientesForm.events({
	"submit form": function(e){
			Meteor.subscribe('clientesPublish', e.target.apellido.value, e.target.nombres.value, e.target.documentoNro.value);
			var cl = Clientes.find();
			for (var i=0; i < cl.length(); i++) {
				Meteor.subscribe("cuentasPublish", i.clienteId);
			}
	}

})

Template.atClientesListTemplate.helpers({
	resultsVar: function() {
		return Clientes.find({});
	}
})