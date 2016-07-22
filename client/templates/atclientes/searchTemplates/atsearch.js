AutoForm.hooks({
	atClientesFormSearchTemplate: {

		onSubmit: function(insertDoc, updateDoc, currentDoc) {
			if (typeof clienteSubscript !== 'undefined') {
	    		clienteSubscript.stop();
	    	};
			clienteSubscript = Meteor.subscribe("clientesPublish", result, null, null, null);
		},

		onError: function(formType, error) {
			alert(error);
		}
   
	}
});

Template.atClientesListTemplate.helpers({
	resultsVar: function() {
		return Clientes.find({});
	}
})
