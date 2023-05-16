const { Schema } = require("mongoose")
const mongoose = require("mongoose")
const db = require('../db')

const userSchema= new db.Schema({
    ad: {type: String, required:true},
    soyad: {type: String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    kayiTarih: {type: Date, default:Date.now}
}, {timeStamps: true})

const user = db.model("User", userSchema)

module.exports = user

//Kullanıcımız için genel bir model oluşturdum.