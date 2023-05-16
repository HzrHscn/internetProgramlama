const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const db = require('../db')     //veritabanına bağlıyoruz kayıt icin oraya gitsin diye

const talepSchema= new db.Schema({      //şema oluşturdum
    İsim: {type: String, required:true},        //şemanın içinde alacagimiz değişkenleri tanımladım
    Soyisim: {type: String, required:true},
    Mesaj: {type:String, required:true},
    yolTarih: {type: Date, default:Date.now}        //tarihi otomatik talepin yollandığı tarih olarak aldım
}, {timeStamps: true})

const talep = db.model("Talep", talepSchema)    

module.exports = talep      //modeli export ettim