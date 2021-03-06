const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoGroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    color: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        maxlength: 7,
        default: '#b8b8b8',
    }
});

const TodoGroup = mongoose.model('TodoGroup', todoGroupSchema);
module.exports = TodoGroup;