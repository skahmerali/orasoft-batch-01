const mongoose = require('mongoose')


const DB_URI = process.env.MONGO_DB


const db = mongoose.connect(DB_URI).then(() => console.log( 'data base is connected now'))

module.exports = {
    db : db,
} 