const {connection} = require('../db/db');

// connection.query(`SELECT * FROM users WHERE email = 'yawaiaung@gmail.com' &&  password= SHA1(12345)`,(err,result,field)=>{
//     if(err) throw err;
//     console.log(result)
// })

const login=async (req,res)=>{
        const {email,password} =await req.body;

   await connection.query(`SELECT * FROM users WHERE email ='${email}' && password= SHA1('${password}')`,(err,results,filed)=>{
            if(err) throw err;

            if(results.length <= 0){
                return res.status(400).json({message:'wrong credential'})
            }
            return res.status(200).json(results)
        })
};
const signUp =async (req,res)=>{
    const {firstname,lastname,email,password,confirmpassword} =await req.body;

    //check passwords are matched or not; if Not give the error from server
    if(password !== confirmpassword){
            return res.json({
                message:'password are not matching,check your passworde'
            })
    }else{
        //check if the email is already in user table
        await connection.query(`SELECT * FROM users WHERE email ='${email}'`,(err,result)=>{
                if(err) throw err;
                if(result.length > 0){
                    return res.json({
                        message:'Account is already with that email'
                    });

                    //otherwise insert the data to the database for new user
                }else{
                       connection.query(`INSERT INTO users(name,email,password) VALUES('${firstname + ' ' + lastname}','${email}',SHA1(${password}))`,(err,result)=>{
                        if(err) throw err;
                        return res.status(202).json(result)
                    })
                }
        })
    }

};

module.exports = {login,signUp}