import express, { json } from "express";


const port = 3000;


export const app = express();
app.use(json());

const items = [{
	id: 1,
	content: "Item 1"
}];

// get items
app.get("/items", (req,res)=>{
	return res.json(items);
});

// retornamos un item por id
app.get("/items/:id",(req, res)=>{
	const { id } = req.params;
	const item = items.find(item => item.id === parseInt(id));
	console.log(item);
	if (item) {
		return res.json(item);
	}else{
		return res.json({status: "notFound"});
	}
});

// creamos un item
app.post("/items", (req, res)=>{
	const {content} = req.body;
	const newId = items.length + 1;
	const newItem = {id: newId, content: content};

	items.push(newItem);
	return res.json(newItem);
});

// actualizamos un item
app.put("/items/:id", (req, res)=>{
	const {id} = req.params;
	const { content } = req.body;

	const item = items.find(item => item.id === +id);
	// parace que es una referencia al item que tenemos en el array
	// por ende cualquier cambio que le hagamos se reflejara en el 
	// mismo objeto que tengamos en el array
	item.content = content;
	return res.json(item);
	// // recuperamos el index
	// const itemIndex = items.findIndex(item => item.id === parseInt(id) );
	// console.log({itemIndex});
	// // recuperamos el item
	// const itemToUpdate = items[itemIndex];
	// // actualizamos el contenido 
	// itemToUpdate.content = content;
	// // actualizamos el item en los items
	// items[itemIndex]= itemToUpdate;
	
	// res.json(itemToUpdate);

});

app.delete("/items/:id", (req, res)=>{
	const {id} = req.params;
	const itemIndex = items.findIndex(item => item.id === parseInt(id));

	if(itemIndex !== -1){
		items.splice(itemIndex, 1);
		return res.status(200).json();
	}else{
		return res.send("item no found");
	}

});


export const server = app.listen(port,()=>{
	console.log("listen on port: ", port );
});