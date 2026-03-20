

// events : events is the action that is excute what is heappen in the browser . that can be triggered by the user interacton . 
// there are two types of events : 
//     1. html events : the html events is used in the html attributes 
// some examples of html events is : 
// 1. when a user clicks the mouse . 
// 2. when an input is changed . 
// 3. when the move mouse over of an element . 
// 4. when a user move out of an element . 


// 1. onclick : when a user click the mouse of an element . 
function events1() {
    document.getElementById("groot").innerHTML = "hello java script"
}

function events2() {
    document.getElementById("groot").innerHTML = "hello html"
}


// 2. onchange event :when an input value is changed .  

function events3() {
    let a = document.getElementById("input").value
    document.getElementById("inputvalue").innerHTML = a
}



// 3. onmouseover : when the mouse move over of an element . 
function events4() {
    document.getElementById("groot1").innerHTML = "hello java script"
}

function events41() {
    document.getElementById("groot1").innerHTML = "hello html"
}




// 4. onmouseout: when the mouse out of an element . 
function events5() {
    document.getElementById("groot2").innerHTML = "hello html"
    document.getElementById("groot2").style.color = "black"

}

function events51() {
    document.getElementById("groot2").innerHTML = "hello css"
    document.getElementById("groot2").style.color = "red"
}



// form ------------------

let btn = () => {
    let a = document.getElementById("firstname").value
    document.getElementById("firstnamevalue").innerHTML = a

    let b = document.getElementById("lastname").value
    document.getElementById("lastnamevalue").innerHTML = b

    let c = document.getElementById("email").value
    document.getElementById("emailvalue").innerHTML = c

}

//     2. timing events : java script can be excute in time-intervals . this is called timing event. 

// there are two types of timing events : 
// 1. settimeout : the settimeout execute a function after waiting a specify numbers of milisecond . 
// syntex : 
// setTimeout(function,milisecond)


    // function tech1() {
    //     Swal.fire({
    //         title: "Welcome....",
    //         icon: "success"
    //     });
    // }

    //    let a= setTimeout(() => {
    //         tech1()
    //     }, 10000)


        // 1. cleartimeout : the cleartimeout is used to stop the setTimeout executation . 
            // syntex : 
            // clearTimeout(settimeout variable)

            // function clearmyfunction(){
            //     clearTimeout(a)
            // }



// 2. setinterval : the setinterval execute a function after waiting a specify numbers of milisecond but it used to repeats the execution . 

// syntex : 
// setInterval(function,milisecond)


    function tech1() {
        Swal.fire({
            title: "Welcome....",
            icon: "success"
        });
    }

    let b=setInterval(()=>{
        tech1()
    },5000)


        // 1. clearinterval: the clearinterval is used to stop the setInterval executation. 
        // syntex : 
        //     clearInterval(setInterval variable)

        function clearmyfunction1(){
            clearInterval(b)
        }
