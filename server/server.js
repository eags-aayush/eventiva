import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Event from './models/EventivateSchema.js'

const app = express()
const port = process.env.PORT || 3000;


app.use(cors())
app.use(express.json());

try {
    let dbConnection = await mongoose.connect('mongodb://127.0.0.1:27017/eventivate')

    console.log('✅ MongoDB connected successfully')

    app.listen(port, () => {
        console.log(`✅ Eventivate server started on http://localhost:${port}`)
    })

} catch (error) {
    console.error('❌ MongoDB connection failed:', error.message)
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/events', async (req, res) => {
    try {
        const { image, title, performer, description, date, venue, duration, price } = req.body;

        const newEvent = new Event({ image, title, performer, description, date, venue, duration, price });
        const savedEvent = await newEvent.save();
        console.log('✅ Saved Event:', savedEvent);
        
        res.status(201).send('✅ Event added to the database!');
    } catch (error) {
        console.error('❌ Error adding event:', error);
        res.status(500).send('❌ Failed to add event.');
    }
});
