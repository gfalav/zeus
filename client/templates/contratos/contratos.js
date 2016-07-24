Template.contratosListTemplate.helpers({
	contratosVar: function() {
		return Contratos.find();
	}
})

Template.contratosForm.helpers({
	cuentaIdForm: function() {
		optionsarr = [];

		if (AutoForm.getFormId()=="insertCustonContratosForm") {
			cuentas = Cuentas.find({'clienteId': this._id}).fetch();
			optionsarr = [];
			cuentas.forEach( function(cuenta) {
				obj = {};
				obj.label = cuenta.nombre;
				obj.value = cuenta._id;
				optionsarr.push(obj);
			});
		} else if (AutoForm.getFormId()=="updateCustonContratosForm") {
			cuenta = Cuentas.findOne({'clienteId': cuenta.clienteId});
			cuentas = Cuentas.find({'clienteId': cuenta.clienteId}).fetch();
			optionsarr = [];
			cuentas.forEach( function(cuenta) {
				obj = {};
				obj.label = cuenta.nombre;
				obj.value = cuenta._id;
				optionsarr.push(obj);
			});
		}

		return optionsarr;
	},

	formId: function() {
		if (AutoForm.getFormId()=="showCustonContratosForm") {
			return false
		} else {
			return true
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