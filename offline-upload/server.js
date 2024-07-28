const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// MongoDB Atlas configuration
const mongoURI = 'mongodb+srv://cfg24:cfg24@cluster0.cmf6c1l.mongodb.net';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

// Define a schema
const uploadSchema = new mongoose.Schema({
    symptoms: String,
    oralPH: String,
    plagueIndex: String,
    gingivalIndex: String,
    thalassemia: Boolean,
    vitaminDeficiency: Boolean,
    ironDeficiency: Boolean,
    prescription: String
});

// Create a model
const Upload = mongoose.model('Upload', uploadSchema);

app.use(bodyParser.json());

app.post('/api/upload', async (req, res) => {
    const data = req.body;
    try {
        const newUpload = new Upload(data);
        await newUpload.save();
        res.status(200).json({ status: 'success', inserted_id: newUpload._id });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
