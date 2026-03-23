


let login=()=>{
   let emailvalue= document.getElementById("email").value
   let passwordvalue= document.getElementById("password").value



    // get all users: 
    let allusers=JSON.parse(localStorage.getItem("myusers"))||[]

    
    // only one user that mail is same our current user : 
    let oneuser=allusers.filter(data=> data.email==emailvalue)




   if(!emailvalue || !passwordvalue){
    alert("fill the form")
   }
   else if(oneuser.length==0){
        alert("Not signup")
   }
   else if(oneuser.email==emailvalue && oneuser.password==passwordvalue){
    alert("login successful")
   }
}