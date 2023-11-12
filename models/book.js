const bookSchema = new Schema({
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

bookSchema.methods.showWritten = function () {
    return `${this.name} was written ${this.year}. There are currently ${this.quantity} left in stock`
}