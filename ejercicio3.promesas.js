import fs from "node:fs";

// errores: 
//- faltaba el callback
//- el setTimeOut es innecesario

// estamos leyendo el contenido de input.txt y este lo pasamos a mayusculas 
// y lo escribimos en otro archivo llamado output.txt
export async function procesarArchivoPromise() {
	let contenido = "";
	// try {
	// 	contenido = await fs.promises.readFile("input.txt", "utf8");

	// } catch (error) {
	// 	console.error("Error leyendo archivo: " , error.message);
	// 	throw error;
	// }

	contenido = await fs.promises.readFile("input.txt","utf8")
		.catch(error =>{
			console.error("Error leyendo archivo:", error);
			// si error contenido vacio
			return "";
		});


	const textoProcesado = contenido.toUpperCase();

	try {
		await fs.promises.writeFile("output.txt", textoProcesado);
		
	} catch (error) {
		console.error("Error guardando archivo:", error);
		throw error;
	}


}

procesarArchivoPromise()
	.then(console.log("esto ya funciona"));
