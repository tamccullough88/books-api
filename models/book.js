//require mongoose
const mongoose = require('mongoose')

const { Schema } = mongoose

const booksSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, default: "http://placekitten.com/350/350" },
    description: { type: String, required: true },
    year: {
        type: Number,
        min: [2000, "Date too early, please enter correct date."],
        max: [new Date().getFullYear(), "date has not happened yet, please enter correct date"]
    },
    quantity: { type: Number }
})

booksSchema.methods.showWritten = function () {
    return `${this.title} was written ${this.year}. There are currently ${this.quantity} left in stock`
}


module.exports = mongoose.model('Books', booksSchema)