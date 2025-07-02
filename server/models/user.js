const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = new mongoose.Schema(
    {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true}, 
    password: {type: String, required: true},
    score: {type: Number}
    }, 
    {collection: 'users'}   
);

User.statics.signup = async function(name, email, password){
    const exists = await this.findOne({ email });

    if(exists){
        throw Error('Email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({name, email, password: hash})

    return user;
}

const model = mongoose.model('users', User);

module.exports = model;