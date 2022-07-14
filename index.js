var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get('/', function (req, res) {
    try{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("github-action");
            var myobj = { name: "Company Inc", address: "Highway 37" };
            dbo.collection("customers").insertOne(myobj, function(err, result) {
            if (err) throw err;
            res.status(200).send("1 document inserted");
            db.close();
            });
        });
    }
    catch(err){
        res.status(500).send(err)
        console.log(err)
    }
})


app.listen(PORT, function () {
    console.log('Example app listening on port 3000!')
});



module.exports = app;
