Template.cuentasListTemplate.helpers({
	cuentasVar: function() {
		return Cuentas.find({clienteId: this._id});
	}
})

Template.cuentasForm.helpers({
	clienteIdForm: function() {
		if (this.clienteId) {
			return this.clienteId;
		} else {
			return this._id;
		}
	}
})

AutoForm.hooks({
	insertCustonCuentasForm: {

		onSuccess: function(formType, result) {
			cuentaSubscript = Meteor.subscribe("cuentasPublish", result);
			Router.go('/cuentas/show/' + result);
		},

		onError: function(formType, error) {
			alert(error);
		}
   
	},

	updateCustonCuentasForm: {
		onSuccess: function(formType, result) {
			Router.go('/cuentas/show/' + this.docId);
		},

		onError: function(formType, error) {
			alert(error);
		}
	}
});