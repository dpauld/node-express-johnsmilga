const express = require('express')
const app = express()

//exporting the route files
const people = require('./route/people')
const auth = require('./route/auth')

app.use(express.static('./methods-public'))//method public contains forms that runs in all routes, as it is used as middleware

// parse form data, 'urlencoded()' is used to recognize the incoming Request Object as strings or arrays. Mostly, used for req by html form post
app.use(express.urlencoded({extended:false}))

// parse json,
app.use(express.json())

//this routes all the request url located inside people route file
app.use('/api/people', people)

//this routes all the request url located inside auth route file
app.use('/login', auth)

app.listen(5000, () => {
    console.log('Server is listening in port 5000')
})

///Readings:
// 1) express.json() vs express.urlencoded({extended:false}) => [ https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded ] [https://stackoverflow.com/a/51844327/7828981]
//so the difference is express.json() is a body parser for post/fetch request except html post form and express.urlencoded({extended: false}) is a body parser for html post form
// 2) {extend:options} => [https://stackoverflow.com/a/50199038/7828981]
    // an example: https://stackblitz.com/edit/node-xa27zd?file=index.js