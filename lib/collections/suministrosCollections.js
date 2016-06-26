Suministros = new Mongo.Collection("suministros");

SuministroSchema = new SimpleSchema({
	"_id":          { type: String, label: "Suministro Id:", optional: true },
	"nombreSum":    { type: String, label: "Nombre del Suministro", max: 50 },
	"dirSumId":     { type: String, label: "Direccion id", max: 20 },
	"tensionSum":   { type: Number, label: "Tension suministro", max: 7, allowedValues: ["220V","380V","6,6kV","13,2kV","33kV","66kV","132kV"], defaultValue: "220V" },
	"fasesSum":     { type: String, label: "Cant fases", max: 10, allowedValues: ["Monofásico","Bifásico","Trifásico"], defaultValue: "Monofásico" },
	"tConexionId":  { type: String, label: "Tipo de Conexion", max: 20 },
	"tMedicionId":  { type: String, label: "Tipo de Medición", max: 20 },
	"fAlta":               { type: Date, label: "Fecha de Alta",optional: true },
	"fUM":                 { type: Date, label: "Fecha Ult Movimiento", optional: true },
	"fBaja":               { type: Date, label: "Fecha Baja", optional: true },
	"usuario":             { type: String, label: "usuario:", max: 50, optional: true, defaultValue: ""  }
});

Suministros.attachSchema(SuministroSchema);