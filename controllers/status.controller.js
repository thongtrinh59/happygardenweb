const db = require("../models");
const Op = db.Sequelize.Op;
const Status = db.Status;


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

