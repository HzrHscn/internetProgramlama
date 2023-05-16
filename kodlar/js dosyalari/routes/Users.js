const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const jwt = require('jsonwebtoken');
const secret = require('../secret.json')
const checkAuth = require('../middleware/auth')     //gerekli modüller 

const User= require('../models/user');      //user modelimizi aldık
const { response } = require('express');
const req = require('express/lib/request');

//Kayıt olmak (registeration)
router.post('/users/register', (req, res)=>{
    User.find({email: req.body.email})      //sistemde böyle bir email var mı kontrolü
    .exec()
    .then(users=>{
        if(users.lenght >=1){
            return res.status(409).json({
                message: "email adresi önceden kullanılmış"
            })
        }
        else {
            bcrypt.hash(req.body.password, saltRounds, function(err, hash){     
                if (err){
                    return res.status(500).json({       //paraloa hashleme işlemi
                        error: err
                    })
                }
                else {
                    const user = new User({
                        ad: req.body.ad,
                        soyad: req.body.soyad,  //kulanıcı oluşturma işlemi
                        email: req.body.email,
                        password: hash
                    })

                    user.save()
                        .then(result => res.sendStatus(201))
                        .catch(err => res.status(500).json({error: err}))  //kulanıcıya bilgi verme bölümü
                        
                }
            })
        }
    })
})

//Giriş (logging in)

router.post('/users/login', (req, res) => {
    User.find({email: req.body.email})      //sistemdeki mail adresiyle karşılaştırma
        .exec()
        .then(users => {
            if(users.lenght < 1){       
                return res.sendStatus(404)
            }
            bcrypt.compare(req.body.password, users[0].password, (err, isEqual) => {        //hash'li şifreyle karşılaştırma
                if(err) return response.sendStatus(401)
                if(isEqual){
                    const token=jwt.sign(       //eğer aynıysa giriş işlemleri, token kullandım referans videosu auth bölümünde var
                    {
                        email: user[0].email,
                        userId: user[0]._id
                    },
                    secret.key,
                    {
                        expiresIn: "1h"     //npmjs sayfasındaki kod, yararlı olcagını düsündügüm icin koydum
                    }
                    )
                    return res.status(200).json({
                        message: "Authorization başarılı",      //kullanıcıya yanıt
                        token: token
                    })
                }
                res.sendStatus(401)
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({      //hata durumunda consola ve kullanıcıya bildirme işlemi
                error: err
            })
        })
})


module.exports = router