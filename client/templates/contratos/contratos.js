Template.contratosListTemplate.helpers({
	contratosVar: function() {
		return Contratos.find({clienteId: this._id});
	}
})

Template.contratosForm.helpers({
	cuentaIdForm: function() {
		if (this.cuentaId) {
			return this.cuentaId;
		} else {
			return this._id;
		}
	}
})

AutoForm.hooks({
	insertCustonContratosForm: {

		onSuccess: function(formType, result) {
			contratoSubscript = Meteor.subscribe("contratosPublish", result);
			Router.go('/contratos/show/' + result);
		},

		onError: function(formType, error) {
			alert(error);
		}
   
	},

	updateCustonContratosForm: {
		onSuccess: function(formType, result) {
			Router.go('/contratos/show/' + this.docId);
		},

		onError: function(formType, error) {
			alert(error);
		}
	}
});