const homeUtil = require('../util/homeUtil');

const clientSignup = async (req, res) => {
  const data = req.body;
  // remove unwated feild from object
  delete data.cpassword;
  data.delete=false
  homeUtil
    .doClientSignup(data)
    .then((response) => {
      if (response.phoneFound) {
        res.json({ status: false, error: 'Duplicate Phone number' });
      } else {
        res.json({ status: true });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// exports
module.exports = {
  clientSignup,
};
