Router.route('/cuentas/:clienteId', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() { return Clientes.findOne(this.params.clienteId) }
		});
		this.render('cuentasListTemplate', {
			data: function() { return Clientes.findOne(this.params.clienteId) }
		});
}, {name: 'cuentasListTemplate'});

Router.route('/cuentas/:clienteId/:id', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() { return Clientes.findOne(this.params.clienteId) }
		});
		this.render('cuentasShowTemplate', {
			data: function() { return Clientes.findOne(this.params.id) }
		});
}, {name: 'cuentasShowTemplate'});
