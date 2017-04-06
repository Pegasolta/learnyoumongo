var mongo = require('mongodb').MongoClient
var argv = process.argv
var target = argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) return console.error(err)
      var prices = db.collection("prices")

      prices.aggregate([
        { $match: { size: target}},
        { $group: {
          _id: "average",
          average: {
            $avg: "$price"
          }
        }}
      ]).toArray(function (err, results) {
        var value = results[0].average
        var rounded = Number(value).toFixed(2)
        console.log(rounded);
      })
    db.close()
})
