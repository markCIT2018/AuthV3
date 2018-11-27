var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeauth');

var db = mongoose.connection;
    
    // artist schema
    var Artistchema = mongoose.Schema({
        id: {
            type: String,
            index: true
        },
        name: {
            type: String
        },
        gender:{
            type: String
        },
        date:{
            type: String
        },
        yearOfbirth:{
            type: String
    
        },
        yearOfDeath:{
            type: String
    
        },
        placeOfBirth:{
            type: String
    
        },
        placeOfDeath:{
            type: String
        }
    });

    var Artist = module.exports = mongoose.model('Artist',ArtistSchema);

module.exports.createUser = function(newArtist,callback){
    newArtist.save(callback);
}