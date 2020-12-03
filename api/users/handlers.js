const Helper = require('./Helpers.js');
const hash = require('../../utils/hasher.js');
const compare = require('../../utils/compareHash.js');
const generateToken = require('../../utils/token.js');

const register = (req, res) => {
    let password = hash(req.body.password)
    console.log(req.body)

    const user = {
        type: req.body.type,
        company_name: req.body.company_name,
        company_size: req.body.company_size,
        website: req.body.website,
        company_address: req.body.company_address,
        company_phone: req.body.phone,
        name: req.body.name,
        job_title: req.body.job_title,
        phone: req.body.phone,
        email: req.body.email,
        password: password
    };

    console.log(user)
    Helper.addUser(user)
        .then(([user]) => {
            const token = generateToken(user);
            console.log(user)
            
            res.status(201).json({
                token: token
            })

        })
        .catch(err => {
            res.status(500).json({message: err})
        })
}


const login = (req, res) => {
    const { email, password } = req.body;

    Helper.GetByUserEmail({email})
    .then(([user]) => {

        // check to see if password matches w/ the one in the database
        const bool = compare(password, user.password);

        if(user && bool){
            Helper.fetchUser({email})
                .then(([user]) => {
                    const token = generateToken(user)

                    res.status(200).json({
                        token:token,
                        userdata: user
                    })
                })
                .catch(err => {
                    res.status(400).json({
                        message: err
                    })
                })
        }
    })  
    .catch(err => {
        res.status(500).json({
            message: err
        })
    })
};

const allUsers = (req, res) => {
    Helper.GetAllUsers()
        .then((users) => {
            res.status(200).json({
                users: users
            })
        })
        .catch(err => {
            res.status(500).json({
                err: err
            })
        })
};


module.exports = {
    register,
    login,
    allUsers,
}