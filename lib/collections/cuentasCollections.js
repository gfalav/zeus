Cuentas = new Mongo.Collection("cuentas");

CuentaSchema = new SimpleSchema({
	"_id":             { type: String, label: "Cuenta Id:", optional: true },
	"clienteId":       { type: String, label: "Cliente Id:", max: 50, optional: true, defaultValue: null },
	"nombre":          { type: String, label: "Nombre de la Cuenta:", max: 50, defaultValue: "Cuenta Principal"  },
	"indCortable":     { type: Boolean, label: "Ind Cortable:", defaultValue: "true"  },
	"tipoVencimiento": { type: String, label: "Tipo de vencimiento:", max: 20, allowedValues: ["Fijo","General"], defaultValue: "General" },
	"tipoEmision":     { type: String, label: "Tipo de emision:", max: 20, allowedValues: ["General","Acumulada Final"], defaultValue: "General"  },
	"formaPago":       { type: String, label: "Forma de pago:", max: 20, allowedValues: ["Bocas de Cobro","Débito Autom"], defaultValue: "Bocas de Cobro"  },
	"dirPostalId":     { type: String, label: "Dir Postal:", max: 20 },
	"fAlta":           { type: Date, label: "Fecha de Alta",optional: true },
	"fUM":             { type: Date, label: "Fecha Ult Movimiento", optional: true },
	"fBaja":           { type: Date, label: "Fecha Baja", optional: true },
	"usuario":         { type: String, label: "usuario:", max: 50, optional: true, defaultValue: ""  }
});

Cuentas.attachSchema(CuentaSchema);