Router.route('/edesals', {
	name: "edesalsListTemplate",
	template: "edesalsListTemplate"
})

Router.route('/edesals/new', {
	name: "edesalsNewTemplate",
	template: "edesalsNewTemplate"
})

Router.route('/edesals/:_id', {
	name: "edesalsShowTemplate",
	template: "edesalsShowTemplate",
	data: function() { return Edesals.findOne(this.params._id); }
})

Router.route('/edesals/:_id/edit', {
	name: "edesalsUpdateTemplate",
	template: "edesalsUpdateTemplate",
	data: function() { return Edesals.findOne(this.params._id); }
})