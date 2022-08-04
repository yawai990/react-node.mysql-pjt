const {connection} = require('../db/db');

// connection.query(`SELECT * FROM users WHERE email = 'yawaiaung@gmail.com' &&  password= SHA1(12345)`,(err,result,field)=>{
//     if(err) throw err;
//     console.log(result)
// })

const login=(req,res,next)=>{
        const {email,password} =req.body;

    connection.query(`SELECT * FROM users WHERE email ='${email}' && password= SHA1('${password}')`,(err,results,filed)=>{
            if(err) throw err;

            if(results.length <= 0){
                return res.status(400).json({message:'wrong credential'})
            }
            return res.status(200).json(results)
        })
};
const signUp = (req,res,next)=>{
    res.send('user created')

};

module.exports = {login,signUp}