const express = require('express');
const router = express.Router();

// ! Router = Mini Express App


// ? router.get('/users', (req, res) => {
// ! From '/users' -> '/'
router.get('/', (req, res) => {
    res.send("<h1>List Users</h1>")
})

// ? router.get('/users/new', (req, res) => {
// ! From '/users/new' -> '/new'
router.get('/new', (req, res) => {
    res.send("User New Form")
})


router.post('/', (req, res) => {

})


// ! Always Put Your Dynamic Routes After The Static Routes 
// TODO : You Can Use This Way 
router.get('/:id', (req, res) => {
    userId = req.params.id // ? http://localhost:3000/users/123
    res.send('User Get ' + userId) // * User Get 123
})
// ? The Best Practice Is To Put It At The End , Why ? 
// ! If You Put It At The Begging Or Before Line '15' The Out Put Will Not Be 'User New Form'
// * It Will Be 'User Get New'


router.put('/:id', (req, res) => {
    userId = req.params.id // ? http://localhost:3000/users/123
    res.send('Update User ' + userId) // * User Get 123
})


router.delete('/:id', (req, res) => {
    userId = req.params.id // ? http://localhost:3000/users/123
    res.send('Delete User ' + userId) // * User Get 123
})


// TODO : Or This One 
router.route('/:id').get((req, res) => {
    userId = req.params.id
    res.send('User Get ' + userId)
}).put((req, res) => {
    userId = req.params.id
    res.send('Update User ' + userId)
}).delete((req, res) => {
    userId = req.params.id
    res.send('Delete User ' + userId)
})


// ! When Ever You Find A Variable Run This Method 
router.param('id', (req , res , next , id) => {
    console.log(id)
    next()
})




// ! Default 
module.exports = router
