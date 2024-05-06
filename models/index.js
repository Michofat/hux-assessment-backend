import { dbConn } from "../config/db.config.js";
import { Sequelize, DataTypes } from "sequelize";
import { userModel } from "./user/user.js";
import { contactModel } from "./contact/contact.js";

export const sequelize = new Sequelize(
  dbConn.DB,
  dbConn.USER,
  dbConn.PASSWORD,
  {
    host: dbConn.HOST,
    dialect: dbConn.dialect,
    operatorsAlliases: false,
    pool: {
      max: dbConn.pool.max,
      min: dbConn.pool.min,
      acquire: dbConn.pool.acquire,
      idle: dbConn.pool.idle,
    },
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = userModel(sequelize, DataTypes);
db.contact = contactModel(sequelize, DataTypes);

// db.sequelize.sync({ force: false }).then(() => {
//   console.log("yes re-sync done!!");
// });

sequelize
  .authenticate()
  .then(() => {
    console.log("connected...");
  })
  .catch((error) => console.log(error));

export default db;
