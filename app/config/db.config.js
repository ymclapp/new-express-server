module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Yglabn0115!mysql",
    DB: "new-strapi-db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
