const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req, res) => {
			const url ="mongodb+srv://mohandhumal07:gG1vmkH5CUTgoMgQ@cluster0.9cjppjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
			const client = new MongoClient(url);
			const db = client.db("wn125june24");
			const coll = db.collection("student");
			const record = {"name":req.body.name,"year":req.body.year, "choice":req.body.choice};
			coll.insertOne(record)
			.then(result => res.send(result))
			.catch(error => res.send(error));
});

app.listen(9000, () => { console.log("server ready @ 9000 ");});

