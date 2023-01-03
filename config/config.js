require('dotenv').config() 

module.exports = {
    development: {
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
    test: {
        username: process.env.TEST_USER,
        password: process.env.TEST_PASS,
        database: process.env.DATABASE_TEST,
        host: process.env.HOST,
        // ssl: process.env.DEV_SSL,
        dialect: "postgres",
    },
    production: {
        // // use_env_variable: "postgres://hfhpknimstkqhp:d3268186b2eb2135caa49bf148f87e0adb8d559d51a6413cf5856d37e47db3cc@ec2-34-194-73-236.compute-1.amazonaws.com:5432/d46hpp63krvjbq",
        // use_env_variable: 'DATABASE_URL',
        // // username: process.env.DEV_USER,
        // // password: process.env.DEV_PASS,
        // // database: process.env.DEV_DATABASE,
        // // host: process.env.DEV_HOST,
        // dialect: 'postgres',
        // dialectOptions: {
        //     ssl: {
        //         require: true,
        //         rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        //     }
        // }
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // <<<<<<< YOU NEED THIS TO FIX UNHANDLED REJECTION 
            },
        },
    },
};