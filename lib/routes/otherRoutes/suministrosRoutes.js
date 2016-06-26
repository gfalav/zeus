Router.route('/suministros', {
	name: "suministrosListTemplate",
	template: "suministrosListTemplate"
})

Router.route('/suministros/new', {
	name: "suministrosNewTemplate",
	template: "suministrosNewTemplate"
})

Router.route('/suministros/:_id', {
	name: "suministrosShowTemplate",
	template: "suministrosShowTemplate",
	data: function() { return Suministros.findOne(this.params._id); }
})

Router.route('/suministros/:_id/edit', {
	name: "suministrosUpdateTemplate",
	template: "suministrosUpdateTemplate",
	data: function() { return Suministros.findOne(this.params._id); }
})