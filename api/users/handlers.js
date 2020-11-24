const Helper = require('./Helpers.js');
const hash = require('../../utils/hasher.js');
const compare = require('../../utils/compareHash.js');
const generateToken = require('../../utils/token.js');

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

const login = (req, res) => {
    const { email, password } = req.body;
    Helper.GetByEmail({email})
    .then(([user]) => {
        const bool = compare(password, user.password);

        if(user && bool){
            Helper.fetchUser({email})
                .then(([user]) => {
                    const token = generateToken(user)

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

const allOrgs = (req, res) => {
    Helper.GetAllOrgs()
        .then((orgs) => {
            res.status(200).json({
                orgs: orgs
            })
        })
        .catch(err => {
            res.status(500).json({
                err: err
            })
        })
}

module.exports = {
    register,
    login,
    allUsers,
    allOrgs
}