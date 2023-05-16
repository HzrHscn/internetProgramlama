const mongoose = require('mongoose')        //gerekli modül

mongoose.connect('mongodb://127.0.0.1/veritabani', {        //veritabani bölümüne bagladim
    useNewUrlParser: true,      
    useUnifiedTopology: true,           //npmjs mongoose sayfasındaki kod tanım için
})

console.log('mongodb baglandi...')  //consola baglandigimizi yazirdim

module.exports = mongoose   //bütün mongooselarda aynı yere baglaniyor