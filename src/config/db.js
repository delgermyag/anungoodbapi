module.exports = {
    HOST: '122.201.28.22',
    PORT: "1433",
    USER: 'delger',
    PASSWORD: 'Delgerdalai',
    DB: 'Anungoo_db',
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};