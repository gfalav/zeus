AutoForm.hooks({
	insertCustonClientesForm: {

		onSuccess: function(formType, result) {
			if (typeof clienteSubscript !== 'undefined') {
	    		clienteSubscript.stop();
	    	};
			clienteSubscript = Meteor.subscribe("clientesPublish", result, null, null, null);
			Router.go('/clientes/'+ result);
		},

		onError: function(formType, error) {
			alert(error);
		}
   
	},

	updateCustonClientesForm: {
		onSuccess: function(formType, result) {
			Router.go('/clientes/'+ this.docId);
		},

		onError: function(formType, error) {
			alert(error);
		}
	}
});