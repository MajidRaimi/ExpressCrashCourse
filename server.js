const express = require('express')
const app = express()

// ! Add View Engine 
app.set('view engine' , 'ejs')



app.get('/' , (req , res) => {
    res.send('index')
}) ; 


app.get('/index' , (req , res) => {
    res.render('index' , { title : "Render With EJS" , number : 5 })
})

app.get('/error' , (req , res) => {
    // ! Send Errors 
    res.status(404).send("Could Not Access The Page")
})

app.get('/api' , (req , res) => {
    // ! Send Json 
    res.status(200).json({
        firstName : "Majid" , 
        lastName : 'Al-Raimi' , 
        address : {
            street : "Prince Sultan" , 
            houseNumber : 104
        }
    })
})


app.get("/str:word" , (req , res) => {

})


app.get('/download' , (res , req) => {
    // ! Download 
    res.download('server.js')
})



// ! Create 'userRouter' And Import It From 'routes' Folder
const userRouter = require('./routes/users.js')
const postRouter = require('./routes/posts.js')

// ! Link The Starting 
app.use('/users' , userRouter)
app.use('/posts' , postRouter)



// ! In Witch Port The Server Will Start
app.listen(3000)
