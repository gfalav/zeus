Template.contratosListTemplate.helpers({
	contratosVar: function() {
		return Contratos.find();
	}
})

Template.contratosForm.helpers({
	cuentaIdForm: function() {
		cuentas = Cuentas.find({'clienteId': this._id}).fetch();
		optionsarr = [];
		cuentas.forEach( function(cuenta) {
			obj = {};
			obj.label = cuenta.nombre;
			obj.value = cuenta._id;
			optionsarr.push(obj);
		});
		return optionsarr;
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