const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;
const { MongoClient, ServerApiVersion } = require("mongodb");

//app
const app = express();

//middlewares
app.use(express.static(__dirname));
app.use(express.json());
app.use(cors());

//mongo URI
const client = new MongoClient(mongoURI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

const run = async () => {
    try{
        await client.connect();
            await client.db("AssessmentInsights").command({ ping: 1 });
            console.log(
            "You successfully connected to MongoDB!"
        );
    }
    finally{

    }
}
    
run().catch(error => console.log)  

const db = client.db("AssessmentInsights");

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/logo',(req,res)=>{
    db.collection('images').findOne({name:"LOGO"}).then((data)=>{
        res.send(data);
    })
})

app.get('/fcar', (req, res) => {
    db.collection('images').findOne({name:"First_Carousel"}).then((data)=>{
      res.send(data)
    })
})
  
app.get('/fcia1', (req, res) => {
    db.collection('images').findOne({name:"First_Cia"}).then((data)=>{
      res.send(data)
    })
})

app.get('/fcia2', (req, res) => {
    db.collection('images').findOne({name:"First_Cia2"}).then((data)=>{
      res.send(data)
    })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});