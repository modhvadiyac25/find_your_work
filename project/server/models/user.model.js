const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'First name cannot ne empty !!'
    },
    lastname: {
        type: String,
        required: 'Last name cannot ne empty !!'
    },
    mobile_no: {
        type: Number,
        required: 'Mobile number cannot ne empty !!'
    },
    email: {
        type: String,
        required: 'Email cannot ne empty !!',
        unique: true
    },
    password: {
        type: String,
        required: 'Password cannot ne empty !!'
    }

});

//custom validation for email

userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);

}, 'Invalide Email Address');

userSchema.methods.verifyPassword = function(password) {


    if (this.password == password) {
        return true;
    } else {
        return false;
    }
}
userSchema.methods.generatejwt = function() {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXP
    });
}

mongoose.model("User", userSchema, 'User');