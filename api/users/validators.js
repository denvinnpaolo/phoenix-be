const Helper = require('./Helpers.js');


const validateIsEmailTaken = (req, res, next) => {
    const {email} = req.body
    Helper.getByUserEmail({email})
    .then(x => {
      if(!x){
        res.status(400).json({message: "Email is already in use"})
      }
      else next()
    })
    .catch(err => res.status(500).json({message: err}))
  
}

module.exports = {
    validateIsEmailTaken
};