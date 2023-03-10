const { ObjectId } = require('mongodb');
// const nodemailer = require('nodemailer');
const db = require('../config/connection');
const collection = require('../config/collection');

module.exports = {
  findAdminById: (userId) =>
    new Promise(async (resolve, reject) => {
      try {
        const user = await db
          .get()
          .collection(collection.ADMIN_COLLECTION)
          .findOne({ _id: ObjectId(userId) });

        resolve(user);
      } catch (err) {
        reject();
      }
    }),
  findClientById: (userId) =>
    new Promise(async (resolve, reject) => {
      try {
        console.log('api');
        const user = await db
          .get()
          .collection(collection.CLIENT_COLLECTION)
          .findOne({ _id: ObjectId(userId) });
          console.log(user);

        resolve(user);
      } catch (err) {
        reject();
      }
    }),
};
