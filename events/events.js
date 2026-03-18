

// events : events is the action that is excute what is heappen in the browser . that can be triggered by the user interacton . 
    // there are two types of events : 
    //     1. html events : the html events is used in the html attributes 
        // some examples of html events is : 
            // 1. when a user clicks the mouse . 
            // 2. when an input is changed . 
            // 3. when the move mouse over of an element . 
            // 4. when a user move out of an element . 


    // 1. onclick : when a user click the mouse of an element . 
        function events1(){
            document.getElementById("groot").innerHTML="hello java script"
        }

        function events2(){
            document.getElementById("groot").innerHTML="hello html"
        }


    // 2. onchange event :when an input value is changed .  

        function events3(){
           let a= document.getElementById("input").value
           document.getElementById("inputvalue").innerHTML=a
        }



    // 3. onmouseover : when the mouse move over of an element . 
         function events4(){
            document.getElementById("groot1").innerHTML="hello java script"
        }

        function events41(){
            document.getElementById("groot1").innerHTML="hello html"
        }

        
        

    // 4. onmouseout: when the mouse out of an element . 
        function events5(){
            document.getElementById("groot2").innerHTML="hello html"
            document.getElementById("groot2").style.color="black"

        }

        function events51(){
            document.getElementById("groot2").innerHTML="hello css"
            document.getElementById("groot2").style.color="red"
        }


    //     2. timing events : 
