Router.route('/clientes/new', {
	name: "clientesNewTemplate",
	layoutTemplate: "atClientesLayout",
	template: "clientesNewTemplate"
})

Router.route('/clientes/:_id', {
	name: "clientesShowTemplate",
	layoutTemplate: "atClientesLayout",
	template: "clientesShowTemplate",
	data: function() { return Clientes.findOne(this.params._id); }
})

Router.route('/clientes/:_id/edit', {
	name: "clientesUpdateTemplate",
	layoutTemplate: "atClientesLayout",
	template: "clientesUpdateTemplate",
	data: function() { return Clientes.findOne(this.params._id); }
})