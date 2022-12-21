const db = require("../models");
var bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;
const Status = db.Status;
// const { body } = require('express-validator/check')
const { body, validationResult } = require('express-validator');


// exports.validate = (method) => {
//     switch (method) {
//         case 'createCustomer': {
//             return [
//                 body('customername', `customername doesn't exists`).exists(),
//                 body('email', 'Invalid email').optional().isEmail(),
//                 body('phonenumber').exists(),
//                 body('address').optional(),
//                 body('companyname').optional(),
//                 body('nationalid').exists(),
//                 body('taxnumber').optional()
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
//                 body('nationalid').optional(),
//                 body('taxnumber').optional()
//                 // body('phone').optional().isInt(),
//                 // body('status').optional().isIn(['enabled', 'disabled'])
//             ]
//         }
//     }
// }


exports.getAllStatus = (req, res) => {
    Status.findAll({
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
};

