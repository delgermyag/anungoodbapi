const dbconfig = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    port: dbconfig.PORT,
    dialect: dbconfig.dialect,
    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle
    },
    dialectOptions: {
        multipleStatements: true,
        options: {
            encrypt: false
        }
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;