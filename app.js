const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
})
app.use(express.static('build'));
app.get('/python', function (req, res) {
  console.log("TEST TEST API");
   res.json({ message: 'hooray! welcome to our api!' });
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
