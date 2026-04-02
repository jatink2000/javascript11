


// promises : promises is  like a java script  container for future value/data . it is the way of saying "i dont have any value right now but i will have it latter . " 


// there are three states : 
// 1. pending : the promises is waiting for something to finish . for example : waiting for data to load from a website . 

// 2. fulfiled : the promises has been complete success . for example : the data you were waiting now avaliable . 


// 3. failed : the promises has failed . for example : the data not avaliable . 


// syntex : 

// new Promise(function(resolve,reject){
//     do something 
// })


// e.g :

let groot = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let data = true
        if (data) {
            resolve("data avaliable")
        }
        else {
            reject("data not avaliable . try again")
        }
    }, 7000)
})


console.log(groot)  

// groot.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })



// async & await : 
// async makes a function return a promise 
// await is used inside that function wait for a promise .

async function getdata(){
   let a=await groot
   console.log(a)
}
getdata()

