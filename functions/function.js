

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

    // function groot(){
    //     let myname="groot academy" 
    //     return(myname)
    // }

    // let mynamevalue=groot()
    // document.writeln(groot())





    // types of structure of a function : 
    // 1. no return no argument : 


    // function groot(){
    //     document.writeln("hello")
    // }

    // groot() 



    // 2. no return with argument : 

    // function groot(mydata){ // mydata parameter
    //     document.writeln(mydata)
    // }

    // groot("hello groot") // hello argument




    // 3. with return no argument  : 

    // function groot(){
    //     let myname="hello groot academy" // local scope
    //     return(myname)
    // }
    
    // document.writeln(groot())



    // 4. with return with argument : 

    // function groot(myname){
    //     return(myname)
    // }
    
    // document.writeln(groot("java script"))




    // return : 

    // function groot() {
    //     let myname="groot software"

    //     return(myname)
    // }

    // // let a=
    // document.writeln(groot())




    // 1. anonymous function : in an anonymous function , the function name is not define , to create the function first declare the function keyword , then (). start the function body using the {}. 

        // syntex : 
            // function (){
            //     code to be excute 
            // }


            // let a=function (){
            //     document.writeln("groot")
            // }

            // a() 



    // 2. arrow functions : in an arrow function , there is no declare to function keyword , to create the arrow function define the function name using the = . then use the () followed by the => . and then start the function body using the {}. 

        // syntex : 
        // functionname=()=>{
        //     code to be excute .  
        // }


        // groot=()=>{
        //     document.writeln("hello groot")
        //     document.writeln("hello groot")
        //     document.writeln("hello groot")
        // }

        // groot()



        // groot1=()=> document.writeln("hello java script")

        // groot1()



    // 3. self invoked function : the self invoked function is used to work /run when they define the function .  to create the function write the anonymous function inside the () . and then to call the function using the () . 


        // (function (){
        //     code to be excute
        // })() 


        // (function (){
        //     document.writeln("hello jatin")
        // })() ; 






    // Object : object is used to store the multiple key and value pair inside the {} . 

        // let a={
        //     key:value , 
        //     key2:value2,
        //     .
        //     .
        //     .
        // }



        // let student={
        //     "name":"ravi kumar",
        //     "city":"jaipur",
        //     "course":"web designing"
        // }

        // document.writeln(student.name)
        // document.writeln(student.city)
        // document.writeln(student.course)



        let a=new Object() ;

        a.name="groot"
        a.city="jaipur"


        document.writeln(a.name)
        document.writeln(a.city)