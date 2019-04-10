//**Iniciamos el módulo http /
 ///* Creamos el objeto del servidor 
  ///* Preparamos las cabeceras de respuesta 

		///var fs = require("fs")
		var http = require("http");

	 
	     http.createServer(function(request, response) {

	     	// result { statuscode:200,
	     	// 	body:JSON.stringify( {
	     	// 		message: 'Rafael y KLEYNER DEBERAN APRENDER JHONY-FIVE ?',
	     	// 		input: event,



	     	// 	}),


	     	// }
	  

	        response.writeHead(200, {"Content-Type": "text/html"});
	        response.write("Rafael y KLEYNER DEBERAN APRENDER JHONY-FIVE ?");
	        
	        response.end();
}).listen(4445);
	     

//*NUESTRO servidor  ESCUCHA LAS PETICIONES EN ESTE PUERTO 4444 
