const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const connection =mysql.createConnection({
        host:'localhost',
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE
});

connection.connect(err=>{
        if(err){
                console.log('server error')
        }else{
                console. log('server and backend are connected')
        }
});

module.exports = {connection}