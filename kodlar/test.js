const mongoose = require('mongoose')

const futbolcular = require('./models/futbolcular');
const talep = require('./models/talep');
const user = require('./models/user');

mongoose.connect('mongodb://127.0.0.1/veritabani_gecici', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/*futbolcular.create({    //test denemeleri
    fad:'Emirhan',
    fsoyad:'İlkhan',
    fyaş:'17',
    fmevki:'Ortasaha',
    fyer:'İstanbul',
    fboy:'176',
    fkilo:'67',
    fvideo:'zort'
}, (error, futbolcular)=>{
    console.log(error, futbolcular)
})*/

/*user.create({
  ad:'hazar',
  soyad:'hascan',
  email:'hzr@gmail.com',
  password:'1234'
}, (error, user)=>{
  console.log(error, user)
})*/

talep.create({    
  İsim:'Emirhan',
  Soyisim:'İlkhan',
  Mesaj:'İnegöl - sanayi sahası // 27.05.2022  14.30 ',
  
}, (error, talep)=>{
  console.log(error, talep)
})