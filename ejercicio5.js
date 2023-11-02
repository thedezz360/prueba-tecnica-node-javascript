
export async function delay (time) {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			try {
				resolve();
			} catch (error) {
				reject(error);
			}
		},time);
	});
}
delay(3000).then(() => console.log("Hola mundo"));
// o..
await delay(3000);
console.log("Hola mundo");