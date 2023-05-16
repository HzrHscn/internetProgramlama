const express = require('express')
const router = express.Router()
const futbolcular = require('../models/futbolcular')        //modüllerimizi tanımladım
const checkAuth = require('../middleware/auth')

router.get('/futbolcu', async (req, res) =>{        //futbolcu sayfası istediğinde o sayfayı render edip kullanıcıya verdik
    const futbolcus= await futbolcular.find()       //hata aldığım yerde böyle bir çözüm yöntemi kullandım
    console.log(futbolcus)
    res.render('site2/futbolcu', {futbolcus: futbolcus})
})
/*
router.post('/test', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})*/

router.use(express.json())      //json modülü

router.post('/futbolcuEkle', (req, res) => {        //futbolcu ekleme işlemi 
    const futbolcular = new futbolcular({
        fad: req.body.fad,
        fsoyad: req.body.fsoyad,
        fyaş: req.body.fyaş,
        fmevki: req.body.fmevki,
        fyer: req.body.fyer,
        fboy: req.body.fboy,
        fkilo: req.body.fkilo,
        fvideo: req.body.fvideo
    })
    post.save()
        .then(result => res.sendStatus(201).send('gönderildi'))     //başarıyla kayıt oluşturulduysa bildirdik
        .catch(err =>{
            console.log(err)
            res.status(500).json({error: err})      //konsola ve kullanıcıya hatayı gösterdik
        })
})

module.exports = router