// DESAFIO MODULO 5 //

/*
Consigna
● Descargar mediante una petición a la URL
(con wget o curl) estos archivos JSON:
○ https://jsonplaceholder.typicode.com/users
○ https://jsonplaceholder.typicode.com/posts
● Una vez descargados los archivos JSON,
importarlos mediante las Mongo Tools.

● Una vez importados:
Crear un script para unir esas dos
colecciones en una sola nueva, de forma tal
que los posts queden anidados a cada usuario
según corresponda (cada post tiene un campo
userId que coincide con el campo id de un
usuario).
*/

use('desafio5');

const usuarios = db.users.find().toArray();

usuarios.forEach(usuario => {
    const posts = db.posts.find({ userId: usuario.id }).toArray();
    usuario.posts = posts;
    db.usuarios_con_posts.insertOne(usuario);
});

/*
Ejercicio 2
Consigna
● Crear un script, basado en la colección
generada en el ejercicio anterior, que permita
obtener el id de usuario y la cantidad de
posts de cada usuario.
*/

use('desafio5');
db.usuarios_con_posts.aggregate([
    {
        $project: {
            _id: 0,
            id: 1,
            cantidad_posts: { $size: "$posts" }       
        }
    }
]);




