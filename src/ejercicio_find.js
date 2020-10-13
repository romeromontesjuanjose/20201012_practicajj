// Primeramente agrege documentos (canciones) a mi colección (musica)
db.musica.insertMany([
    {"nombre":"What is love","añosalida":1993,"genero":"electronica"},
    {"nombre":"Satisfaction","añosalida":1965,"genero":"rock"},
    {"nombre":"Fireflies","añosalida":2009,"genero":"pop"},
    {"nombre":"All the things she said","añosalida":2002,"genero":"pop"},
    {"nombre":"Whatever it takes","añosalida":2017,"genero":"rock"},
    {"nombre":"Take five","añosalida":1959,"genero":"jazz"},])
//Después realize algunas busquedas.
db.musica.find( { "nombre":"Fireflies"} ) /* Esta es una busqueda simple. Busca a las canciones
llamadas Fireflies */
db.musica.find( { "nombre": { $eq:"Take five"} }) /* Esta es una busqueda con un query selector 
de comparación. Busca a las canciones llamadas Take five */
db.musica.find( { $and: [ { "genero": { $ne:"pop" } }, { "añosalida": { $gt: 2000 } } ] } )
/* Esta es una busqueda con varios query
selectores usando un query logico and. Realiza la 
busqueda de canciones que no sean de genero pop y que hayansido lanzadas despues del año 2000 */ 
db.musica.find( { $or: [ { "añosalida": { $lt: 1985 } }, { "añosalida": 2017 } ] } ) /*Esta es una busqueda
de varios query selectores usando un query logico or. Realiza la busqueda de canciones que 
fueron lanzadas antes de 1985 y en 2017 */ 
