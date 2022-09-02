//. app.js
var express = require( 'express' ),
    app = express();

app.use( express.static( __dirname + '/public' ) );

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
