const express = require('express')
const path = require('path')
const app = express()

//// Move the index.html from navbar app to public. When all the assets are static(eg:landing page), we can dump everything including static html and the site will run smoothly 
app.use(express.static('./public'))// if ./navbar-app if index.html is not found.

//app.use('/static', express.static('public'))//Here static is a virtual path prefix, that does not exist in file system

// app.get('/', (req, res)=> {//if there is any index.html in express static file then root get method does not execute
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//     //#Optiones for serving a request:
//     //1. Using sendFile method
//     //2. Adding to static assestts [used when asset is static]
//     //3. Server Side Rendering(SSR) using Template Engine [used mostly when asset is dynamic] 
// })

//instead of responding with automatic response from express we can define our custome 404 response for all including get resource,post resource
app.all('*', (req,res) => {
    res.status(404).send('Not avialable')
})
app.listen(5000, () =>{
    console.log("server is listening")
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

//express.static : used for importing static assets, static assets are files that server don't need to change unlike the dynamic html template pages