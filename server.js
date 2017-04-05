'use strict'
// Set up ======================================================================
let http            = require('http')
let express         = require('express')
let bodyParser      = require('body-parser')
let cookieParser    = require('cookie-parser')
let favicon         = require('serve-favicon')
let methodOverride  = require('method-override')
let logger          = require('morgan')
let fs              = require('fs')
let path            = require('path')

let routes          = require('./app/routes')

let app             = express()

const ENV = require('./config/env')[process.env.NODE_ENV || 'development']

// Set a static folder.
app.use(express.static(__dirname + '/public'));


// Set logs
// create a write stream (in append mode)
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
    flags: 'a'
})
app.use(logger('dev', {
    stream: accessLogStream
}));


// Set parser to get the body data request
app.use(bodyParser.urlencoded({
    'extended': 'true'
}))
app.use(bodyParser.json())
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// Set parser for cookies
app.use(cookieParser())


// Override HTTP methods to support DELETE PUT, if client device doesn't support them
app.use(methodOverride('X-HTTP-Method-Override'))

//Load all api routes
app.use('/api', routes())

// Catch 404 not found errors and forward to error handler
app.use((request, response, next) => {
    let err = new Error('Not Found')
    console.log("Were here")
    err.status = 404
    next(err)
})

// Middleware to catch all errors
app.use((error, request, response, next) => {
    console.error(error.stack)
    console.log("Were also here")
    response.status(error.status || 500).send(error.message)
})

//Export function startServer with port, path and callback params
exports.startServer = (port, path, callback) => {
    // Create server
    let server = http.Server(app);
    // Listening
    port = process.env.PORT || port
    server.listen(port, callback)
    console.log(`server listening on port ${port}`)

    //Intercept when application killed
    process.on('SIGINT', function() {
        console.log("\nStopping...")
        process.exit()
    });
}
