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

const validateID = (req, res, next) => {
  const { id } = req.params;
  helper.getUserByfilter({ id }).then(([user]) => {
    if (!user) {
      res.status(400).json({ message: "user with this ID does not exist" });
    } else next();
  });
};

const validateLogin = (req, res, next) => {
  const { password, email} = req.body;
  if (!password) {
    res.status(400).json({
      message: "most include Password"
    });
  } else if (!email) {
    res.status(400).json({
      message: "most include Email"
    });
  } else {
    next();
  }
};

module.exports = {
  validateIsEmailTaken,
  validateID,
  validateLogin
};