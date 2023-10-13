var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serverSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number, 
        required: true
    },
    language: {
        type: String,
        required: true
    },
    framework: {
        type: String,
        required: true
    }
});

const server_details = mongoose.model('server_details', serverSchema);

module.exports = server_details;