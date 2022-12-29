require('dotenv').config() 

module.exports = {
    development: {
        use_env_variable: process.env.DATABASE_URL,
        username: process.env.DEV_USER,
        password: process.env.DEV_PASS,
        database: process.env.DEV_DATABASE,
        host: process.env.DEV_HOST,
        dialect: "postgres",
        // dialectOptions: {
        //     ssl: {
        //         require: true,
        //         rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        //     }
        // }
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
        use_env_variable: process.env.DATABASE_URL,
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
};