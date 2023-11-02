import { delay } from "../ejercicio5.js";
import { describe, it } from "node:test";
import assert from "node:assert";


describe("5. funcionDelay", ()=>{
	it("2.1. delay", (_,done)=>{

		const time = 3000; // -> tiempo de retraso en ms
		const startTime = Date.now();

		delay(time)
			.then(()=>{
				const endTime = Date.now();
				const eleapsedTime = endTime - startTime;

				// Asegúrate de que el proceso se completó después del retraso y antes de un tiempo razonable.
				assert(eleapsedTime >= time && eleapsedTime < time + 100); // un margen de 100 ms

				done();
			})
			.catch((error) => done(error));
	});
});
