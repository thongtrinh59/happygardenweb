const db = require("../models");
const Op = db.Sequelize.Op;
const Contract = db.Contract;
const { body, validationResult } = require('express-validator');
const bookingreservation = require("../models/bookingreservation");
const Bookingreservation = db.Bookingreservation;


exports.validate = (method) => {
    switch (method) {
        case 'createContract': {
            return [
                body('bookingid').exists().isInt(),
                body('number').exists(),
                body('contractvalue').exists().isInt(),
                body('deposit').exists().isInt(),
                body('percentage').exists().isInt(),
                // body('phone').optional().isInt(),
                // body('status').optional().isIn(['enabled', 'disabled'])
            ]
        }
    }
}

exports.createContract = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const bookingid = req.body.bookingid;
    console.log(bookingid);
    const number = req.body.number;
    const contractvalue = req.body.contractvalue;
    const deposit = req.body.deposit;
    const percentage = req.body.percentage;

    Contract.create({
        bookingid: bookingid,
        number: number,
        contractvalue: contractvalue,
        deposit: deposit,
        percentage: percentage
    });

    Bookingreservation.findByPk(bookingid, {
        include: [

        ],
    })
    .then((data) => {
        const sendback = {
            userid : data.userid,
            customerid : data.customerid,
            lobbyid : data.lobbyid,
            statusid : data.statusid,
            eventid : data.eventid,
            numberoftables : data.numberoftables,
            numberofguests : data.numberofguests,
            description : data.description,
            fromdate : data.fromdate,
            todate : data.todate,
            menu : data.menu,
            sound : data.sound,
            decoration : data.decoration,
            light : data.light,
            mc : data.mc,
            contentdisplay : data.contentdisplay,
            singer : data.singer,
            entertainment : data.entertainment,
        }

        res.send(sendback);

        Bookingreservation.update({
            statusid: 1
        })
    })
}

// exports.updateContract = (req, res) => {

// }

exports.getAllContract = (req, res) => {
    Contract.findAll({
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

exports.getContractByID = (req, res) => {
    const id = req.params.id;
    console.log("this is id");
    console.log(id);
    Contract.findByPk(id, {
        include: [

        ],
    })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Customer with id=" + id,
        });
        console.log(err);
    });
}

// exports.deleteContract = (req, res) => {

// }

