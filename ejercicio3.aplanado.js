import fs from "node:fs";

// errores: 
//- faltaba el callback
//- el setTimeOut es innecesario

// estamos leyendo el contenido de input.txt y este lo pasamos a mayusculas 
// y lo escribimos en otro archivo llamado output.txt
export function procesarArchivo(callback) {
	const handleWrite = error => {
		if (error) {
			console.error("Error guardando archivo:", error.message);
			callback(error);
		}

		console.log("Archivo procesado y guardado con éxito");
		callback(null);
	};

	const handleReadFile = (error, contenido) => {
		
		if (error) {
			console.error("Error leyendo archivo:", error.message);
			callback(error);

		}

		const textoProcesado = contenido.toUpperCase();

		fs.writeFile("output.txt", textoProcesado, handleWrite);
		
	};

	fs.readFile("input.txt", "utf8", handleReadFile );
}

procesarArchivo(()=>{
	console.log("ejercicio resuelto");
});
