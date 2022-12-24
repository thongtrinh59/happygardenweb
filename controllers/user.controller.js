const db = require("../models");
const parseTime = require("../tools/parsetime");
const Op = db.Sequelize.Op;
const User = db.User;
const { body, validationResult } = require('express-validator');



exports.validate = (method) => {
    switch (method) {
        case 'updateUser': {
            return [
                body('username', `username doesn't exists`).optional(),
                body('email', 'Invalid email').optional().isEmail(),
                body('phonenumber').optional(),
                body('password').optional(),
                body('title').optional(),
                body('nationalid').optional(),
                // body('phone').optional().isInt(),
                // body('status').optional().isIn(['enabled', 'disabled'])
            ]
        }
    }
}


exports.findAll = (req, res) => {
    User.findAll({
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

exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log("this is id");
    console.log(id);
    User.findByPk(id, {
            include: [

            ],
        })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id,
            });
            console.log(err);
        });
};


exports.findWithFilters = (req, res) => {
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
    //08/10/2020 12:30:00

    // const new_fromdate = parseTime(from_date);
    // const new_todate = parseTime(to_date);
    
    User.findAll({
            order: [
                ["userid", order]
            ],
            limit: limit,
            where: [{
                email: {
                    [Op.like]: `%${email}%`,
                },
                username: {
                    [Op.like]: `%${username}%`,
                },
                [datetype]: {
                    [Op.between]: [from_date, to_date],
                },
            }, ],
            include: [

            ],
        })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users.",
            });
        });
};





exports.update = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = parseInt(req.params.id, 10);
    console.log("this is user param", id);
    User.update({
        username: req.body.username,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        nationalid: req.body.nationalid,
        password: req.body.password,
        title: req.body.title
    }, {
        where: { userid: id },
    })
    .then((num) => {
        if (num == 1) {
            res.send({
                message: {
                    heading: "Success !!!",
                    message: "Update user successfully",
                },
            });
        } else {
            res.status(400).send({
                message: {
                    heading: "Oh snap! You got an error!",
                    message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`,
                },
            });
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error updating user with id=" + id,
        });
        console.log(err);
    });
}



