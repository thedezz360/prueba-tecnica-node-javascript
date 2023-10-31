export function obtenerDatosPromise() {
	// creamos el objeto promise y le pasomos los parametros resolve y reject, luego dentro de la callback especificamos el valor de cada uno de estos
	// en este caso la reject no sirve para nada, es solo para ejemplificar como seria su implentación
	return new Promise((resolve,reject) => {
		setTimeout(()=>{
			try {
				resolve({data: "datos importantes"});		
			} catch (e) {
				reject(e);
			}
		}, 2000);
	}); 
	
}

// ahora ejecutamos la función y como es una promesa obtenemos su resultado
// con then
obtenerDatosPromise()
	.then(info => {
		console.log(info);
	})
	.catch(error => {
		console.error(error);
	});

// con await
try {
	const info = await obtenerDatosPromise();	
	console.log(info);
} catch (error) {
	console.error(error);
}