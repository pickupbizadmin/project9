const mongoose = require("mongoose");

const navsModel= mongoose.model(
    "navs",
    {
        xs:{type: Number},
        path: {type: String},
        title: {type: String}
    }
)

module.exports = navsModel;