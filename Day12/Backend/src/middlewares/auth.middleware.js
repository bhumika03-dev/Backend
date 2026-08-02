const jwt=require('jsonwebtoken')


async function identifyingUser(req,res,next)
 {

 const token = req.cookies.token;
     
    let decoded=null;
    try{
        decoded=jwt.verify(token,process.env.JWT_SECRET);
    }
    catch(err){
        return res.status(401).json({
            message:"Token invalid"
        })
    }

    req.user=decoded

    next()
 }

 module.exports=identifyingUser;