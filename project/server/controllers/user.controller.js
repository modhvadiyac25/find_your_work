const mongooes = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongooes.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.mobile_no = req.body.mobile_no;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error in user.contriller : ", err);
        }
    });
}

module.exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(400).json(err);
        } else if (user) {
            return res.status(200).json({ "token": user.generatejwt() });
        } else {
            return res.status(404).json(info);
        }
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id }, (err, user) => {
        if (!user) {
            return res.status(404).json({ status: false, message: "record not found" });
        } else {
            return res.status(200).json({ status: true, user: _.pick(user, ['firstname', 'lastname', 'mobile_no', 'email']) });
        }
    });
}