Template.clientesNewTemplate.events({
	"submit form": function(e){
		if (clienteSubscrip) {clienteSubscrip.stop()};
		clienteSubscrip = Meteor.subscribe("clientesPublish",null,null,e.target.documentoNro.value);
		Router.go('clientesListTemplate');
	}
})

Template.clientesShowTemplate.events({
	"click button.btn.btn-info": function(e){
		if (clienteSubscrip) {clienteSubscrip.stop()};
		clienteSubscrip = Meteor.subscribe("clientesPublish",null,null,this.documentoNro);
		Currents.insert({"entorno": "AtClientes", "tipo":"idCliente", "idCollection":this._id, "fLog": new Date, "usuario": Meteor.userId()})
		Router.go('clientesListTemplate');
	}
})

Template.clientesUpdateTemplate.events({
	"submit form": function(e){
		Router.go('clientesListTemplate');
	}
})

Template.clientesListTemplate.events({
	"click button.btn.btn-info": function(e){
		Currents.insert({"entorno": "AtClientes", "tipo":"idCliente", "idCollection":this._id, "fLog": new Date, "usuario": Meteor.userId()})
	}
})

Template.clientesListTemplate.helpers({
	clientesVar: function() {
		return Clientes.find();
	}
})