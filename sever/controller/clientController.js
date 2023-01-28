const jwt = require('jsonwebtoken');
const clientUtil = require('../util/clientUtil');
const commonutil = require('../util/commonutil');

const clientLogin = async (req, res) =>
  clientUtil.douserLogin(req.body).then((response) => {
    if (response.status) {
      const token = jwt.sign(
        {
          userId: response.user._id,
          name: response.user.name,
          email: response.user.email,
        },
        process.env.JWT_SECRET
      );
      return res.json({ status: 'ok', user: token });
    }
    res.json({ status: 'error', user: false });
  });

const getProfile = (req, res) =>
  commonutil
    .findClientById(req.user._id)
    .then((details) => res.json({ status: true, profile: details }))
    .catch((err) => res.json({ status: false, error: err }));

module.exports = {
  clientLogin,
  getProfile,
};
