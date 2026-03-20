

// localstorage  : the localstorage is used to save the key and value pair data in the browser . and these data is not deleted when the browser is closed . 

// there are four methods : 


// 1. setitem : the setitem is used to save the data in localStorage . 
    // syntex : 
        // localStorage.setItem(Key,value) 


        function groot1(){
            localStorage.setItem("name","groot academy")
            localStorage.setItem("city","jaipur")
            localStorage.setItem("year","2026")
        }

// 2. getitem : the getitem is used to access the data from localstorage . 
        // syntex : 
            // localStorage.getItem(key)

        
        function groot2(){
          let a=  localStorage.getItem("name")
          let b=  localStorage.getItem("city")
          let c=  localStorage.getItem("year")
          console.log("name is ",a)
          console.log("city is ",b)
          console.log("year is ",c)
        }


// 3. removeitem : the removeitem is used to delete the key in localstorage . 
    // syntex : 
        // localStorage.removeItem(key) 

        function groot3(){
            localStorage.removeItem("year")
        }



// 4. clear() : the clear is used to remove the all keys in localStorage . 
    // syntex : 
        // localStorage.clear() 


        function groot4(){
            localStorage.clear()
        }