const express = require("express");
const app = express();
let port = 3000;




var mongoClient = require("mongodb").MongoClient;
const url = "mongodb://cosmobam:0vH0d9qTvmSvSpczZDnuKbsnYXtVfGMvxSVqU0JVNUDVndQlGFfOhnwf4iusmgCVyJidCOjNUJYmEkzrHsXXrw==@cosmobam.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@cosmobam@"

app.get("/", (req, res) => {
  res.send("salut");
  console.log(typeof res);
});



app.get("/push", (req, res) => {
mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: "John", address: "Highway 71" },
    { name: "Peter", address: "Lowstreet 4" },
    { name: "Amy", address: "Apple st 652" },
    { name: "Hannah", address: "Mountain 21" },
    { name: "Michael", address: "Valley 345" },
    { name: "Sandy", address: "Ocean blvd 2" },
    { name: "Betty", address: "Green Grass 1" },
    { name: "Richard", address: "Sky st 331" },
    { name: "Susan", address: "One way 98" },
    { name: "Vicky", address: "Yellow Garden 2" },
    { name: "Ben", address: "Park Lane 38" },
    { name: "William", address: "Central st 954" },
    { name: "Chuck", address: "Main Road 989" },
    { name: "Viola", address: "Sideway 1633" },
  ];
  dbo.collection("customers").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});

  res.send(`Insert ok`);
});

app.get("/find", (re, res) => {
    mongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo
        .collection("customers")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.send(result);
          console.log(result);
          db.close();
        });
    });
})

app.listen(port, () => {
  console.log(`App listenning at http://localhost:${port}`);
});
