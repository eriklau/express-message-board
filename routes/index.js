var express = require('express');
var router = express.Router();

// Default messages
const messages = [
  {
    topic: "Mini Message Board App",
    text: "Add a new post topic along with your message",
    user: "Eric",
    added: new Date().toDateString()
  },
  {
    topic: "First Post",
    text: "Hello World!",
    user: "Eric",
    added: new Date().toDateString()
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main Board', messages: messages });
});

router.post('/new', function(req, res, next) {
  const { topic, text, user } = req.body;
  messages.push({ topic, text, user, added: new Date().toDateString() });
  res.redirect('/');
})

module.exports = router;
