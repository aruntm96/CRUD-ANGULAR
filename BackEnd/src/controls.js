var functions = require('./functions');

var readDataControl = async (req, res) =>
{
    var data = await functions.readData();
    res.send({ "status": true, "data": data });
}

var readDataByNameControl = async (req, res) => {
    try {
      const name = req.params.name;
      const servers = await functions.readDataByName(name);
      
      if (servers.length > 0) {
        res.status(200).json(servers);
      } else {
        res.status(404).json({ message: 'No servers found with the given name.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

var createDataControl = async (req, res) => 
{
    var status = await functions.createData(req.body);
    if (status) {
        res.send({ "status": true, "message": "Server created successfully" });
    } else {
        res.send({ "status": false, "message": "Server not created" });
    }
}

var updateDataControl = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await functions.updateData(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Server updated successfully"} );
     } else {
         res.send({ "status": false, "message": "Server not updated" });
     }
}

var deleteDataControl = async (req, res) => 
{
     console.log(req.params.id);
     var result = await functions.deleteData(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Server deleted successfully"} );
     } else {
         res.send({ "status": false, "message": "Server not deleted" });
     }
}
module.exports = { readDataControl, readDataByNameControl, createDataControl,updateDataControl,deleteDataControl };