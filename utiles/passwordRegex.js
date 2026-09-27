const passwordRegex =(password)=>{
   

let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

if(passwordregex.test(password)){
    return true
}

}


module.exports = passwordRegex