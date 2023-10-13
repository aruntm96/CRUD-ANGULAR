const model = require('./model');

const readData = () => {
    return model.find({})
        .catch(error => { throw error; });
};

const readDataByName = (name) => {
    return model.find({ name: { $regex: name, $options: 'i' } });
};
  

const createData = (server_details) => {
    var modelData = new model();
    modelData.name = server_details.name;
    modelData.id = server_details.id;
    modelData.language = server_details.language;
    modelData.framework = server_details.framework;

    console.log('Model Data:', modelData);

    return modelData.save()
        .then(result => { return true; })
        .catch(error => { return false; });
};


const updateData = (id, server_details) => {
    return model.findByIdAndUpdate(id, server_details)
        .catch(error => { throw error; });
};

const deleteData = (id) => {
    return model.findByIdAndDelete(id)
        .catch(error => { throw error; });
};

module.exports = {
    readData,
    readDataByName,
    createData,
    updateData,
    deleteData
};
