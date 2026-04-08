// MODULO 4: DESAFIO //

/*
Ejercicio 1
Contexto
Te encuentras en la entrevista laboral para el
puesto de administrador de MongoDB en una
Startup. Están evaluando tus habilidades para
comunicar MongoDB con otras fuentes de
información.

Consigna
● Importar el CSV dado de cotizaciones
financieras mediante las Mongo Tools.
● Obtener el volumen promedio.

*/

use('desafio4');
db.cotizaciones.findOne();


use('desafio4');

db.cotizaciones.aggregate([
    {
        $group: {
            _id: null,
            volumenPromedio: { $avg: "$volumen" }
        }
    }
]);



// Ejercicio 2
/* 
Consigna

● Importar el JSON de usuarios dado, mediante
las Mongo Tools, y obtener todos los datos del
usuario con ID 3.
*/

use('desafio4');
db.usuarios.findOne({ id: 3 });

