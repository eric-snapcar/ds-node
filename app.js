const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
})
app.use(express.static('build'));
app.get('/test', function (req, res) {
   res.json({ message: 'TEST API OK' });
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
