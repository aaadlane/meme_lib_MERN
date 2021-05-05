const express = require("express");
const app = express();
let port = 3000;




var mongoClient = require("mongodb").MongoClient;
const url = "mongodb://cosmobam:0vH0d9qTvmSvSpczZDnuKbsnYXtVfGMvxSVqU0JVNUDVndQlGFfOhnwf4iusmgCVyJidCOjNUJYmEkzrHsXXrw==@cosmobam.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@cosmobam@"



// mongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mern_lib_bam");
//   var myobj = [
//     { tags: "mexican, mariachi, crying, laugh, funny ", meme_link : "https://bamstoragememe.blob.core.windows.net/memes/mexicanmeme.png", like : 2, title: "mexican guy crying in the club" },
//    // Meme (tags, meme_link, like, id_user, title/description)
//   ];
//   dbo.collection("meme").insertMany(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);    db.close();
//   });
// });

// mongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mern_lib_bam");
//   var myobj = [
//     { nickname : "johnny", mail : "ad@bart.max", password: "password", avatar_link : "https://bamstoragememe.blob.core.windows.net/memes/mexicanmeme.png" },
//     // Users (nickname, mail, password, avatar_link) 
//   ];
//   dbo.collection("users").insertMany(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);    db.close();
//   });
// });



app.listen(port, () => {
  console.log(`App listenning at http://localhost:${port}`);
});
