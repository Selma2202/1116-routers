'use strict'

const express = require ('express')
const app = express ( )

//require the files in the routes folder. relative to our app, so use dirname
let pingRouter = require ( __dirname + '/routes/ping') //you don't have to define .js, because this structure already implies it's .js
let duckRouter = require ( __dirname + '/routes/ducky') //you don't have to define .js, because this structure already implies it's .js

// use 'em
app.use ( '/router', pingRouter) //kinda like the static. dus nu moet je naar /router/ping ipv /ping
app.use ( '/animals', duckRouter) //kinda like the static. dus nu moet je naar /router/ping ipv /ping

app.listen (8000, ( ) => {
	console.log ('The server is listening on local host 8000')
} )