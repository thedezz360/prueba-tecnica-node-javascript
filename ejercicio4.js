import fs from "node:fs/promises";


export async function leerArchivos() {
// leemos los tres archivos en paralelo
// promise.all -> cuando se resuelvan todas las promesas del array
	const [archivo1, archivo2, archivo3 ] = await Promise.allSettled([
		fs.readFile("archivo1.txt","utf8"),
		fs.readFile("archivo2.txt","utf8"),
		fs.readFile("archivo3.txt","utf8")
	]);

	const message = [archivo1.value, archivo2.value, archivo3.value]
		.filter((value) => typeof value !== "undefined")
		.join(" ");
	
	console.log(message);

	return message;
}

leerArchivos();
	