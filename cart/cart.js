



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

   itemremove.id="remove"



   details.appendChild(itemname)
   details.appendChild(itemprice)


   cartitem.appendChild(itemimage)
   cartitem.appendChild(details)
   cartitem.appendChild(itemremove)

   container.appendChild(cartitem)


})
