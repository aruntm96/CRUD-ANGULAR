const userModel = require('./userModel');

const readData = () => {
    return userModel.find({})
        .catch(error => { throw error; });
};

const createData = (project_details) => {
    var userModelData = new userModel();
    userModelData.name = project_details.name;
    userModelData.id = project_details.id;
    userModelData.language = project_details.language;
    userModelData.framework = project_details.framework;

    console.log('User Model Data:', userModelData);

    return userModelData.save()
        .then(result => { return true; })
        .catch(error => { return false; });
};


const updateData = (id, project_details) => {
    return userModel.findByIdAndUpdate(id, project_details)
        .catch(error => { throw error; });
};

const deleteData = (id) => {
    return userModel.findByIdAndDelete(id)
        .catch(error => { throw error; });
};

module.exports = {
    readData,
    createData,
    updateData,
    deleteData
};
