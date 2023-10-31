import { procesarArchivo } from "../ejercicio3.js";

import {describe, it, afterEach} from "node:test";
import { equal, ifError } from "node:assert/strict";
import { readFile, unlinkSync, writeFileSync } from "node:fs";
import fsp from "node:fs/promises";
import { procesarArchivoPromise } from "../ejercicio3.promesas.js";

describe("3. procesarArchivoPromise", ()=>{
	afterEach(()=>{
		try{
			unlinkSync("output.txt");
		}catch(err) {console.error(err);}
	});
  
	it("3.1. procesarArchivo",(t, done)=>{
		writeFileSync("input.txt", "hola mundo");
		procesarArchivo((err) =>{
			ifError(err);
			readFile("output.txt", "utf8",(err, data)=>{
				ifError(err);
				equal(data, "HOLA MUNDO");
				done();
			});
		});
	});

	it("3.2. procesarArchivoPromise", async()=>{
		writeFileSync("input.txt", "hola mundo");
		await procesarArchivoPromise();
		const contenido = await fsp.readFile("output.txt", "utf8");
		equal(contenido, "HOLA MUNDO");
	});

});