const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/pari',{

}).then(() =>{
    console.log(`connection successfully`);
}).catch((e)=>{
 console.log(`no connection`)
})
