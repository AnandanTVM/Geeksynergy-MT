const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");
const db = require("../config/connection");
const collection = require("../config/collection");

module.exports = {
  douserLogin: (userData) =>
    new Promise(async (resolve) => {
      const response = {};
      const user = await db
        .get()
        .collection(collection.CLIENT_COLLECTION)
        .findOne({ email: userData.email });

      if (user) {
        bcrypt.compare(userData.password, user.password).then((status) => {
          if (status) {
            response.user = user;
            response.status = true;
            resolve(response);
          } else {
            resolve({ status: false });
          }
        });
      } else {
        resolve({ status: false });
      }
    }),
  updateUserDetails: (id, data) =>
    new Promise((resolve, reject) => {
      db.get()
        .collection(collection.CLIENT_COLLECTION)
        .updateOne(
          { _id: id },
          { $set: { phone: data.phone, email: data.email, name: data.name } }
        )
        .then(() => resolve())
        .catch(() => reject());
    }),
};
