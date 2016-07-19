Suministros = new Mongo.Collection("suministros");

SuministroSchema = new SimpleSchema({
	"_id":           { type: String, label: "Suministro Id:", optional: true },
	"nombreSum":     { type: String, label: "Nombre del Suministro", max: 50 },
	"edesalId":      { type: String, label: "Edesal Id", max: 50 },
	"dirSumId":      { type: String, label: "Direccion id", max: 20 },
	"tensionSum":    { type: String, label: "Tension suministro", max: 7, allowedValues: ["220V","380V","6,6kV","13,2kV","33kV","66kV","132kV"], defaultValue: "220V" },
	"fasesSum":      { type: String, label: "Cantidad de fases", max: 10, allowedValues: ["Monofásico","Bifásico","Trifásico"], defaultValue: "Monofásico" },
	"tConexionSum":  { type: String, label: "Tipo de Conexión", max: 20, allowedValues: ["Monofásica", "Trifásica", "Pot<=50kW"], defaultValue: "Monofásica" },
	"tMedicionSum":  { type: String, label: "Tipo de Medición", max: 20, allowedValues: ["Directa","Ind c/TI","Ind c/TI/TV"], defaultValue: "Directa" },
	"fAlta":               { type: Date, label: "Fecha de Alta",optional: true },
	"fUM":                 { type: Date, label: "Fecha Ult Movimiento", optional: true },
	"fBaja":               { type: Date, label: "Fecha Baja", optional: true },
	"usuario":             { type: String, label: "usuario:", max: 50, optional: true, defaultValue: ""  }
});

Suministros.attachSchema(SuministroSchema);