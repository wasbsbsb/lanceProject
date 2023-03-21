var express = require('express');
var router = express.Router();
// const { MongoClient } = require('mongodb');
const jwt = require('./../utils/index')

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);



// // Database Name


// async function main(dbName, collectionName, type, data) {
//   // Use connect method to connect to the server
//   await client.connect();

//   const db = client.db(dbName);
//   const collection = db.collection(collectionName);

//   // the following code examples can be pasted here...
//   //插入数据
//   if (type === 'insertResult') {
//     const insertResult = await collection.insertMany(data);
//     console.log('Inserted documents =>', insertResult);
//     return insertResult;


//   } else if (type === 'findResult') {
//     const findResult = await collection.find(data).toArray();
//     console.log('Found documents =>', findResult);
//     return findResult;

//   } else if (type === 'updateResult') {
//     const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
//     console.log('Updated documents =>', updateResult);

//     return 'done.';

//   } else if (type === 'deleteResult') {
//     const deleteResult = await collection.deleteMany({ a: 3 });
//     console.log('Deleted documents =>', deleteResult);

//     return 'done.';

//   }


// }











/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('ssss3s')
  next()

});

router.get('/haha', function (req, res, next) {
  console.log(req.headers.authorization);
  res.send({name:"fwfwfw"});
  next()

});




router.post('/login', function (req, res, next) {

  const { username, password } = req.body
  // console.log( '=======1', req.headers.authorization , '=======1')
  const newJwt = new jwt()

  // const tokenRes = newJwt.verifyToken(req.headers.authorization)

  // console.log(tokenRes, '===========2')
  // console.log("---", token, ';')

  main('userlist', 'userlist', 'findResult', { name: username, password }).then(e => {
    if (e.length) {

      const token = newJwt.generateToken(username)
     

      res.send({
        status: 200,
        data: true,
        username,
        token: token  
      })
    } else {
      res.send({
        status: 200,
        data: false
      })
    }
  }).catch(() => {
    res.send({
      status: 200,
      data: false
    })
  }).finally(() => {
    client.close()
  });

});


router.post('/signup', function (req, res, next) {

  const { username, password } = req.body
  // const newJwt = new jwt()


  main('userlist', 'userlist', 'insertResult', [{ name: username, password }]).then(e => {

    console.log(e ,'sssssssssss=')
    if (e.insertedCount === 1) {

      // const token = newJwt.generateToken(username)
     

      res.send({
        status: 200,
        data: true,
        // username,
        // token: token  
      })
    } else {
      res.send({
        status: 200,
        data: false
      })
    }
  }).catch(() => {
    res.send({
      status: 200,
      data: false
    })
  }).finally(() => {
    client.close()
  });






});

module.exports = router;
