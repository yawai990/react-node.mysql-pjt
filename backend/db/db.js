const mysql = require('mysql');

const connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:"portfolio"
});

connection.connect(err=>{
        if(err){
                console.log('server error')
        }
        console.log('server and backend are connected')
});

module.exports = {connection}