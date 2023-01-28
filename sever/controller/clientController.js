const jwt = require('jsonwebtoken');
const clientUtil = require('../util/clientUtil');

const clientLogin = async (req, res) =>
  clientUtil.douserLogin(req.body).then((response) => {
    if (response.status) {
      const token = jwt.sign(
        {
          userId: response.user._id,
          name: response.user.name,
          email: response.user.email,
        },
        'fityou5055'
      );
      return res.json({ status: 'ok', user: token });
    }
    res.json({ status: 'error', user: false });
  });

module.exports = {
  clientLogin,
};
