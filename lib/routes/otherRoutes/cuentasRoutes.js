Router.route('/cuentas', {
	name: "cuentasListTemplate",
	template: "cuentasListTemplate"
})

Router.route('/cuentas/new', {
	name: "cuentasNewTemplate",
	template: "cuentasNewTemplate"
})

Router.route('/cuentas/:_id', {
	name: "cuentasShowTemplate",
	template: "cuentasShowTemplate",
	data: function() { return Cuentas.findOne(this.params._id); }
})

Router.route('/cuentas/:_id/edit', {
	name: "cuentasUpdateTemplate",
	template: "cuentasUpdateTemplate",
	data: function() { return Cuentas.findOne(this.params._id); }
})