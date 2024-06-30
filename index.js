const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;
const { MongoClient, ServerApiVersion } = require("mongodb");

//app
const app = express();

//middlewares
app.use(express.static('basic'));
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

app.get('/basic/style.css', (req, res) => {
    res.sendFile(__dirname + '/basic/style.css');
})

app.get('/basic/script.js', (req, res) => {
  res.sendFile(__dirname + '/basic/script.js');
})

app.get('/logo',(req,res)=>{
    db.collection('images').findOne({name:"LOGO"}).then((data)=>{
        res.send(data);
    })
})

var usn = '1DS22IS001'    // default usn
app.post('/usn', async(req, res) => {     // to get the usn from the user
    const {parcel} = req.body;
    usn = parcel;
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

app.get('/fcia3', (req, res) => {
  db.collection('images').findOne({name:"First_Cia3"}).then((data)=>{
    res.send(data)
  })
})

app.get('/index.html',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
})

app.get('/CIA-I.html',(req,res)=>{
  res.sendFile(__dirname + '/CIA-I.html');
})

app.get('/CIA-I',(req,res)=>{
  db.collection('CIA-I').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/CIA-II.html',(req,res)=>{
  res.sendFile(__dirname + '/CIA-II.html');
})

app.get('/CIA-II',(req,res)=>{
  db.collection('CIA-II').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/CIA-III.html',(req,res)=>{
  res.sendFile(__dirname + '/CIA-III.html');
})

app.get('/CIA-III',(req,res)=>{
  db.collection('CIA-III').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/CIA.html',(req,res)=>{
  res.sendFile(__dirname + '/CIA.html');
})

app.get('/Final',(req,res)=>{
  db.collection('Final').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/aim.html',(req,res)=>{
  res.sendFile(__dirname + "/aim.html")
})

app.get('/eligible.html',(req,res)=>{
  res.sendFile(__dirname + '/eligible.html');
})

app.get('/see.html',(req,res)=>{
  res.sendFile(__dirname + '/see.html');
})

app.get('/aat.html',(req,res)=>{
  res.sendFile(__dirname + '/aat.html');
})

app.get('/aat1', (req, res) => {
    db.collection('images').findOne({name:"AAT1"}).then((data)=>{
      res.send(data)
    })
})

app.get('/aat2', (req, res) => {
    db.collection('images').findOne({name:"AAT2"}).then((data)=>{
      res.send(data)
    })
})

app.get('/aat3', (req, res) => {
    db.collection('images').findOne({name:"AAT3"}).then((data)=>{
      res.send(data)
    })
})

app.get('/aat4', (req, res) => {
    db.collection('images').findOne({name:"AAT4"}).then((data)=>{
      res.send(data)
    })
})

app.get('/aat5', (req, res) => {
    db.collection('images').findOne({name:"AAT5"}).then((data)=>{
      res.send(data)
    })
})

app.get('/aat6', (req, res) => {
    db.collection('images').findOne({name:"AAT6"}).then((data)=>{
      res.send(data)
  })
})

app.get('/aat_math.html',(req,res)=>{
  res.sendFile(__dirname + '/aat_math.html');
})

app.get('/aat_ds.html',(req,res)=>{
  res.sendFile(__dirname + '/aat_ds.html');
})

app.get('/aat_ld.html',(req,res)=>{
  res.sendFile(__dirname + '/aat_ld.html');
})

app.get('/aat_os.html',(req,res)=>{
  res.sendFile(__dirname + '/aat_os.html');
})

app.get('/aat_elective.html',(req,res)=>{
  res.sendFile(__dirname + '/aat_elective.html');
})

app.get('/quiz.html',(req,res)=>{
  res.sendFile(__dirname + '/quiz.html');
})

app.get('/quiz1', (req, res) => {
    db.collection('images').findOne({name:"QUIZ1"}).then((data)=>{
      res.send(data)
    })
})

app.get('/quiz2', (req, res) => {
    db.collection('images').findOne({name:"QUIZ2"}).then((data)=>{
        res.send(data)
    })
})

app.get('/quiz3', (req, res) => {
    db.collection('images').findOne({name:"QUIZ3"}).then((data)=>{
      res.send(data)
    })
})

app.get('/quiz4', (req, res) => {
    db.collection('images').findOne({name:"QUIZ4"}).then((data)=>{
        res.send(data)
    })
})

app.get('/quiz5', (req, res) => {
    db.collection('images').findOne({name:"QUIZ5"}).then((data)=>{
      res.send(data)
    })
})

app.get('/quiz6', (req, res) => {
    db.collection('images').findOne({name:"QUIZ6"}).then((data)=>{
        res.send(data)
    })
})

app.get('/quiz_math.html', (req, res) => {
  res.sendFile(__dirname + '/quiz_math.html');
})

app.get('/quiz_ds.html', (req, res) => {
  res.sendFile(__dirname + '/quiz_ds.html');
})

app.get('/quiz_ld.html', (req, res) => {
  res.sendFile(__dirname + '/quiz_ld.html');
})

app.get('/quiz_os.html', (req, res) => {
  res.sendFile(__dirname + '/quiz_os.html');
})

app.get('/quiz_elective.html', (req, res) => {
  res.sendFile(__dirname + '/quiz_elective.html');
})

app.get('/DS',(req,res)=>{
  db.collection('DS').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/Math',(req,res)=>{
  db.collection('Maths').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/LD',(req,res)=>{
  db.collection('LD').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/OS',(req,res)=>{
  db.collection('OS').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/PP',(req,res)=>{
  db.collection('PP').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/RD',(req,res)=>{
  db.collection('RD').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/Final',(req,res)=>{
  db.collection('Final').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/Graphs1',(req,res)=>{
  db.collection('Graphs1').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/Graphs2',(req,res)=>{
  db.collection('Graphs2').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/Graphs3',(req,res)=>{
  db.collection('Graphs3').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })
})

app.get('/lab.html',(req,res)=>{
  res.sendFile(__dirname + '/lab.html');
})

app.get('/lab1', (req, res) => {
    db.collection('images').findOne({name:"LAB1"}).then((data)=>{
      res.send(data)
    })
})
  
app.get('/lab2', (req, res) => {
    db.collection('images').findOne({name:"LAB2"}).then((data)=>{
        res.send(data)
    })
})

app.get('/lab3', (req, res) => {
    db.collection('images').findOne({name:"LAB3"}).then((data)=>{
      res.send(data)
    })
})

app.get('/lab4', (req, res) => {
    db.collection('images').findOne({name:"LAB4"}).then((data)=>{
        res.send(data)
    })
})

app.get('/lab5', (req, res) => {
    db.collection('images').findOne({name:"LAB5"}).then((data)=>{
        res.send(data)
    })
})

app.get('/ds.html', (req, res) => {
  res.sendFile(__dirname + '/ds.html');
})

app.get('/dv.html', (req, res) => {
  res.sendFile(__dirname + '/dv.html');
})

app.get('/ld.html', (req, res) => {
  res.sendFile(__dirname + '/ld.html');
})

app.get('/os.html', (req, res) => {
  res.sendFile(__dirname + '/os.html');
})

app.get('/DV',(req,res)=>{
  db.collection('DVLab').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })  
})

app.get('/LDLab',(req,res)=>{
  db.collection('LDLab').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })  
})

app.get('/OSLab',(req,res)=>{
  db.collection('OSLab').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })  
})

app.get('/DSLab',(req,res)=>{
  db.collection('DSLab').findOne({USN:usn}).then((data)=>{
    res.send(data)
  })  
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});