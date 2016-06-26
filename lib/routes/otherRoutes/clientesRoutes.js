Router.route('/clientes', {
	name: "clientesListTemplate",
	template: "clientesListTemplate"
})

Router.route('/clientes/new', {
	name: "clientesNewTemplate",
	template: "clientesNewTemplate"
})

Router.route('/clientes/:_id', {
	name: "clientesShowTemplate",
	template: "clientesShowTemplate",
	data: function() { return Clientes.findOne(this.params._id); }
})

Router.route('/clientes/:_id/edit', {
	name: "clientesUpdateTemplate",
	template: "clientesUpdateTemplate",
	data: function() { return Clientes.findOne(this.params._id); }
})