var userService = require('./userService');

var readDataControl = async (req, res) =>
{
    var empolyee = await userService.readData();
    res.send({ "status": true, "data": empolyee });
}

var createDataControl = async (req, res) => 
{
    var status = await userService.createData(req.body);
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "User not created" });
    }
}

var updateDataControl = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await userService.updateData(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "User updated successfully"} );
     } else {
         res.send({ "status": false, "message": "User not updated" });
     }
}

var deleteDataControl = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.deleteData(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "User deleted successfully"} );
     } else {
         res.send({ "status": false, "message": "User not deleted" });
     }
}
module.exports = { readDataControl, createDataControl,updateDataControl,deleteDataControl };