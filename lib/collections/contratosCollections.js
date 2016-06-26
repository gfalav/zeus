Contratos = new Mongo.Collection("contratos");


ContratoSchema = new SimpleSchema({
	"_id":            { type: String, label: "Contrato Id", optional: true },
	"nombre":         { type: String, label: "Nombre Contrato", max: 50 },
	"clienteId":      { type: String, label: "Cliente Id", max: 20 },
	"cuentaId":       { type: String, label: "Cuenta Id", max: 20 },
	"tipoContrato":      { type: String, label: "Tipo de Contrato", max: 30, allowedValues: ["Edesal","AFR"], defaultValue: "Edesal" },
	"estadoContrato":    { type: String, label: "Estado del Contrato", max: 30, allowedValues: ["Pendiente de Conectar", "Vigente", "Suspendido por Impago", "Baja"], defaultValue: "Pendiente de Conectar" },
	"dirPostalId":    { type: String, label: "Direccion Postal", max: 20 },
	"fAlta":          { type: Date, label: "Fecha de Alta", optional: true },
	"fUM":            { type: Date, label: "Fecha Ult Mov", optional: true },
	"fBaja":          { type: Date, label: "Fecha Baja", optional: true },
	"usuario":        { type: String, label: "usuario:", max: 50, optional: true, defaultValue: "" }
});


Contratos.attachSchema(ContratoSchema);