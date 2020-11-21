const Helper = require('./helpers.js');
const hash = require('../../utils/hasher.js');
const compare = require('../../utils/compareHash.js');
const generateToken = require('../../utils/token.js');

const register = (req, res) => {
    let password = hash(req.body.password)

    if(req.body.type !== 'user'){


        const org = {
            type: req.body.type
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

    } else if(req.body.type === 'user'){

    } else {

    }
}