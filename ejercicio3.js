import fs from "node:fs";

// errores: 
//- faltaba el callback
//- el setTimeOut es innecesario

// estamos leyendo el contenido de input.txt y este lo pasamos a mayusculas 
// y lo escribimos en otro archivo llamado output.txt
export function procesarArchivo(callback) {
	fs.readFile("input.txt", "utf8", (error, contenido) => {
		
		if (error) {
			console.error("Error leyendo archivo:", error.message);
			callback(error);

		}

		const textoProcesado = contenido.toUpperCase();

		fs.writeFile("output.txt", textoProcesado, error => {
			if (error) {
				console.error("Error guardando archivo:", error.message);
				callback(error);
			}

			console.log("Archivo procesado y guardado con éxito");
			callback(null);
		});
		
	});
}

procesarArchivo(()=>{
	console.log("ejercicio resuelto");
});
