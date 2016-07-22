Router.route('/cuentas/:_id', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() { return Clientes.findOne(this.params._id) }
		});
		this.render('cuentasListTemplate', {
			data: function() { return Clientes.findOne(this.params._id) }
		});
}, {name: 'cuentasListTemplate'});

Router.route('/cuentas/show/:_id', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() {
				cuenta = Cuentas.findOne(this.params._id);
				return Clientes.findOne(cuenta.clienteId);
			}
		});
		this.render('cuentasShowTemplate', {
			data: function() { return Cuentas.findOne(this.params._id) }
		});
}, {name: 'cuentasShowTemplate'});

Router.route('/cuentas/edit/:_id', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() {
				cuenta = Cuentas.findOne(this.params._id);
				return Clientes.findOne(cuenta.clienteId);
			}
		});
		this.render('cuentasUpdateTemplate', {
			data: function() { return Cuentas.findOne(this.params._id) }
		});
}, {name: 'cuentasUpdateTemplate'});

Router.route('/cuentas/new/:_id', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() { return Clientes.findOne(this.params._id) }
		});
		this.render('cuentasNewTemplate', {
			data: function() { return Clientes.findOne(this.params._id) }
		});
}, {name: 'cuentasNewTemplate'});