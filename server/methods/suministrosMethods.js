Meteor.methods({
	suministrosNew: function(doc) {
		if (this.userId) {
			check(doc, SuministroSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var suministro = Suministros.insert(doc);			
		}
	},

	suministrosUpdate: function(doc) {
		if (this.userId) {
			check(doc, SuministroSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var suministro = Suministros.update(doc._id, {$set: doc} );
		}
	}

})