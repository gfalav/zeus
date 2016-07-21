BuscaClientes = new Mongo.Collection("buscaclientes");

BuscaClienteSchema = new SimpleSchema({
	"apellido":            { type: String, label: "Apellido:", max: 50, optional: true, defaultValue: "" },
	"nombres":             { type: String, label: "Nombre:", max: 50, optional: true, defaultValue: ""},
	"documentoNro":        { type: String, label: "Documento:", max: 15, optional: true, defaultValue: "" },
	"nombreSum":           { type: String, label: "Suministro:", max: 50, optional: true, defaultValue: "" },
	"dirSumId":            { type: String, label: "Dir Suministro:", max: 20, optional: true, defaultValue: "" },
	"medidorNro":          { type: Number, label: "Medidor:", max: 99999999, optional: true, defaultValue: null }
});

BuscaClientes.attachSchema(BuscaClienteSchema);