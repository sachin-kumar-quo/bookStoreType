import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  book_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
  published: {
    type: Date,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
});

let Book = model("Book", bookSchema);
export default Book;
