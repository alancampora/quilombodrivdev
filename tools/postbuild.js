var express = require('express');  
var path = require('path');  
var open = require('open');  
var compression =  require('compression');  
var favicon = require('serve-favicon');

/*eslint-disable no-console */

const port = process.env.PORT || 3000;  

const app = express();

console.log(__dirname);

app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(port, function(err) {  
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
