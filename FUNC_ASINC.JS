////Autor..RAFAEL BARRAZA 
//COMO ESTABLECER UNA FUNCION ASINCRONA CON LA DIRECTIIVA Async()

let getNombre = async() => {

return 'HOLA--kLEYNER DONDE ESTA TU PAPI RAFA?';

};

// Invocando la funcion Sincrona getNombre()
// console.log(getNombre());

// Recuperando el resultado de la promesa de la FUNCION Asincrona getNombre()
getNombre().then(nombre => {
	console.log(nombre);
});




