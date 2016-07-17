Router.route('/cuentas', {
	name: "cuentasListTemplate",
	layoutTemplate: "atClientesLayout",
	template: "cuentasListTemplate"
})

Router.route('/cuentas/new', {
	name: "cuentasNewTemplate",
	layoutTemplate: "atClientesLayout",
	template: "cuentasNewTemplate"
})

Router.route('/cuentas/:_id', {
	name: "cuentasShowTemplate",
	layoutTemplate: "atClientesLayout",
	template: "cuentasShowTemplate",
	data: function() { return Cuentas.findOne(this.params._id); }
})

Router.route('/cuentas/:_id/edit', {
	name: "cuentasUpdateTemplate",
	layoutTemplate: "atClientesLayout",
	template: "cuentasUpdateTemplate",
	data: function() { return Cuentas.findOne(this.params._id); }
})