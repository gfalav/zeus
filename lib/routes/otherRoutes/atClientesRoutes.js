Router.route('/atclientessearch', {
	name: "atClientesSearchTemplate",
	template: "atClientesSearchTemplate"
})

Router.route('/atclientesshow/:_id', {
	name: "atClientesShowTemplate",
	template: "atClientesShowTemplate",
	data: function() { return Clientes.findOne(this.params._id); }
})

