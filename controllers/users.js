
const userService = require('../services/user-service');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//User Login
exports.userLogin = async function(req, res, next) {
    try {
        let user = await userService.getUser(req.body.email);
        if(user.length == 0) {
            throw Error('User not found')
        } 
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if(!result) {
                return res.status(400).json({ success: false, error: "Email or password is invalid"});
            } else {
                let payload = {
                    id: user[0].id,
                    email: user[0].email
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY,{ expiresIn: '7d' })
                return res.status(200).json({ success: true, data: token});
            }
        })
    } catch(e) {
        return res.status(400).json({ success: false, error: e.message});
    }
}

//User register
exports.userRegister = async function(req, res, next) {
    try {
        bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
            let newUser = await userService.createUser(req.body.email, hashedPassword);
            let user = await userService.getUser(req.body.email);
            if(user.length == 0) {
                throw Error('User not found')
            }
            let payload = {
                        id: user[0].id,
                        email: user[0].email
                }
            let token = jwt.sign(payload, process.env.SECRET_KEY)
            return res.status(200).json({ success: true, data: token});
        });
    } catch(e) {
        return res.status(400).json({ success: false, error: e.message});
    }
}