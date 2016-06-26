Router.route('/contratos', {
	name: "contratosListTemplate",
	template: "contratosListTemplate"
})

Router.route('/contratos/new', {
	name: "contratosNewTemplate",
	template: "contratosNewTemplate"
})

Router.route('/contratos/:_id', {
	name: "contratosShowTemplate",
	template: "contratosShowTemplate",
	data: function() { return Contratos.findOne(this.params._id); }
})

Router.route('/contratos/:_id/edit', {
	name: "contratosUpdateTemplate",
	template: "contratosUpdateTemplate",
	data: function() { return Contratos.findOne(this.params._id); }
})