const users = require('../model/user');
class AuthController {
    getLogin (req, res, next) {
        res.render('layouts/auth/login');
    }
    postLogin (req, res, next) {
        users.findOne({ email: req.body.email, password: req.body.password }).then((user) => {
            res.redirect('/');
        }).catch(next); 
        //res.json(req.body);
    }
}

module.exports =  new AuthController;