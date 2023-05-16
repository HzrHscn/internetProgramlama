const express = require('express')
const router = express.Router()
const talep = require('../models/talep')
const checkAuth = require('../middleware/auth')     //checkauth kullanınca ekleme izni gerekli hale geldi

router.get('/talep', (req, res) => {    //talep sayfasını render ettik ve kullanıcı o sayfaya yolladım
    res.render('site2/talep')
})
/*
router.post('/test', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})*/

router.use(express.json())

router.post('/talepEkle',/* checkAuth, */(req, res) => {    //talep ekleme işlemi 
    const talep = new talep({
        İsim: req.body.İsim,
        Soyisim: req.body.Soyisim,
        Mesaj: req.body.Mesaj
    })
    post.save()
        .then(result => res.sendStatus(201).send('gönderildi'))     //başarıyla gönderildigi bilgisi
        .catch(err =>{
            console.log(err)
            res.status(500).json({error: err})      //hata aldıysak ekrana ve consola yazdırdık
        })
})

module.exports = router