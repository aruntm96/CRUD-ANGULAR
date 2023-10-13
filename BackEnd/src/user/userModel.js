var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
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

const project_details = mongoose.model('projects', projectSchema);

module.exports = project_details;