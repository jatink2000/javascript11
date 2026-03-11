

// functions : functions is a block of code it works when it is called . functions is reuserable bit of code . 

// how to create the functions in javascript : to create the functions in javascript , first we use the function keyword and then function name followed by the () . and then start the function body using the {} . 

    // syntex : 
    // function functionname(){
    //     code to be excute 
    // }



    // function groot(){
    //     document.writeln("hello java script" ,"<br/>")
    // }



// how to call the function : to call the function , write the function name followed by the () in our programe file . 

    // call 
    // groot()
    // groot()
    // groot()
    // groot()
    // groot()
    // groot()
    // groot()



// block and global scope : 

    // let a=40; // global scope 

    // function groot(){
    //    //  let a=30; // block scope 
    //     document.writeln(a) // block a= 40
    // }
    
    
    // groot()

    // document.writeln(a)  // 40 




// function parameter and argument : the function parameter and argument are used to pass the data / information inside the function . 


//    function functionname(variable){ // parameter 
//         code to be excute 
//     }

    // call 
    // functionname(data/value/information) // argument 



    // parameter : parameter is a name that is used to access the data /value . it is decalre inside the () where the function define. 

    // argument : argument is the data that is passed inside the function . it is declare inside the () where call the function .  



    // function groot(myname,num){
    //     document.writeln(myname)
    //     document.writeln(num)
    // }

    // groot("groot academy",2000)



// function return : the function return is used to pass the data outside the function . 

    function groot(){
        let myname="groot academy"
        return(myname)
    }

    // let mynamevalue=groot()
    document.writeln(groot())
    