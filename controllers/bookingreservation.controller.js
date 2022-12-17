const db = require("../models");
var bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;
const Customer = db.Customer;
// const { body } = require('express-validator/check')
const { body, validationResult } = require('express-validator');
const bookingreservation = require("../models/bookingreservation");

exports.createBookingreservation = (req, res) => { 
    
    const userid = req.body.userid;

    const customerid = req.body.customerid;
    const lobbyid = req.body.lobbyid;
    const statusid = req.body.statusid;
    const eventid = req.body.eventid;
    const numberoftalbes = req.body.numberoftalbes;
    const numberofguests = req.body.numberofguests;
    const description = req.body.description;
    const datetime = req.body.datetime;

    Bookingreservation.create({
        userid: userid,
        customerid: customerid,
        lobbyid: lobbyid,
        statusid: statusid,
        eventid: eventid,
        numberoftalbes: numberoftalbes,
        numberofguests: numberofguests,
        description: description,
        datetime: datetime
    })

    .then(() => {
        res.send({ message: "Booking was created successfully!" });
    })
    .catch((err) => {
        res.status(500).send({ message: err.message });
    });
}

exports.updateBookingreservation = (req, res) => { 
    
}

exports.getBookingByID = (req, res) => { 
    
}

exports.getAllContract = (req, res) => { 
    
}

exports.getBookingByDate = (req, res) => { 
    
}