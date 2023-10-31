import net from "node:net";

// agregamos el parametro callback
export const ping = (ip, callback) => {
	const startTime = process.hrtime();

	const client = net.connect({ port: 80, host: ip}, ()=>{
		client.end();
    
		// añadimos la información que deseamos enseñar a el parametro info del callback, es primero es null ya que en este vendria el error
		callback(null, { time: process.hrtime(startTime), ip }); 
	});

	client.on("error", (err) => {
		client.end();
		// pasamos el error en los parametros del callback
		callback(err);
	});
};

//vemos que se le pasa un callback como parametro
ping("google.com", (err, inf)=>{
	if (err) console.error("Tenemos error: ", err);
	console.log(inf);
});


