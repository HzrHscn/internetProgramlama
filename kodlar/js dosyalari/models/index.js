const mongoose = require('mongoose');//gerekli modüller
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("./user.model");
db.role = require("./role.model");
db.ROLES = ["user", "admin", "moderator"];// sahip olabilecekleri rollerim
module.exports = db;