const db = require("../models");
var bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;
const Customer = db.Customer;
// const { body } = require('express-validator/check')
const { body, validationResult } = require('express-validator');

exports.createBookingreservation = (req, res) => { 
    
    const username = req.query.username;
    console.log("#################################");
    console.log(username);
    // const name = req.query.name;
    const email = req.query.email;
    const order = req.query.order;
    const datetype = req.query.datetype;
    const from_date = req.query.from_date;
    const to_date = req.query.to_date;
    const limit = parseInt(req.query.limit) || null;

}
