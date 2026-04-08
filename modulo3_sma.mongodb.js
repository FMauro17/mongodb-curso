// MODULO 3: PROYECTO INTEGRADOR: //

const { use } = require("react");


/*
Sprint 3
En este sprint añadiremos campos a la colección para el análisis y la toma de decisiones
con las siguientes características:

1: Añadir a la colección un campo con el indicador Media Móvil Simple 
con un ancho de ventana de 4 registros, usado en análisis financiero, mediante JavaScript puro.
*/

use('inversiones');

const documentos = db.cotizaciones_dia.find().sort({fecha: 1}).toArray();

for (let i = 0; i < documentos.length; i++) {
    let sma = null;
    if (i >= 3) {
        const suma = parseFloat(documentos[i].cierre)
            + parseFloat(documentos[i - 1].cierre)
            + parseFloat(documentos[i - 2].cierre)
            + parseFloat(documentos[i - 3].cierre);
        sma = suma / 4;
    }
    db.cotizaciones_dia.updateOne(
        {_id: documentos[i]._id},
        {$set: {sma: sma}}
    );
}


/*
2: Añadir a la colección un campo llamado "operación" en donde indique 
que muestre "vender" si el cierre del día es menor a la media, y "comprar" en caso contrario.
*/

use('inversiones');

const documentos = db.cotizaciones_dia.find().sort({fecha: 1}).toArray();

for (let i = 0; i < documentos.length; i++) {
    let sma = null;
    let operacion = null;

    if (i >= 3) {
        const suma = parseFloat(documentos[i].cierre)
            + parseFloat(documentos[i - 1].cierre)
            + parseFloat(documentos[i - 2].cierre)
            + parseFloat(documentos[i - 3].cierre);
        sma = suma / 4;

        if (parseFloat(documentos[i].cierre) < sma) {
            operacion = "vender";
        } else {
            operacion = "comprar";
        }
    }
    db.cotizaciones_dia.updateOne(
        {_id: documentos[i]._id},
        {$set: {sma_4: sma, operacion: operacion}}
    );
}



// DESAFIO MODULO 3: //

/* Ejercicio 1
Contexto
Una empresa de venta de electrodomésticos se
encuentra desarrollando un software para
centralizar la logística de distribución entre sus
sucursales y sus fábricas.
Tú formas parte del equipo de desarrollo
encargado del módulo de gestión de usuarios.
El almacenamiento es gestionado en MongoDB
en una colección llamada users con los siguientes
campos: username, password, status, role.
Consigna
Dada la colección users:
● crear un cursor para leer todos los usuarios e
incluir en un array solamente aquellos que
tengan el estado como ‘active’.
*/

use('electrodomesticos');

db.users.insertMany([
    { username: "juan123", password: "abc123", status: "active", role: "admin" },
    { username: "maria456", password: "xyz789", status: "inactive", role: "user" },
    { username: "carlos789", password: "pass456", status: "active", role: "user" },
    { username: "laura321", password: "pass789", status: "inactive", role: "user" },
    { username: "pedro654", password: "pass321", status: "active", role: "admin" }
]);

const cursor = db.users.find(); 
const usuariosActivos = []; 

while (cursor.hasNext()) {
    const usuario = cursor.next(); 
    if (usuario.status === "active") {
        usuariosActivos.push(usuario); 
    }
}

usuariosActivos;



/*
Ejercicio 2
Consigna
Dada la colección users del ejercicio anterior:
● Obtener la cantidad de usuarios por rol usando el Aggregate Pipeline.
*/

use('electrodomesticos');

db.users.aggregate([
    {
        $group: {
            _id: "$role",
            cantidad: { $sum: 1 }
        }
    }
]);