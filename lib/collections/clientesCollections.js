Clientes = new Mongo.Collection("clientes");

ClienteSchema = new SimpleSchema({
	"_id":                 { type: String, label: "Cliente Id:", optional:true },
	"apellido":            { type: String, label: "Apellido:", max: 50 },
	"apellido2":           { type: String, label: "Segundo Apellido:", max: 50, optional: true, defaultValue: "" },
	"nombres":             { type: String, label: "Nombre:", max: 50, optional: true, defaultValue: ""},
	"contacto":            { type: String, label: "Contacto:", max: 50, optional: true, defaultValue: ""  },
	"apoderado":           { type: String, label: "Apoderado:", max: 50, optional: true, defaultValue: ""  },
	"dirClienteId":        { type: String, label: "Dirección:", max: 20 },
	"documentoNro":        { type: String, label: "Nro de Documento:", max: 15 },
	"documentoTipo":       { type: String, label: "Tipo de Documento:", max: 20, allowedValues: ["DNI","LE","LC","Pasaporte","CUIL","CUIT","IIBB","Tarjeta de Crédito","Tarjeta de Débito"], defaultValue: "DNI" },
	"documentoEmisor":     { type: String, label: "Emisor:", max: 20, allowedValues: ["Argentina","Chile","Bolivia","Brasil","Otros","VISA", "Naranja","Nevada","Plena"], defaultValue: "Argentina" },
	"ciiu":                { type: Number, label: "Ciiu:", max: 999999, optional: true, defaultValue: 0   },
	"telefono":            { type: [Number], label: "Teléfono:", min: 400000, max: 9999999999, optional: true, defaultValue: []   },
	"email":               { type: [String], label: "Email:", max: 50, optional: true, defaultValue: [] },
	"web":                 { type: [String], label: "Web:", max: 50, optional: true, defaultValue: [] },
	"tClienteId":          { type: String, label: "Tipo de cliente:", max: 20, allowedValues: ["Residencial","General","Org Municipal","Org Provincial", "Org Nacional", "Industrial", "Regante"], defaultValue: "Residencial" },
	"tratamientoEspecial": { type: Boolean, label: "Tratamiento Especial:", defaultValue: false  },
	"fAlta":               { type: Date, label: "Fecha de Alta",optional: true },
	"fUM":                 { type: Date, label: "Fecha Ult Movimiento", optional: true },
	"fBaja":               { type: Date, label: "Fecha Baja", optional: true },
	"usuario":             { type: String, label: "usuario:", max: 50, optional: true, defaultValue: ""  }

});

Clientes.attachSchema(ClienteSchema);