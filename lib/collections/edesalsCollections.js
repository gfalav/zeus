Edesals = new Mongo.Collection("edesals");

EdesalSchema = new SimpleSchema({
	"_id":                   { type: String, label: "Edesal Id:", max: 50, optional: true, defaultValue: null },	
	"contratoId":            { type: String, label: "Contrato Id", max: 50 },
	"tarifa":                { type: String, label: "Tarifa", max: 20, allowedValues: ["1-R","1-G", "1-AP", "2-BT", "2-BTSRG", "2-BTSGI"], defaultValue: "1-R" },
	"perFactura":            { type: String, label: "Periodo de Facturación", max: 20, allowedValues: ["Mensual","Bimestral", "Trimestral", "Semestral"], defaultValue: "Mensual" },
	"potencias.$.fPot":      { type: Date, label: "Fecha Potencia", defaultValue: new Date() },
	"potencias.$.potencia":  { type: Number, label: "Potencia Max kW", max: 7},
	"potencias.$.tPot":      { type: String, label: "Tipo de Potencia", allowedValues: ["Pot Contratada","Pot Pico"], defaultValue: "Pot Contratada"},
	"consumoFijo.$.tconsumo":   { type: String, label: "Tipo de Consumo", max: 10, allowedValues: ["Activa", "Activa Pico","Activa Resto", "Activa Valle", "Potencia Pico", "Potencia Resto", "Potencia Valle"], defaultValue: "Activa" },
	"consumoFijo.$.consumo":    { type: Number, label: "Cons Fijo", max: 10 },
	"cosFi.$.nroRecargo":    { type: Number, label: "Ind Cos Fi", max: 3 },
	"cosFi.$.fechaRecargo":  { type: Date, label: "Fecha Recargo", defaultValue: new Date() },
	"cosFi.$.recargo":       { type: Number, label: "Recargo", max: 15 },
	"cosFi.$.estRecargo":    { type: String, label: "Est Recargo", max: 50, allowedValues: ["Pendiente","Anulado", "Baja"], defaultValue: "Pendiente" },
	"tipoIVA":               { type: String, label: "Tipo de IVA", max: 50, allowedValues: ["Consumidor Final","REsponsable Inscripto", "Exento", "Responsable No Incripto", "Sujeto No Categorizado"], defaultValue: "Consumidor Final" },
	"tipoIIBB":              { type: String, label: "Tipo de IIBB", max: 50, allowedValues: ["Cons Final", "Alcanzado"], defaultValue: "Cons Final" },
	"tipoPercepIIBB":        { type: String, label: "Tipo de Percep. IIBB", max: 50, allowedValues: ["Cons Final","Exento"], defaultValue: "Cons Final" },
	"estadoContrato":    { type: String, label: "Estado del Contrato", max: 30, allowedValues: ["Pendiente de Conectar", "Vigente", "Suspendido por Impago", "Baja"], defaultValue: "Pendiente de Conectar" },
	"fAlta":                 { type: Date, label: "Fecha de Alta", optional: true },
	"fUM":                   { type: Date, label: "Fecha Ult Mov", optional: true },
	"fBaja":                 { type: Date, label: "Fecha Baja", optional: true },	
	"usuario":               { type: String, label: "usuario:", max: 50, optional: true, defaultValue: "" }

});

Edesals.attachSchema(EdesalSchema);