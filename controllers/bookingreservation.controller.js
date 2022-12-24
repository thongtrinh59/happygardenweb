const db = require("../models");
const Op = db.Sequelize.Op;
const { body, validationResult } = require('express-validator');
const bookingreservation = require("../models/bookingreservation");
const { DATE } = require("sequelize");
const Bookingreservation = db.Bookingreservation;
var pt = require('../tools/parsetime');


exports.validate = (method) => {
    switch (method) {
        case 'createBookingreservation': {
            return [
                //change later when meeting
                body('customerid').exists(),
                body('userid').exists(),
                body('lobbyid').exists(),
                body('statusid').optional(),
                body('eventid').exists(),
                body('set').exists(),
                body('numberoftables').exists(),
                body('numberofguests').exists(),
                body('description').optional(),
                body('fromdate').exists(),
                body('todate').exists(),
                body('menuid').exists(),
                body('decoration').optional(),
                body('sound').exists(),
                body('light').exists(),
                body('mc').exists(),
                body('contentdisplay').optional(),
                body('singer').exists(),
                body('entertainment').optional(),
                // body('phone').optional().isInt(),
                // body('status').optional().isIn(['enabled', 'disabled'])
            ]
        }
        case 'updateBookingreservation': {
            return [
                //change later when meeting
                body('customerid').exists(),
                body('userid').exists(),
                body('lobbyid').exists(),
                body('statusid').optional(),
                body('eventid').exists(),
                body('set').exists(),
                body('numberoftables').exists(),
                body('numberofguests').exists(),
                body('description').optional(),
                body('fromdate').exists(),
                body('todate').exists(),
                body('menuid').exists(),
                body('decoration').optional(),
                body('sound').exists(),
                body('light').exists(),
                body('mc').exists(),
                body('contentdisplay').optional(),
                body('singer').exists(),
                body('entertainment').optional(),
                // body('phone').optional().isInt(),
                // body('status').optional().isIn(['enabled', 'disabled'])
            ]
        }
    }
}


exports.createBookingreservation = (req, res) => { 
    console.log("1234");
    console.log("ok");
    
    const userid = req.body.userid;

    const customerid = req.body.customerid;
    const lobbyid = req.body.lobbyid;
    const statusid = req.body.statusid;
    const eventid = req.body.eventid;
    const numberoftables = req.body.numberoftables;
    const numberofguests = req.body.numberofguests;
    const set = req.body.set;
    const description = req.body.description;
    const fromdate = req.body.fromdate;
    const todate = req.body.todate;
    const menuid = req.body.menuid;
    const decoration = req.body.decoration;
    const sound = req.body.sound;
    const light = req.body.light;
    const mc = req.body.mc;
    const contentdisplay = req.body.contentdisplay;
    const singer = req.body.singer;
    const entertainment = req.body.entertainment;

    const new_fromdate = pt.parseTime(fromdate);
    const new_todate = pt.parseTime(todate);

    Bookingreservation.create({
        userid: userid,
        customerid: customerid,
        lobbyid: lobbyid,
        statusid: statusid,
        eventid: eventid,
        numberoftables: numberoftables,
        numberofguests: numberofguests,
        set: set,
        description: description,
        fromdate: new_fromdate,
        todate: new_todate,
        menuid: menuid,
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
        set: req.body.set,
        description: req.body.description,
        fromdate: pt.parseTime(req.body.fromdate),
        todate: pt.parseTime(req.body.todate),
        menuid: req.body.menuid,
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
            {
                model: db.Event,
            },
            {
                model: db.Status,
            },
            {
                model: db.Lobby,
            },
            {
                model: db.Menu,
            },
            {
                model: db.User,
            },
            {
                model: db.Customer,
            },
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
                [Op.between]: [from_date, to_date],
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

exports.cancelBooking = (req, res) => {
    const id = parseInt(req.params.id, 10);
    console.log("this is cancel param", id);
    Bookingreservation.update({
        statusid: 3,
    }, {
        where: { bookingid: id },
    })
    .then((num) => {
        if (num == 1) {
            res.send({
                message: {
                    heading: "Success !!!",
                    message: "Cancel booking reservation successfully",
                },
            });
        } else {
            res.status(400).send({
                message: {
                    heading: "Oh snap! You got an error!",
                    message: `Cannot cancel booking reservation with id=${id}. Maybe booking was not found or req.body is empty!`,
                },
            });
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Booking reservation with id=" + id,
        });
        console.log(err);
    });
}