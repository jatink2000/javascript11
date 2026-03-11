

// array : array is used to store the multiple values/data into a single variable . 

// how to create a array :  to create an array , first we define the variable and then store the multiple value into a [] . and each value/ data seperated by the , . 

    // let groot=[23,56,4,545,453,40,34]


// how to access the all arrays Element : 
    // document.writeln(groot)



// how to access the only one element : to access the one element of an array using the indexing , and the arrays index start with 0 . 
    // document.writeln(groot[0])



// create the empty array : 
    // let groot=[]; 
    // groot[0]=29;
    // groot[1]=20;
    // groot[2]=30;
    // groot[3]=50;
    // document.writeln(groot)



// using the array keyword : 
    // let groot= Array(3,4,2,6)
    // document.writeln(groot)


// methods : 
// 1. length : 
    // let a=[23,56,4,545,453,40,34]
    // document.writeln(a.length)

    // let a=[23,56,4,"groot",453,40,34,23,56,4,545,453,40,34]
    // for(i=0;i<a.length;i++){
    //     if(i<=3){
    //         document.writeln(a[i] ,"<br/>")
    //     }
    // }



// 2. at : 
    // let a=[23,56,4,545,453,40,34]
    // document.writeln(a.at(3))



// 3. concat : 


// 4. slice : 


// 5. pop: remove the last element 

    // let a=[23,56,4,545,453,40,34]
    // let b=a.pop() 
    // document.writeln(a)


// 6. push: add the element at last .

    // let a=[23,56,4,545,453,40,34]
    // let b=a.push("09798") 
    // document.writeln(a)


// 7. shift : remove the first element

    // let a=[23,56,4,545,453,40,34]
    // let b=a.shift() 
    // document.writeln(a)


// 8. unshift: add the element at first .
    // let a=[23,56,4,545,453,40,34]
    // let b=a.unshift("09798") 
    // document.writeln(a)


// 9. splice : add the element of an array and remove the element . 
    // splice(target index , count delete element , add new value)

    // let a=[23,56,4,545,453,40,34]
    // let b=a.splice(3,1,234,567)
    // document.writeln(a)


// 10 . copywithin : 
    // let a=[23,56,4,545,453,40,34] // 7 
    // let b=a.copyWithin(4,0) 
    // document.writeln(b)


// 11. index of : 


// 12. includes : 


// 13. delete :

    // let a=[23,56,4,545,453,40,34]
    // let b=delete a[4]
    // document.writeln(a)


// change the element : 
    // let a=[23,56,4,545,453,40,34]
    // a[2]=98
    // document.writeln(a)


    

// map 
// filter 
// reduce 