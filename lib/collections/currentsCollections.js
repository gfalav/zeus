Currents = new Mongo.Collection("currents");

CurrentSchema = new SimpleSchema({
	"_id":                 { type: String, label: "Current Id:", optional: true},
	"entorno":             { type: String, label: "Entorno:" },
	"tipo":                { type: String, label: "Tipo de Current:" },
	"idCollection":        { type: String, label: "cuentaId:" },
	"fLog":                { type: Date, label: "cuentaId:" },
	"usuario":             { type: String, label: "usuario:" }
});

Currents.attachSchema(CurrentSchema);

