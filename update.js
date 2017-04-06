var mongo = require('mongodb').MongoClient
var argv = process.argv
var target = argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) return console.error(err)
    var collection = db.collection("users")

    collection.update(
      {"username": "tinatime"},
      {
        $set: {"age": 40}
    })
    db.close()
})
