const jwt = require('jsonwebtoken')
const secret = require('../secret.json')    //auth modülleri

module.exports = (req, res, next) =>{       // sayfasında ve videodaki kodların aynısını kullandım
    try{
    const token = req.headers.authorization
    const decoded = jwt.verify(token, secret.key)   //secret keyi kendim tanımladım dosyada var
    req.userData = decoded
    next()
    }   catch(error){      
            return res.sendStatus(401)
}
}

// bazı takıldıgım yerlerde https://www.youtube.com/watch?v=4hph7iBVgqg bu videonun auth bölümünü kullandım