


let signup = () => {
    let a = document.getElementById("firstname").value
    let b = document.getElementById("lastname").value
    let c = document.getElementById("email").value
    let d = document.getElementById("password").value

    // current user : 
    let userdata = {
        "firstname": a,
        "lastname": b,
        "email": c,
        "password": d
    }

    // already users : 
    let alreadyusers = JSON.parse(localStorage.getItem("myusers")) || []


    // already exist user : 
    let existuser = alreadyusers.filter(data => data.email == c)



    if (!a || !b || !c || !d) {
        alert("fill the form")
    }
    else if (existuser.length > 0) {
        alert("you have already signup")
    }
    else {
        alreadyusers.push(userdata)
        localStorage.setItem("myusers", JSON.stringify(alreadyusers))
    }
}