



// pre post : 




// <!-- loops :  -->

// <!-- start , condition , step  -->


// <!-- 1. entry loop : check the condition when enter the loop .  -->
//         <!-- 1. for loop  : -->

//         <!-- syntex :  -->
//          <!-- for(start ; condition ; step){
//             code to be excute 
//          } -->


// for(i=1;i>=1000;i+=2){
//     document.writeln(i)
// }



//         <!-- 2. while loop :  -->

// syntex :

// start 
// while(condition){
//     code to be excute 
//     step (increment / decrement) 
// }


// i=1
// while(i>=100){
//     document.writeln(i)
//     i++
// }



// <!-- 2. exit loop :  check the condition when exit the loop . -->
//         <!-- 1. do while loop :  -->

// syntex : 

// start 
// do{
//     code to be excute 
//     step 
// }while(condition) 


// i=10 
// do{
//     document.writeln(i)
//     i++
// }while(i<=50)



// Q 8 :
// outer loop : row 
// inner loop : space (4,3,2,1,0) , star (5,5,5,5,5)

// i=1
// while(i<=5){
//         k=5 
//         while(k>i){
//                 document.writeln("&nbsp;&nbsp;")
//                 k--
//         }
//         j=1
//         while(j<=5){
//                 document.writeln("*")
//                 j++
//         }
//         document.writeln("<br/>")
//         i++
// }



// i = 1
// do {
//         if (i <=4) {
//                 k = 5
//                 do {
//                         document.writeln("&nbsp;&nbsp;")
//                         k--
//                 } while (k > i)
//         }
//         j = 1
//         do {
//                 document.writeln("*")
//                 j++
//         } while (j <= 5)
//         document.writeln("<br/>")
//         i++
// } while (i <= 5)


// Q 9 : 
// outer loop : row 
// inner loop : space (0,1,2,3,4) , star (5,5,5,5,5)



// i=1
// while(i<=5){
//         k=1 
//         while(k<i){
//                 document.writeln("&nbsp;&nbsp;")
//                 k++
//         }
//         j=1
//         while(j<=5){
//                 document.writeln("*")
//                 j++
//         }
//         document.writeln("<br/>")
//         i++
// }



// i = 1
// do {
//         if (i > 1) {
//                 k = 1
//                 do {
//                         document.writeln("&nbsp;&nbsp;")
//                         k++
//                 } while (k < i)
//         }
//         j = 1
//         do {
//                 document.writeln("*")
//                 j++
//         } while (j <= i)
//         document.writeln("<br/>")
//         i++
// } while (i <= 5)



// ---------------------------------------------- 

// 12345678910 
// for(i=1;i<=10;i++){
//         document.writeln(i,"<br/>")
// }



// 12345
// 12345
// 12345
// 12345
// 12345



// 1
// 12
// 123
// 1234
// 12345



// 54321
// 5432
// 543
// 54
// 5



// 5
// 54
// 543
// 5432
// 54321


//     1
//    12
//   123
//  1234
// 12345



// 12345
//  1234
//   123
//    12
//     1


// 54321
//  54321 
//   54321 
//    54321 
//     54321


//     12345
//    12345
//   12345
//  12345
// 12345


// 1
//  12
//   123
//    1234
//     12345