// PROYECTO INTEGRADOR MODULO 2: //

// 1: OBTENER LA CANTIDAD TOTAL DE REGISTROS
use('inversiones');
db.cotizaciones_dia.countDocuments();

// 2: CONSEGUIR EL REGISTRO COMPLETO DADA UNA FECHA
db.cotizaciones_dia.findOne({ fecha: "2021-12-31"});





// DESAFIO MODULO 2: //

/* 1: Este ejercicio ayudará, a quienes estén familiarizados
con SQL, a migrar sus conocimientos a MongoDB.
Para eso, se propone realizar en MongoDB las
siguientes consultas SQL.

A - SELECT * FROM clientes;
B - SELECT * FROM clientes WHERE cuit IS NOT NULL;
C - SELECT * FROM clientes WHERE cuil = “20658945871”;
D - INSERT INTO clientes (cuil, nombre_apellido) VALUES (“206988547”, “Lorena Avillalba”);
E - DELETE FROM clientes WHERE cuil IS NULL;
*/
//A: 
use('transporte_congelados');
db.clientes.find();

/*B:
$ne significa 'not equal' osea "distinto de" equivalente al IS NOT NULL de SQL */ 
db.clientes.find({cuit_cuil: {$ne: null}});

//C: 
db.clientes.find({cuit_cuil: "20658945871"});

//D:
db.clientes.insertOne({
  cuit_cuil: "206988547",
  nombre_apellido: "Lorena Avillalba"
});

//E:
db.clientes.deleteMany({cuit_cuil: null});

/* 2: La empresa necesita organizar un envío masivo de
mercadería a una zona determinada. Para eso necesita
obtener todos los clientes que tengan dirección con
código postal 1408. ¿Cómo se puede diseñar esa
consulta? 
*/
db.clientes.find({"direcciones.codigo_postal": "1408"});