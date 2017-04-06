var mongo = require('mongodb').MongoClient
var argv = process.argv

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) return console.error(err)
    var users = db.collection("users")

    collection.insert({
        a: 2
    }, function(err, data) {
        if (err) return console.error(err)
        console.log(data);
    })
})
