const emialRegex =(email)=>{
   

let emailregex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

if(emailregex.test(email)){
    return true
}

}


module.exports = emialRegex