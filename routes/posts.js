const express = require('express') ; 
const router = express.Router() ; 

// ! Router = Mini Express App


// ? router.get('/post', (req, res) => {
// ! From '/posts' -> '/'
router.get('/', (req, res) => {
    res.send("<h1>Posts List</h1>")
})

// ? router.get('/post/new', (req, res) => {
// ! From '/post/new' -> '/new'
router.get('/new', (req, res) => {
    res.send("Add New Post")
})


// ! Default 
module.exports = router
