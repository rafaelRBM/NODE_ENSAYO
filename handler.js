'use strict';

let  argv =  require('yargs').argv ;

let  argv2= process.argv;
///Muestra por consola los valores contenidos  y Gestiondos por YARGS(argv)
///Mostrando los contenidos por el procesos Principal o aplicacion que se esta ejecutando(argv2) con handler.js

console.log(argv);
console.log(argv2);
///////////////////////////////

///console.log(' (% d,% d)',argv.x,argv.y); 

*********************************************************************************************

// module.exports.hello = async (event, context) => {
//   return {
//     statusCode: 200,
//        body: JSON.stringify({
//            message: 'Hola dsde ---Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     }),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };

// module.exports.mensageria = async (event, context) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     }),
//   };

//   console.log('se ha enviado un correo a su cuenta: xxxxxx');