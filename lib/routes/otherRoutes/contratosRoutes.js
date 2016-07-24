Router.route('/contratos/:_id', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() { return Clientes.findOne(this.params._id) }
		});
		this.render('contratosListTemplate', {
			data: function() { return Clientes.findOne(this.params._id) }
		});
}, {name: 'contratosListTemplate'});

Router.route('/contratos/show/:_id', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() {
				contrato = Contratos.findOne(this.params._id);
				cuenta = Cuentas.findOne(contrato.cuentaId);
				return Clientes.findOne(cuenta.clienteId);
			}
		});
		this.render('contratosShowTemplate', {
			data: function() { return Contratos.findOne(this.params._id) }
		});
}, {name: 'contratosShowTemplate'});

Router.route('/contratos/edit/:_id', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() {
				contrato = Contratos.findOne(this.params._id);
				cuenta = Cuentas.findOne(contrato.cuentaId);
				return Clientes.findOne(cuenta.clienteId);
			}
		});
		this.render('contratosUpdateTemplate', {
			data: function() { return Contratos.findOne(this.params._id) }
		});
}, {name: 'contratosUpdateTemplate'});

Router.route('/contratos/new/:_id', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() { return Clientes.findOne(this.params._id) }
		});
		this.render('contratosNewTemplate', {
			data: function() { return Clientes.findOne(this.params._id) }
		});
}, {name: 'contratosNewTemplate'});