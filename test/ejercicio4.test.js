import {describe, it} from "node:test";
import { leerArchivos } from "../ejercicio4.js";
import { equal } from "node:assert/strict";

describe("4. leerArchivos", ()=>{
	it("4.1. leerArchivos", async ()=>{
		const mensaje = await leerArchivos();
		equal(mensaje,"hola que tal" );
	});
});