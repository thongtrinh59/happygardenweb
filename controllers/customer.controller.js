const db = require("../models");
const Op = db.Sequelize.Op;
const Customer = db.Customer;
const { body, validationResult } = require('express-validator');


exports.validate = (method) => {
    switch (method) {
        case 'createCustomer': {
            return [
                body('customername', `customername doesn't exists`).exists(),
                body('email', 'Invalid email').optional().isEmail(),
                body('phonenumber').exists(),
                body('address').optional(),
                body('companyname').optional(),
                body('nationalid').exists(),
                body('taxnumber').optional(),
                // body('phone').optional().isInt(),
                // body('status').optional().isIn(['enabled', 'disabled'])
            ]
        }
        case 'updateCustomer': {
            return [
                body('customername', `customername doesn't exists`).optional(),
                body('email', 'Invalid email').optional().isEmail(),
                body('phonenumber').optional(),
                body('address').optional(),
                body('companyname').optional(),
                body('nationalid').optional(),
                body('taxnumber').optional(),
                // body('phone').optional().isInt(),
                // body('status').optional().isIn(['enabled', 'disabled'])
            ]
        }
    }
}

exports.createCustomer = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    Customer.create({
        customername: req.body.customername,
        phonenumber: req.body.phonenumber,
        nationalid: req.body.nationalid,
        email: req.body.email,
        companyname: req.body.companyname,
        address: req.body.address,
        taxnumber: req.body.taxnumber
    })
    .then(() => {
        res.send({ message: "Customer was created successfully!" });
    })
    .catch((err) => {
        res.status(500).send({ message: err.message });
    });
}

exports.getCustomerByID = (req, res) => {
    const id = req.params.id;
    console.log("this is id");
    console.log(id);
    Customer.findByPk(id, {
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

exports.getAllCustomers = (req, res) => {
    Customer.findAll({
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

exports.updateCustomer = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = parseInt(req.params.id, 10);
    console.log("this is customer param", id);
    Customer.update({
        customername: req.body.customername,
        phonenumber: req.body.phonenumber,
        address: req.body.address,
        email: req.body.email,
        nationalid: req.body.nationalid,
        companyname: req.body.companyname,
        taxnumber: req.body.taxnumber
    }, {
        where: { customerid: id },
    })
    .then((num) => {
        if (num == 1) {
            res.send({
                message: {
                    heading: "Success !!!",
                    message: "Update customer successfully",
                },
            });
        } else {
            res.status(400).send({
                message: {
                    heading: "Oh snap! You got an error!",
                    message: `Cannot update customer with id=${id}. Maybe customer was not found or req.body is empty!`,
                },
            });
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error updating customer with id=" + id,
        });
        console.log(err);
    });
};

exports.deleteCustomer = (req, res) => {
    const id = parseInt(req.params.id, 10);
    Customer.destroy({
        where: {
            customerid: id
        }
    })
    .then((num) => {
        if (num == 1) {
            res.send({
                message: {
                    heading: "Success !!!",
                    message: "Delete customer successfully",
                },
            });
        } else {
            res.status(400).send({
                message: {
                    heading: "Oh snap! You got an error!",
                    message: `Cannot delete customer with id=${id}. Maybe customer was not found or req.body is empty!`,
                },
            });
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error deleting customer with id=" + id,
        });
        console.log(err);
    });
}

