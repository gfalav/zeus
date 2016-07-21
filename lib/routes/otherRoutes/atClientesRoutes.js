Router.route('/atclientessearch', function() {
		this.render('atClientesFormSearchTemplate', {to: 'aside'});
		this.render('atClientesListTemplate');
	},	{name: 'atclientessearch'}
);

Router.route('/atclientesshow/:_id', function() {
		this.render('atClientesTreeview', {
			to: 'aside',
			data: function() { return Clientes.findOne(this.params._id) }
		});
		this.render('atClientesResumen', {
			data: function() { return Clientes.findOne(this.params._id) }
		});
}, {name: 'atClientesResumen'});