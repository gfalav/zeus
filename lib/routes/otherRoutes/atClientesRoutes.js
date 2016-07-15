Router.route('/atclientessearch', {
	name: "atClientesSearchTemplate",
	template: "atClientesSearchTemplate"
})

Router.route('/atclientesshow/:_id', {
	name: "atClientesResumen",
	template: "atClientesResumen",
	layoutTemplate: "atClientesLayout",
	data: function() { return Clientes.findOne(this.params._id); }
})

