const mongoose=require("mongoose")

const doctorsModel= mongoose.model(
    "doctors",
    {
        name : {type: String},
        spl : {type: String},
        isActive : {type: Boolean}
    }
)

module.exports =doctorsModel;