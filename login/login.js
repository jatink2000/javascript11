


let login = () => {
   let emailvalue = document.getElementById("email").value
   let passwordvalue = document.getElementById("password").value



   // get all users: 
   let allusers = JSON.parse(localStorage.getItem("myusers")) || []


   // only one user that mail is same our current user : 
   let oneuser = allusers.filter(data => data.email == emailvalue)
   let a = oneuser[0]



   if (!emailvalue || !passwordvalue) {
      alert("fill the form")
   }
   else if (oneuser.length == 0) {
      alert("Not signup")
      window.location.assign("../signup/signup.html")
   }
   else if(a.email==emailvalue && a.password==passwordvalue){
      alert("login success ....")
      window.location.assign("./Home.html")
   }
   else{
      alert("invalid data")
   }

}




// wom : window Object model 
   // with the help of wom java script can jump one page to another page after the form is submitted . 

      // window.location.assign("page path") // 

      // window.location=("page path")