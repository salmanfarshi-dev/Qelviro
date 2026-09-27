// this is a post method

const emialRegex = require("../utiles/emailrejex");
const passwordRegex = require("../utiles/passwordRegex");


const registrationControllers=(req,res)=>{
     let { username, email, password} = req.body
console.log( req.body);

if(!username){
    res.send("user name is required")
}else if(!email){
    res.send("Email is required")
}else if(!emialRegex(email)){
    res.send("valid email");
    

}

else if(!password){
    res.send("password is reqired")
}else if(!passwordRegex(password)){
    res.send("strong password requied")
}
else{
    console.log(req.body)
}

}

module.exports = registrationControllers