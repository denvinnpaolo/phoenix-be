const Helper = require('./Helpers.js');
const hash = require('../../utils/hasher.js');
const compare = require('../../utils/compareHash.js');
const generateToken = require('../../utils/token.js');

const register = (req, res) => {
    let password = hash(req.body.password)

    let user = {
        type: req.body.type,
        company_name: req.body.company_name,
        company_size: req.body.company_size,
        website: req.body.website,
        address: req.body.company_address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        name: req.body.name,
        job_title: req.body.job_title,
        phone: req.body.phone,
        email: req.body.email,
        password: password
    };


   

    Helper.addUser(user)
        .then(([newUser]) => {
            const token = generateToken(newUser)            
            res.status(201).json({
                token: token,
                newUser
            })

        })
        .catch(err => res.status(500).json({message: err}))
}


const login = (req, res) => {
    const { email, password } = req.body;

    Helper.getByUserEmail({email})
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
    .catch(err => res.status(500).json({ error: err}))
};

// const updateUser = (req, res) => {

//     const {email, filter} = req.body;

//     Helper.getByUserEmail({email})
//         .then(([user]) => {
//             updatedUser = {
//                 ...user,
//                 filter
//             }
//             Helper.updateUser(email, updatedUser)
//                 .then(updated => {
//                     res.status(200).json({
//                         token: generateToken(updated)
//                         data: updatedUser
//                     })
//                 })
//                 .catch(err => {
//                     res.status(400).json({
//                         message: "Email used not valid",
//                         error: err
//                     })
//                 })
//         })
//         .catch(err => res.status(500).json({ error: err }))
// }

const deleteUser = (req, res) => {
    const { email } = req.body;

    Helper.deleteUser({ email })
        .then (() => res.status(201).end())
        .catch(err => res.status(500).json({ error: err}));
}


const allUsers = (req, res) => {
    Helper.getAllUsers()
        .then((users) => {
            res.status(200).json({
                users: users
            })
        })
        .catch(err => res.status(500).json({error: err}))
};


module.exports = {
    register,
    login,
    allUsers,
}