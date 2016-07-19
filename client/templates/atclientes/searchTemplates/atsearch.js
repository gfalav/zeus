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
