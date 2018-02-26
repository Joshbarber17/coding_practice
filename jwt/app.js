//node.js API authentication with JWT vide https://www.youtube.com/watch?v=7nafaH9SddU

const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.get('/api', (req, res) => {
  res.json({
    message: 'welcome to the api'
  });
});

app.post('/api/posts', verifyToken, (req, res) => {
  console.log(req);
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'post has been created',
        authData
      });
    }
  });
});

app.post('/api/login', (req, res) => {
  // //mock user
  // const fakeUser = {
  //   id: 1,
  //   username: 'johnDoe@hotmail.com',
  //   password: 'password1234'
  // }
  //USER NOW COMING FROM JSON IN POSTMAN IN SAME FORMAT
  jwt.sign({user: req.body}, 'secretKey', (err, token) => {
    res.json({
      token: token
    });
  });
});

//FORMAT OF token
// Authorization: Bearer <access_token>

//verify token
function verifyToken(req, res, next) {
  //get auth header value
  const bearerHeader = req.headers['authorization'];
  // check if bearer is undefinded
  if (typeof bearerHeader !== 'undefined') {
    //bearer header will be 'Bearer ;klajsdf;lkjasdf;lkjas;dflkjas;dlfkjetc. split it at the space to just get the token'
    const bearer = bearerHeader.split(' ');
    //get token from array
    const bearerToken = bearer[1];
    //set the token
    req.token = bearerToken;
    //call next middleware
    next();
  } else {
    //forbidden
    res.sendStatus(403);
  }
}

app.listen(5000, () => console.log('server is started on port 5000'));
