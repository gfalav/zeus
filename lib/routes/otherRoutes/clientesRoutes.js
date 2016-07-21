Router.route('/clientes/new', {
	name: "clientesNewTemplate",
	template: "clientesNewTemplate"
})

Router.route('/clientes/:_id', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() { return Clientes.findOne(this.params._id) }
		});
		this.render('clientesShowTemplate', {
			data: function() { return Clientes.findOne(this.params._id) }
		});
}, {name: 'clientesShowTemplate'});

Router.route('/clientes/:_id/edit', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() { return Clientes.findOne(this.params._id) }
		});
		this.render('clientesUpdateTemplate', {
			data: function() { return Clientes.findOne(this.params._id) }
		});
}, {name: 'clientesUpdateTemplate'});