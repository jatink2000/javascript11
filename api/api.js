

// api : 



async function getdata(){
    let result=await fetch("https://dummyjson.com/products")
    let myapidata=await result.json()
    let products=myapidata.products


    let apiproducts=document.getElementById("apiproducts")

    products.map((item)=>{
        
        let productbox=document.createElement("div")

        let image=document.createElement("img")
        image.src=item.thumbnail


        let title=document.createElement("h3")
        title.innerHTML=item.title

         let price=document.createElement("p")
        price.innerHTML="$"+item.price


        productbox.appendChild(image)
        productbox.appendChild(title)
        productbox.appendChild(price)



        apiproducts.appendChild(productbox)

    })
}

getdata() 