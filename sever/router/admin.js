const express = require("express");
const adminController = require("../controller/adminController");
const auth = require("../middleware/authuser");

const router = express.Router();
router.post("/adminLogin", adminController.adminLogin);
router.get(
  "/getallclientdetails",
  auth.adminprotect,
  adminController.getAllClientDetails
);
router.get(
  "/deleteClient/:id",
  auth.adminprotect,
  adminController.deleteclient
);
router.get(
  "/getClientDetailsById/:id",
  auth.adminprotect,
  adminController.getClientDetailsById
);
router.post('/editUserDetails/:id', auth.adminprotect,  adminController.editClientDetails);

module.exports = router;
