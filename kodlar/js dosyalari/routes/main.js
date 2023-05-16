const express = require('express')
const futbolcular = require('../models/futbolcular')    //modüllerimizi tanımladık
const router = express.Router()

router.get('/', (req, res) => {     
    res.render('site2/anasayfa')        //anasayfaya gitme 
})

router.get('/anasayfa', (req, res) => {
    res.render('site2/anasayfa')        //bir hatadan dolayı böyle bir kısayolda yaptım aynı şekilde
})

/*router.get('/futbolcu', async (req, res) =>{
    const futbolcus= await futbolcular.find()
    console.log(futbolcus)
    res.render('site2/futbolcu', {futbolcus: futbolcus})
})*/

router.get('/hakkinda', (req, res) => {
    res.render('site2/hakkinda')        //hakkında sayfasına gitme
})

router.get('/takim', (req, res) => {
    res.render('site2/takim')       //takım sayfasına gitme
})

router.get('/giris', (req, res) => {
    res.render('site2/giris')       //giriş sayfasına gitme
})

router.get('/kayit', (req, res) => {
    res.render('site2/kayit')       //kayıt sayfasına gitme
})

/*router.get('/talep', (req, res) => {
    res.render('site2/talep')
})*/
router.get('/profil', (req, res) => {
    res.render('site2/profil')      //profil sayfasına gitme, sadece oyuncu sayfasından gidilebiliyor
})

/*router.post('/ekle', async (req, res) => {
    const newFutbolcu = new futbolcular(req.body)
    await newFutbolcu.save() 
    console.log(newFutbolcu)
    res.redirect('/')
})*/

module.exports = router