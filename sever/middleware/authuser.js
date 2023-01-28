const jwt = require('jsonwebtoken');
const Commenutil = require('../util/commonutil');

const Clientprotect = async (req, res, next) => {
  console.log('here');
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await Commenutil.findClientById(decoded.userId);

      next();
    } catch (error) {
      console.log(error);
      console.log('failed token');
      res.status(401);
      throw new Error('Not authorized, token fail');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Autherized');
  }
};
const adminprotect = async (req, res, next) => {
  console.log('here');
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await Commenutil.findAdminById(decoded.userId);

      next();
    } catch (error) {
      console.log(error);
      console.log('failed token');
      res.status(401);
      throw new Error('Not authorized, token fail');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Autherized');
  }
};
module.exports = {
  adminprotect,
  Clientprotect,
};
