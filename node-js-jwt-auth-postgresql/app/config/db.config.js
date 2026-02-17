// app/config/db.config.js
export default {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "vickycrb@1",
    DB: "testdb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};