const { Schema } = require("mongoose");         // gerekli modüller
const mongoose = require("mongoose");

const FutbolcuSchema= new mongoose.Schema({     //şema oluşturdum 
    fad: {type: String, required:true},
    fsoyad: {type: String, required:true},
    fyaş: {type: Number, required:true},
    fmevki: {type:String, required:true},
    fyer: {type:String, required:true},         //şema içerikleri değişenleri tanımlandı
    fboy: {type: Number, required:true},
    fkilo: {type: Number, required:true},
    fvideo: {type:String, required:true},
    Tarih: {type: Date, default:Date.now}
})

module.exports = mongoose.model('futbolcular', FutbolcuSchema)      //modül export  işlemi