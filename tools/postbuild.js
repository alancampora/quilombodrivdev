var express = require('express');  
var path = require('path');  
var open = require('open');  

/*eslint-disable no-console */

const port = process.env.PORT || 3000;  

const app = express();

/*
 *console.log(__dirname);
 *console.log('path join' , (path.join(__dirname, '../dist')));
 *app.use('/', express.static(path.join(__dirname, '../dist')));
 *
 */
app.get('*', function(req, res) {  
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, function(err) {  
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
