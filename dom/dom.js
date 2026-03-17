


// dom : document object model 
//     with the help of dom javascript can select , access , and change all the element of an html documnet or style the elements of an element . 


    // there are three methods to select the elemets : 
    // 1. by id  : 

    document.getElementById("groot").innerHTML="hyy groot"


    document.getElementById("myimage").src="image2.jpg"

    // style : 
    document.getElementById("groot").style.color="red"
    document.getElementById("groot").style.backgroundColor="green"


    


    // 2. by classname : 

    let b=document.getElementsByClassName("groot")
    b[1].innerHTML="hyy groot"

    b[0].style.color="blue"



    // 3. by tagname : 
    let c=document.getElementsByTagName("h2") 
    c[3].innerHTML="hello js"

    c[1].style.fontSize="50px"
