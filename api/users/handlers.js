const Helper = require('./helpers.js');
const hash = require('../../utils/hasher.js');
const compare = require('../../utils/compareHash.js');
const generateToken = require('../../utils/token.js');
const { token } = require('morgan');

const bcrypt = require('bcryptjs');


const register = (req, res) => {
    let password = hash(req.body.password)

    if(req.body.type !== 'users'){
        const org = {
            type: req.body.type,
            name: req.body.name,
            email: req.body.email,
            password: password,
            phone: req.body.phone,
            url: req.body.url,
            address: req.body.address,
            city: req.body.city,
            zipcode: req.body.zipcode,
            about: req.body.about
        }

        Helper.addOrg(org)
            .then(([org])=> {
                const token = generateToken(org);

                res.status(201).json({
                    token: token
                })
            })
            .catch(err => {
                res.status(500).json(err);
            })

    } else if(req.body.type === 'users'){

        const user = {
            type: req.body.type,
            email: req.body.email,
            name: req.body.name,
            password: password,
            job: req.body.job,
            phone: req.body.phone,
            company_id: req.body.company_id
        }

        Helper.addUser(user)
            .then(([user]) => {
                const token = generateToken(user);
                
                res.status(201).json({
                    token: token
                })

            })
            .catch(err => {
                res.status(500).json({message: err})
            })
    }
}

const allUsers = (req, res) => {
    Helper.GetAllUsers()
        .then(users => {
            res.status(200).json({
                users: users
            })
        })
        .catch(err => {
            res.status(500).json({
                err: err
            })
        })
}

const login = (req, res) => {
    const { email, password } = req.body;
    Helper.GetByEmail({email})
    .then(([user]) => {
        const bool = bcrypt.compareSync(password, user.password)
        if(user && bool){
            const token = generateToken(user)

            Helper.fetchUser({email})
                .then(([user]) => {
                    res.status(200).json({
                        token:token
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        message: err
                    })
                })


        }
    })
    .catch(err => {
        res.status(500).json({
            err: err
        })
    })

}

// const login = (req, res) => {
//     const { email, password } = req.body;

//     Helper.GetByEmail({ email })
//         .then(x => {
//             const bool = compare(password, user.password);
//             if(x && bool){
//                 token = generateToken(x)

//                 Helper.fetchOrg({email})
//                     .then(user => {
//                         res.status(200).json({token: token })
//                     })
//                     .catch(err => {
//                         res.status(500).json({ messages: err })
//                     })
//             } else {
//                 res.status(400).json({ message: 'invalid credentials'})
//             }
//         })
//         .catch(err => res.status(500).json({ err: err, iam: "here" }))
// }
module.exports = {
    register,
    login,
    allUsers
}