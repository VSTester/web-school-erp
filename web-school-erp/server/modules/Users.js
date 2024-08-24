const mongoose = require("mongoose")


const UsersSchema = new mongoose.Schema({
    name:String,
    type:String,
    email:String,
    password:String
})

const UserModel = mongoose.model("users",UsersSchema)
module.exports= UserModel