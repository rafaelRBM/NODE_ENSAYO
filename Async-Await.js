/**async awei  // Comentarios
Creado por rafael barraza
/*
*////https://desarrolloweb.com/articulos/lectura-archivos-nodejs.html


// let getnombre = () =>  {

// return'Rafael Barraza Y Kleyner Autores :METODOSS EN CASCADA PARA  control de  VALVULAS Solenoides-Rafael Barraza Y Kleyner Autores :METODOSS EN CASCADA PARA  control de  VALVULAS Solenoides...Rafael Barraza Y Kleyner Autores :METODOSS EN CASCADA PARA  control de  VALVULAS Solenoides...Rafael Barraza Y Kleyner Autores :METODOSS EN CASCADA PARA  control de  VALVULAS Solenoides...Rafael Barraza Y Kleyner Autores :METODOSS EN CASCADA PARA  control de  VALVULAS Solenoides...Rafael Barraza Y Kleyner Autores :METODOSS EN CASCADA PARA  control de  VALVULAS Solenoides';
// }
	
// console.log(getnombre());

// console.log('proceso finalizado de lectura-...');


//=================================================================================
//var fs = require("fs");

 let fs = require('fs');

let archivo = fs.readFile('Do-Say.txt', 'utf-8',(err,data)=>{

   if(err) {
     console.log('error: ', err);
   } else {
     console.log(data);
   }
     });

 console.log(archivo);
 console.log('proceso finalizado de lectura-...');
//========================================================================================


//  fs.readFile('prueeba.txt', 'utf-8', (err, data) => {

//   if(err) {
//     console.log('error: ', err);
//   } else {
//     console.log(data);
//   }
// });

// console.log('Proceso finalizado de lectura con exito-...');










