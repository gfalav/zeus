Contratos = new Mongo.Collection("contratos");


ContratoSchema = new SimpleSchema({
	"_id":            { type: String, label: "Contrato Id", optional: true },
	"cuentaId":       { type: String, label: "Cuenta Id", max: 20 },
	"tipoContrato":   { type: String, label: "Tipo de Contrato", max: 30, allowedValues: ["Edesal","AFR"], defaultValue: "Edesal" },
});


Contratos.attachSchema(ContratoSchema);