const db = require("../models");
var bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;
const Contract = db.Contract;

// const { body } = require('express-validator/check')
const { body, validationResult } = require('express-validator');
const bookingreservation = require("../models/bookingreservation");
const Bookingreservation = db.Bookingreservation;


// exports.validate = (method) => {
//     switch (method) {
//         case 'createCustomer': {
//             return [
//                 body('customername', `customername doesn't exists`).exists(),
//                 body('email', 'Invalid email').optional().isEmail(),
//                 body('phonenumber').exists(),
//                 body('address').optional(),
//                 body('companyname').optional(),
//                 body('nationalid').exists()
//                 // body('phone').optional().isInt(),
//                 // body('status').optional().isIn(['enabled', 'disabled'])
//             ]
//         }
//         case 'updateCustomer': {
//             return [
//                 body('customername', `customername doesn't exists`).optional(),
//                 body('email', 'Invalid email').optional().isEmail(),
//                 body('phonenumber').optional(),
//                 body('address').optional(),
//                 body('companyname').optional(),
//                 body('nationalid').optional()
//                 // body('phone').optional().isInt(),
//                 // body('status').optional().isIn(['enabled', 'disabled'])
//             ]
//         }
//     }
// }

exports.createContract = (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }

    // const userid = req.query.userid;
    // const customerid = req.query.customerid
    // const email = req.query.email;
    // const order = req.query.order;
    // const datetype = req.query.datetype;
    // const from_date = req.query.from_date;
    // const to_date = req.query.to_date;
    // const limit = parseInt(req.query.limit) || null;


    const bookingid = req.body.bookingid;
    console.log(bookingid);
    const number = req.body.number;
    const contractvalue = req.body.contractvalue;
    const deposit = req.body.deposit;
    const percentage = req.body.percentage;


    Bookingreservation.findByPk(bookingid, {
        include: [

        ],
    })
    .then((data) => {
        // console.log(data.userid);
        // res.send(data);
        const userid = data.userid;
        const customerid = data.customerid;
        const lobbyid = data.lobbyid;
        const statusid = data.statusid;
        const eventid = data.eventid;
        const numberoftalbes = data.numberoftalbes;
        const numberofguests = data.numberofguests;
        const description = data.description;
        const fromdate = data.fromdate;
        const todate = data.todate;
        const menu = data.menu;
        const sound = data.sound;
        const decoration = data.decoration;
        const light = data.light;
        const mc = data.mc;
        const contentdisplay = data.contentdisplay;
        const singer = data.singer;
        const entertainment = data.entertainment;

        // Contract.create({

        // })
    })
    
}

exports.updateContract = (req, res) => {

}

exports.getAllContract = (req, res) => {

}

exports.getContractByID = (req, res) => {

}

exports.deleteContract = (req, res) => {

}



// exports.getCustomerByID = (req, res) => {
//     const id = req.params.id;
//     console.log("this is id");
//     console.log(id);
//     User.findByPk(id, {
//         include: [

//         ],
//     })
//         .then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: "Error retrieving User with id=" + id,
//             });
//             console.log(err);
//         });
// }

// exports.getAllCustomers = (req, res) => {
//     Customer.findAll({
//         order: [
//             ["updatedAt", "DESC"]
//         ],
//         include: [

//         ],
//     })
//         .then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving demand_status.",
//             });
//             console.log(err);
//         });
// };

// exports.updateCustomer = (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const id = parseInt(req.params.id, 10);
//     console.log("this is customer param", id);
//     Customer.update({
//         customername: req.body.customername,
//         phonenumber: req.body.phonenumber,
//         address: req.body.address,
//         email: req.body.email,
//         nationalid: req.body.nationalid,
//         companyname: req.body.companyname,
//     }, {
//         where: { customerid: id },
//     })
//     .then((num) => {
//         if (num == 1) {
//             res.send({
//                 message: {
//                     heading: "Success !!!",
//                     message: "Update customer successfully",
//                 },
//             });
//         } else {
//             res.status(400).send({
//                 message: {
//                     heading: "Oh snap! You got an error!",
//                     message: `Cannot update customer with id=${id}. Maybe customer was not found or req.body is empty!`,
//                 },
//             });
//         }
//     })
//     .catch((err) => {
//         res.status(500).send({
//             message: "Error updating customer with id=" + id,
//         });
//         console.log(err);
//     });
// };

// exports.deleteCustomer = (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     Customer.destroy({
//         where: {
//             customerid: id
//         }
//     })
//     .then((num) => {
//         if (num == 1) {
//             res.send({
//                 message: {
//                     heading: "Success !!!",
//                     message: "Delete customer successfully",
//                 },
//             });
//         } else {
//             res.status(400).send({
//                 message: {
//                     heading: "Oh snap! You got an error!",
//                     message: `Cannot delete customer with id=${id}. Maybe customer was not found or req.body is empty!`,
//                 },
//             });
//         }
//     })
//     .catch((err) => {
//         res.status(500).send({
//             message: "Error deleting customer with id=" + id,
//         });
//         console.log(err);
//     });
// }