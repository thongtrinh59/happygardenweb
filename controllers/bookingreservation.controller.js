const db = require("../models");
var bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;
// const Customer = db.Customer;
// const { body } = require('express-validator/check')
const { body, validationResult } = require('express-validator');
const bookingreservation = require("../models/bookingreservation");
const { DATE } = require("sequelize");
const Bookingreservation = db.Bookingreservation;


exports.validate = (method) => {
    switch (method) {
        case 'createBookingreservation': {
            return [
                body('customerid').exists(),
                body('userid').exists(),
                body('lobbyid').exists(),
                body('statusid').optional(),
                body('eventid').exists(),
                body('numberoftables').exists(),
                body('numberofguests').exists(),
                body('description').exists(),
                body('fromdate').exists(),
                body('todate').exists(),
                body('menu').exists(),
                body('decoration').exists(),
                body('sound').exists(),
                body('light').exists(),
                body('mc').exists(),
                body('contentdisplay').exists(),
                body('singer').exists(),
                body('entertainment').exists(),
                // body('phone').optional().isInt(),
                // body('status').optional().isIn(['enabled', 'disabled'])
            ]
        }
    }
}


exports.createBookingreservation = (req, res) => { 
    
    const userid = req.body.userid;

    const customerid = req.body.customerid;
    const lobbyid = req.body.lobbyid;
    const statusid = req.body.statusid;
    const eventid = req.body.eventid;
    const numberoftables = req.body.numberoftables;
    const numberofguests = req.body.numberofguests;
    const description = req.body.description;
    // const datetime = req.body.datetime;
    const fromdate = req.body.fromdate;
    const todate = req.body.todate;
    const menu = req.body.menu;
    const decoration = req.body.decoration;
    const sound = req.body.sound;
    const light = req.body.light;
    const mc = req.body.mc;
    const contentdisplay = req.body.contentdisplay;
    const singer = req.body.singer;
    const entertainment = req.body.entertainment;



    Bookingreservation.create({
        userid: userid,
        customerid: customerid,
        lobbyid: lobbyid,
        statusid: statusid,
        eventid: eventid,
        numberoftables: numberoftalbes,
        numberofguests: numberofguests,
        description: description,
        fromdate: fromdate,
        todate: todate,
        menu: menu,
        decoration: decoration,
        sound: sound,
        light: light,
        mc: mc,
        contentdisplay: contentdisplay,
        singer: singer,
        entertainment: entertainment
    })

    .then(() => {
        res.send({ message: "Booking was created successfully!" });
    })
    .catch((err) => {
        res.status(500).send({ message: err.message });
    });
}

exports.updateBookingreservation = (req, res) => { 
    const id = parseInt(req.params.id, 10);
    console.log("this is customer param", id);
    Bookingreservation.update({
        userid: req.body.userid,
        customerid: req.body.customerid,
        lobbyid: req.body.lobbyid,
        statusid: req.body.statusid,
        eventid: req.body.eventid,
        numberoftalbes: req.body.numberoftalbes,
        numberofguests: req.body.numberofguests,
        description: req.body.description,
        fromdate: req.body.fromdate,
        todate: req.body.todate,
        menu: req.body.menu,
        decoration: req.body.decoration,
        sound: req.body.sound,
        light: req.body.light,
        mc: req.body.mc,
        contentdisplay: req.body.contentdisplay,
        singer: req.body.singer,
        entertainment: req.body.entertainment
    }, {
        where: { bookingid: id },
    })
    .then((num) => {
        if (num == 1) {
            res.send({
                message: {
                    heading: "Success !!!",
                    message: "Update booking reservation successfully",
                },
            });
        } else {
            res.status(400).send({
                message: {
                    heading: "Oh snap! You got an error!",
                    message: `Cannot update booking reservation with id=${id}. Maybe customer was not found or req.body is empty!`,
                },
            });
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error updating booking with id=" + id,
        });
        console.log(err);
    });
}

exports.getBookingByID = (req, res) => { 
    const id = req.params.id;
    console.log("this is id");
    console.log(id);
    Bookingreservation.findByPk(id, {
        include: [

        ],
    })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Booking reservation with id=" + id,
        });
        console.log(err);
    });
}

exports.getAllBooking = (req, res) => { 
    const dtnew = new Date();
    console.log(dtnew);
    Bookingreservation.findAll({
        order: [
            ["updatedAt", "DESC"]
        ],
        include: [

        ],
    })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving demand_status.",
        });
        console.log(err);
    });
}

exports.getBookingByDate = (req, res) => { 
    const year = req.query.year;
    const month = req.query.month;
    const order = req.query.order;

    const from_date = new Date(year, month - 1, 1);
    const to_date = new Date(year, month , 0);
    console.log(from_date);
    console.log(to_date);
    Bookingreservation.findAll({
        order: [
            ["bookingid", order]
        ],
        where: [{
            datetime: {
                // '$month': month,
                // '$year': year1
                [Op.between]: [from_date, to_date],
                // year: db.where(db.fn('YEAR', db.col('datetime')), year1),
                // datetime: db.where(db.fn('MONTH', db.col('datetime')), month),
            },
        }]
    })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving demand_status.",
        });
        console.log(err);
    });
}