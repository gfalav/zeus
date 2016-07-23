AutoForm.hooks({
	buscaClientesForm: {

		onSuccess: function(formType, result) {
		if (typeof clienteSubscript !== 'undefined') {
	    		clienteSubscript.stop();
	    	};			
			clienteSubscript = Meteor.subscribe("clientesPublish", null, result.apellido, result.nombres, result.documentoNro);
	    },


		onError: function(formType, error) {
			alert(error);
		}
   
	}
});

Template.atClientesListTemplate.helpers({
	resultsVar: function() {
		return Clientes.find();
	}
})
