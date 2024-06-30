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
    try {
        await client.connect();
        await client.db("AssessmentInsights").command({ ping: 1 });
        console.log(
            "You successfully connected to MongoDB!"
        );
    } catch (error) {
        console.error(error);
    }
}

run().catch(error => console.log(error));

const db = client.db("AssessmentInsights");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/basic/style.css', (req, res) => {
    res.sendFile(__dirname + '/basic/style.css');
});

app.get('/basic/script.js', (req, res) => {
    res.sendFile(__dirname + '/basic/script.js');
});

app.get('/logo', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "LOGO" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

var usn = '1DS22IS001'    // default usn
app.post('/usn', async (req, res) => {     // to get the usn from the user
    const { parcel } = req.body;
    usn = parcel;
    res.send('USN updated');
});

app.get('/fcar', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "First_Carousel" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/fcia1', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "First_Cia" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/fcia2', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "First_Cia2" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/fcia3', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "First_Cia3" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/CIA-I.html', (req, res) => {
    res.sendFile(__dirname + '/CIA-I.html');
});

app.get('/CIA-I', async (req, res) => {
    try {
        const data = await db.collection('CIA-I').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/CIA-II.html', (req, res) => {
    res.sendFile(__dirname + '/CIA-II.html');
});

app.get('/CIA-II', async (req, res) => {
    try {
        const data = await db.collection('CIA-II').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/CIA-III.html', (req, res) => {
    res.sendFile(__dirname + '/CIA-III.html');
});

app.get('/CIA-III', async (req, res) => {
    try {
        const data = await db.collection('CIA-III').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/CIA.html', (req, res) => {
    res.sendFile(__dirname + '/CIA.html');
});

app.get('/Final', async (req, res) => {
    try {
        const data = await db.collection('Final').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/aim.html', (req, res) => {
    res.sendFile(__dirname + "/aim.html");
});

app.get('/eligible.html', (req, res) => {
    res.sendFile(__dirname + '/eligible.html');
});

app.get('/see.html', (req, res) => {
    res.sendFile(__dirname + '/see.html');
});

app.get('/aat.html', (req, res) => {
    res.sendFile(__dirname + '/aat.html');
});

app.get('/aat1', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "AAT1" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/aat2', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "AAT2" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/aat3', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "AAT3" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/aat4', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "AAT4" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/aat5', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "AAT5" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/aat6', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "AAT6" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/aat_math.html', (req, res) => {
    res.sendFile(__dirname + '/aat_math.html');
});

app.get('/aat_ds.html', (req, res) => {
    res.sendFile(__dirname + '/aat_ds.html');
});

app.get('/aat_ld.html', (req, res) => {
    res.sendFile(__dirname + '/aat_ld.html');
});

app.get('/aat_os.html', (req, res) => {
    res.sendFile(__dirname + '/aat_os.html');
});

app.get('/aat_elective.html', (req, res) => {
    res.sendFile(__dirname + '/aat_elective.html');
});

app.get('/quiz.html', (req, res) => {
    res.sendFile(__dirname + '/quiz.html');
});

app.get('/quiz1', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "QUIZ1" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/quiz2', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "QUIZ2" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/quiz3', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "QUIZ3" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/quiz4', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "QUIZ4" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/quiz5', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "QUIZ5" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/quiz6', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "QUIZ6" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/quiz_math.html', (req, res) => {
    res.sendFile(__dirname + '/quiz_math.html');
});

app.get('/quiz_ds.html', (req, res) => {
    res.sendFile(__dirname + '/quiz_ds.html');
});

app.get('/quiz_ld.html', (req, res) => {
    res.sendFile(__dirname + '/quiz_ld.html');
});

app.get('/quiz_os.html', (req, res) => {
    res.sendFile(__dirname + '/quiz_os.html');
});

app.get('/quiz_elective.html', (req, res) => {
    res.sendFile(__dirname + '/quiz_elective.html');
});

app.get('/DS', async (req, res) => {
    try {
        const data = await db.collection('DS').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/Math', async (req, res) => {
    try {
        const data = await db.collection('Maths').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/LD', async (req, res) => {
    try {
        const data = await db.collection('LD').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/OS', async (req, res) => {
    try {
        const data = await db.collection('OS').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/PP', async (req, res) => {
    try {
        const data = await db.collection('PP').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/RD', async (req, res) => {
    try {
        const data = await db.collection('RD').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/Final', async (req, res) => {
    try {
        const data = await db.collection('Final').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/Graphs1', async (req, res) => {
    try {
        const data = await db.collection('Graphs1').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/Graphs2', async (req, res) => {
    try {
        const data = await db.collection('Graphs2').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/Graphs3', async (req, res) => {
    try {
        const data = await db.collection('Graphs3').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/lab.html', (req, res) => {
    res.sendFile(__dirname + '/lab.html');
});

app.get('/lab1', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "LAB1" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/lab2', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "LAB2" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/lab3', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "LAB3" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/lab4', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "LAB4" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/lab5', async (req, res) => {
    try {
        const data = await db.collection('images').findOne({ name: "LAB5" });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/ds.html', (req, res) => {
    res.sendFile(__dirname + '/ds.html');
});

app.get('/dv.html', (req, res) => {
    res.sendFile(__dirname + '/dv.html');
});

app.get('/ld.html', (req, res) => {
    res.sendFile(__dirname + '/ld.html');
});

app.get('/os.html', (req, res) => {
    res.sendFile(__dirname + '/os.html');
});

app.get('/DV', async (req, res) => {
    try {
        const data = await db.collection('DVLab').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/LDLab', async (req, res) => {
    try {
        const data = await db.collection('LDLab').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/OSLab', async (req, res) => {
    try {
        const data = await db.collection('OSLab').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/DSLab', async (req, res) => {
    try {
        const data = await db.collection('DSLab').findOne({ USN: usn });
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
