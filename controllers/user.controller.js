const db = require("../models");
var bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;
const User = db.User;

exports.create = (req, res) => {
    res.status(200).send("Create successfully");
}


exports.allAccess = (req, res) => {
    res.status(200).send("Public");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator");
};

exports.employeeBoard = (req, res) => {
    res.status(200).send("Employee");
};

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

// const query = {
//     username: req.query.username,
//     email: req.query.email
// }

// query.

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

// exports.update = (req, res) => {
//     const id = req.params.id;
//     User.update({
//             name: req.body.name,
//             email: req.body.email,
//             password: bcrypt.hashSync(req.body.password, 8),
//         }, {
//             where: { id: id },
//         })
//         .then((num) => {
//             if (num == 1) {
//                 res.send({
//                     message: {
//                         heading: "Success !!!",
//                         message: "User đã được cập nhật thành công",
//                     },
//                 });
//             } else {
//                 res.status(400).send({
//                     message: {
//                         heading: "Oh snap! You got an error!",
//                         message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`,
//                     },
//                 });
//             }
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: "Error updating user with id=" + id,
//             });
//             console.log(err);
//         });
// };

// exports.hide = (req, res) => {
//     const id = req.query.id;
//     const hide = req.query.hide;
//     User.update({
//             hide: hide,
//         }, {
//             where: { id: id },
//         })
//         .then((num) => {
//             if (num == 1) {
//                 res.send({
//                     message: "user was deleted successfully!",
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete user with id=${id}. Maybe user was not found!`,
//                 });
//             }
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: "Could not delete user with id=" + id,
//             });
//             console.log(err);
//         });
// };





exports.update = (req, res) => {

}

exports.hide = (req, res) => {
    
}


