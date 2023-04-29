const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

router.get('/getUsers', async (req, res) => {
    try {
        const allUsers = await Users.find({});
        res.json(allUsers);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new Users(user);
    await newUser.save();

    res.json(user);
})


module.exports = router;