


let signup=()=>{
    let a= document.getElementById("firstname").value 
    let b= document.getElementById("lastname").value 
    let c= document.getElementById("email").value 
    let d= document.getElementById("password").value 
    
    let userdata={
        "firstname":a ,
        "lastname":b ,
        "email":c,
        "password":d 
    }

    if(!a || !b || !c || !d){
        alert("fill the form")
    }
    else{
        localStorage.setItem("myusers",JSON.stringify(userdata))
    }
}