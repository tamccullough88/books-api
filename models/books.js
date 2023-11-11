// const bookSchema = new Schema({
//     title: { type: String, required: true },
//     image: { type:String, default: "http://placekitten.com/350/350"},
//     description: { type: String, required: true },
//     city: { type: String, default: 'Anytown' },
//     state: { type: String, default: 'USA' },
//     year: {
//     type: Number,
//     min: [1776, "Yay America, but this restaurant isn't that old, is it?"],
//     max:[new Date().getFullYear(), "It's it's not open yet, you can't possibly know how it is!"]
//     },
//     quantity: {type: String}
// })

// bookSchema.methods.showWritten = function(){
//     return `${this.name} was written ${this.year}. There are currently ${this.quantity} left in stock`
// }