const express = require('express')
const file_system = require('fs')
const bp = require('body-parser')
const admz = require('adm-zip')
const app = express()

var to_zip = file_system.readdirSync(__dirname+'/'+'upload_data')

app.use(bp.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/'+'index.html')

    var zp = new admz();

    for(var k=0 ; k<to_zip.length ; k++){
        zp.addLocalFile(__dirname+'/'+'upload_data'+'/'+to_zip[k])
    }

    

})


app.listen(7777,function(){
    console.log('port is active at 7777');
})