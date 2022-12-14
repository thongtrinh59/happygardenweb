require('dotenv').config() 

module.exports = {
    development: {
        use_env_variable: process.env.DATABASE_URL,
        // connection: process.env.DATABASE_URL,
        username: process.env.DEV_USER,
        password: process.env.DEV_PASS,
        database: process.env.DEV_DATABASE,
        host: process.env.DEV_HOST,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            }
        }
    },
    test: {
        username: process.env.TEST_USER,
        password: process.env.TEST_PASS,
        database: process.env.DATABASE_TEST,
        host: process.env.HOST,
        // ssl: process.env.DEV_SSL,
        dialect: "postgres",
    },
    production: {
        username: process.env.PROD_USER,
        password: process.env.PROD_PASS,
        database: process.env.PROD_DATABASE,
        host: process.env.PROD_HOST,
        // ssl: process.env.DEV_SSL,
        dialect: "postgres",
    },
};