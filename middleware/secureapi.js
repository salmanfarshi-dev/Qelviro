const secureapi =(req, res, next)=>{
console.log(req.headers.authorization);
if(req.headers.authorization == "123456789"){
    next()
}else{
  return  res.send({error: "Authentication failed"})
}

}
module.exports = secureapi