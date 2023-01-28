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
        .collection(collection.ADMIN_COLLECTION)
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
  getAllClientDetails: () =>
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.CLIENT_COLLECTION)
          .find({ delete: false })
          .toArray();
        resolve(details);
      } catch (error) {
        reject(error);
      }
    }),
  deleteClient: (id) =>
    new Promise((resolve, reject) => {
      console.log(id);
      db.get()
        .collection(collection.CLIENT_COLLECTION)
        .updateOne({ _id: ObjectId(id) }, { $set: { delete: true } })
        .then((e) => {
          console.log(e);resolve()})
        .catch((err) => {
          console.log(err);
          reject();
        });
    }),

    editClientDetails: (id, data) =>
    new Promise((resolve, reject) => {
      db.get()
        .collection(collection.CLIENT_COLLECTION)
        .updateOne(
          { _id: ObjectId(id )},
          { $set: { phone: data.phone, email: data.email, name: data.name } }
        )
        .then((e) =>{console.log(e); resolve()})
        .catch(() => reject());
    }),
};
