Meteor.methods({
	atBusca: function(doc) {
		result = {};

		if (doc.apellido) {result.apellido = doc.apellido} else {result.apellido = null};
		if (doc.apellido) {result.nombres = doc.nombres} else {result.nombres = null};
		if (doc.apellido) {result.documentoNro = doc.documentoNro} else {result.documentoNro = null};
		if (doc.apellido) {result.nombreSum = doc.nombreSum} else {result.nombreSum = null};
		if (doc.apellido) {result.dirSumId = doc.dirSumId} else {result.dirSumId = null};
		if (doc.apellido) {result.medidorNro = doc.medidorNro} else {result.medidorNro = null};

		return result;
	}
})