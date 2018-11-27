var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeauth');

var db = mongoose.connection;



// user schema
var UserSchema = mongoose.Schema({
    email: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    role:{
        type: String
    }
});

var User = module.exports = mongoose.model('User',UserSchema);

module.exports.createUser = function(newUser,callback){
    newUser.save(callback);
}