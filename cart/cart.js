



let cartdata=JSON.parse(localStorage.getItem("cartitem"))||[]

let container=document.getElementById("container")

cartdata.map((data)=>{



   let cartitem= document.createElement("div")
   cartitem.id="cart-item"
   let details= document.createElement("div")
   details.id="details"

   let itemimage= document.createElement("img")
   itemimage.src=data.image

   let itemname= document.createElement("h3")
   itemname.innerHTML=data.name

   let itemprice= document.createElement("p")
   itemprice.innerHTML="$"+data.price

   itemprice.id="price"


    let itemremove= document.createElement("span")
   itemremove.innerHTML="❌"

   itemremove.addEventListener("click",()=>{
         removeitem(data)
   })


   itemremove.id="remove"



   details.appendChild(itemname)
   details.appendChild(itemprice)


   cartitem.appendChild(itemimage)
   cartitem.appendChild(details)
   cartitem.appendChild(itemremove)

   container.appendChild(cartitem)

})


// remove cart item : -----------
let removeitem=(product)=>{
   let newdata=cartdata.filter(data=> data.productId!=product.productId)
   localStorage.setItem("cartitem",JSON.stringify(newdata))

   window.location.reload() 
}



// totalmont : -----------------

let totalamount=cartdata.reduce((total, item) => total + item.price, 0)
document.getElementById("totalamount").innerHTML="$ "+totalamount
document.getElementById("totalamount2").innerHTML="$ "+totalamount

