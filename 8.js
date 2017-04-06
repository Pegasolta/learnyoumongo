var mongo = require('mongodb').MongoClient
var argv = process.argv
var target = argv[2]
// console.log("target is: "+ target);
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) return console.error(err)
    var parrots = db.collection("parrots")
    console.log(parrots);
    parrots.count({
        age: {
            $gt: +target
        }
    }, function(err, count) {
        if (err) return console.error(err)
        console.log(count)
    })
    db.close()
})
