var mongo = require('mongodb').MongoClient
var argv = process.argv
var target = argv[3]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) return console.error(err)
    var collection = db.collection("keys")

    collection.remove({
      _id: "554a655c0639034860349353"
    })
    db.close()
})
