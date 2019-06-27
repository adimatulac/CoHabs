const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    id: {
        type: String,
       required: [true, "Id field is required"]
    },
    message: {
        type: String,
        required: [true, "Message field is required"]
    },
    type: {
        type: String,
        required: [true, "Type field is required"]
    },
    date: {
        type: String
    }
});

const Note = mongoose.model('note', NoteSchema);

module.exports = Note;

