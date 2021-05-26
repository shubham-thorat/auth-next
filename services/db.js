import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

function initDB() {
    if (mongoose.connections[0].readyState) {
        console.log('Already Connected');
        return
    }
    mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })

    const db = mongoose.connection
    db.on('error', err => console.log(err))
    db.on('connected', () => console.log('Connected To Database'))
}


export default initDB;