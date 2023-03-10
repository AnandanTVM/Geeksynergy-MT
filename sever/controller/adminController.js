const jwt = require("jsonwebtoken");
const adminUtil = require("../util/adminUtil");
const commonutil = require("../util/commonutil");

const adminLogin = (req, res) =>
  adminUtil.douserLogin(req.body).then((response) => {
    if (response.status) {
      const token = jwt.sign(
        {
          userId: response.user._id,
          name: response.user.name,
          email: response.user.email,
        },
        process.env.JWT_SECRET
      );
      return res.json({ status: "ok", user: token });
    }
    res.json({ status: "error", user: false });
  });

const getAllClientDetails = (req, res) =>
  adminUtil
    .getAllClientDetails()
    .then((details) => res.json({ status: true, details: details }))
    .catch((error) => res.json({ status: false, error: error }));

const deleteclient = (req, res) =>
  adminUtil
    .deleteClient(req.params.id)
    .then(() => res.json({ status: true }))
    .catch((err) => res.json({ status: true, error: err }));
const getClientDetailsById = (req, res) =>
  commonutil
    .findClientById(req.params.id)
    .then((data) => res.json({ status: true, ClientDetails: data }))
    .catch((err) => res.json({ status: true, error: err }));

const editClientDetails = (req, res) =>{
  console.log(req.body);
  adminUtil
    .editClientDetails(req.params.id, req.body)
    .then((details) => res.json({ status: true }))
    .catch((err) => res.json({ status: false }));}
module.exports = {
  adminLogin,
  getAllClientDetails,
  deleteclient,
  getClientDetailsById,
  editClientDetails,
};
