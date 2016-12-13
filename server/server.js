var express = require('express'),
    app = express(), 
    port = process.env.PORT || 8081,
    router = express.Router();


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /qdd
app.use('/qdd', router);

require('./routes/routes')(router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
