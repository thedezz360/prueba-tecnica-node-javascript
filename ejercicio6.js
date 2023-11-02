// tiene que ser sincrono
import fs from "node:fs";
// el path por defecto sera .env
export function config ({path = ".env"} = {}){

	try {
		
		// obtenemos los datos del fichero
		const env = fs.readFileSync(path,"utf8");
		
		// separamos la cadena de texto por saltos de linea
		const lines = env.split("\r\n");
		

		// ahora por cada linea
		lines.forEach(line =>{
			console.log({line});
			// si el value tiene un = nos haria un split que no deseamos
			// por ende hacemos el split de esta manera y luego unimos los values
			const [key, ...value] = line.split("=");
			const joinedValue = value.join("=").trim();
			const keyTrim = key.trim();
			
			// si el value tiene comillas
			// eslint-disable-next-line quotes
			const hasQuotes = joinedValue.startsWith( '"' ) || joinedValue.startsWith("'") &&
				// eslint-disable-next-line quotes
				joinedValue.endsWith('"') || joinedValue.endsWith("'"); 

			console.log(hasQuotes);

			const valueToStore = hasQuotes 
			// tomamos los caracteres que estan entre el primer y el ultimo caracter
				? joinedValue.slice(1,-1)
				: joinedValue; 

			
			// guardamos en process
			process.env[keyTrim] = valueToStore;
		});
	
	} catch (error) {
		console.error(error);
	}
}

config();



