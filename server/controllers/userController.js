const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const createJWT = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '1d'});
}

const loginUser = async (req, res ) => {
    const {email, password} = req.body;

        try{
        const user = await User.login(email, password);

        const token = createJWT(user._id);
        // console.log(token);
        res.status(200).json({email, token}); 

    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

const signupUser = async (req, res ) => {
    const {name, email, password} = req.body;

    try{
        const user = await User.signup(name, email, password);

        const token = createJWT(user._id);
        // console.log(token);
        res.status(200).json({email, token}); 

    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {loginUser, signupUser}