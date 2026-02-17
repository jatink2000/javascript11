

// variables: variables like a container. which is used to store the data/value like number,string etc. 
    
        // syntex : 
        //     variablename=data/value . 

        // students=50 
        // apples=10
        // document.writeln("students","<br/>") // msg
        // document.writeln("number of students:",students) // variable
        // console.log("number of apples:",apples)


        
        // general rules of a variables : 
        // 1. variables name can start with latter or underscore . 
                // _groot=47
        // 2. variables name cannot start with number . 
                    // 2groot=48   
        // 3. variables name can contain latter number and $ symbol . 
                        // g2r$oot=39

        // 4. variables name are case senstive . 
                // groot=48 
                // document.writeln(groot)

        // 5. variable name cannot contain any extra space . 
                    // gro_ot=39


        // how to modify the variable value : 

        // groot=20 
        // document.writeln(groot) // 20 
        // groot=25
        // document.writeln(groot) // 25


        // how to declare the variable : 

        // 1. var : modify & redeclare 
                // var groot=30
                // document.writeln(groot)
                // groot=40 // change /modify 
                // document.writeln(groot)



                // var groot=90
                // document.writeln(groot)




        // 2. let :  modify but redeclare not allow inside same scope . 
                // let groot=20 
                // document.writeln(groot) // 20
                // groot=60 
                // document.writeln(groot) // 60


                // {       let groot=90 
                //         document.writeln(groot) // 90  
                // }


        // 3. const :  constant variable . 
                // const groot=50 
                // document.writeln(groot)
                // groot=80
                // document.writeln(groot)



                // third variable : 
                // let a=50
                // let b=10 
                // let c=a  // 50 
                // a=b // 10 
                // b=c // 50 
                // document.writeln(a)
                // document.writeln(b)


                // operators  : 
                let a=50
                let b=10 
                a=a+b // 50+10 : 60 
                b=a-b // 60-10 : 50 
                a=a-b //  60-50 : 10 
                document.writeln(a)
                document.writeln(b)

