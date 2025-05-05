var express = require('express');

var router = express.Router();
// Retrieve
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/submit', async function (req, res) {
  console.log(req.body);

  
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    client.db('instagram').collection('user').insertOne(req.body)
   
  } catch (err) {
    console.log('error:', err); 
  }

  res.send('goit');
});

module.exports = router;

