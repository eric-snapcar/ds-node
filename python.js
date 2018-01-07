/*
var spawn = require('child_process').spawn,
    py    = spawn('python', ['python.py']),
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '';

py.stdout.on('data', function(data){
  console.log("TEST stdout.on data");
  console.log(data);
  dataString += data.toString();
});
py.stdout.on('end', function(){
  console.log('Sum of numbers = ',dataString);
});
py.stdin.write("TEST WRITE");
py.stdin.end();
*/
