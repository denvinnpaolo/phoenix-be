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
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        name: req.body.name,
        job_title: req.body.job_title,
        phone: req.body.phone,
        email: req.body.email,
        password: password
    };

    console.log('handlers -> register -> req.body: ',user)
   

    Helper.addUser(user)
        .then(([newUser]) => {
            const token = generateToken(newUser)            
            res.status(201).json({
                token: token,
                userdata: newUser
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
    .catch(err => res.status(500).json({ message: err}))
};

const updateUser = (req, res) => {
    // console.log('handlers -> updateUser -> req.body: ',req.body)


    const {id} = req.body 

    Helper.updateUser(id, req.body)
        .then(([email]) => {
            Helper.fetchUser({email})
            .then(([userdata]) => {
                const token = generateToken(userdata)
                res.status(200).json({
                    token: token,
                    userdata
                })
            })
            .catch(err => res.status(404).json({message:err}))
            
        })
        .catch(err => res.status(500).json({ message: err}))

};

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
    updateUser,
    login,
    allUsers,
}