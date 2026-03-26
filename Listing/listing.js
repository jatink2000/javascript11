


let products =[
{ "productId": "P201", "productName": "Saras Toned Milk", "price": 27, "imageUrl": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/da/cms-assets/cms/product/98cf7fcd-3300-480e-9d1c-454979387a0b.jpg", "description": "Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.","category":"milk" },
{ "productId": "P202", "productName": "Dell Inspiron 15", "price": 50000, "imageUrl": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", "description": "Dell Inspiron laptop with i5 processor, 8GB RAM and fast SSD storage.", "category":"laptop" },
{ "productId": "P203", "productName": "Lenovo IdeaPad Slim 3", "price": 47000, "imageUrl": "https://images.unsplash.com/photo-1527430253228-e93688616381", "description": "Slim and lightweight Lenovo laptop with 8GB RAM and 512GB SSD.", "category":"laptop" },
{ "productId": "P204", "productName": "HP Victus Gaming Laptop", "price": 65000, "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475", "description": "Gaming laptop with Ryzen 5, 16GB RAM and dedicated graphics.", "category":"pc" },
{ "productId": "P205", "productName": "Dell G15 Gaming", "price": 72000, "imageUrl": "https://images.unsplash.com/photo-1484788984921-03950022c9ef", "description": "Dell G15 with Intel i7, 16GB RAM and powerful GPU for gaming." , "category":"pc"},
{ "productId": "P206", "productName": "Lenovo Legion 5", "price": 80000, "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085", "description": "Lenovo Legion gaming laptop with high performance specs.", "category":"pc" },
{ "productId": "P207", "productName": "HP Envy x360", "price": 75000, "imageUrl": "https://images.unsplash.com/photo-1509395176047-4a66953fd231", "description": "Convertible laptop with touchscreen and Ryzen processor." },
{ "productId": "P208", "productName": "Dell XPS 13", "price": 95000, "imageUrl": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4", "description": "Premium ultrabook with Intel i7 and stunning display." },
{ "productId": "P209", "productName": "Lenovo ThinkPad E14", "price": 68000, "imageUrl": "https://images.unsplash.com/photo-1531297484001-80022131f5a1", "description": "Business laptop with durability and excellent keyboard." },
{ "productId": "P210", "productName": "HP 14s", "price": 42000, "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", "description": "Compact laptop with i3 processor and SSD storage." },

{ "productId": "P211", "productName": "Dell Latitude 3420", "price": 60000, "imageUrl": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", "description": "Business-focused laptop with security features and performance." },
{ "productId": "P212", "productName": "Lenovo IdeaPad Gaming 3", "price": 64000, "imageUrl": "https://images.unsplash.com/photo-1527430253228-e93688616381", "description": "Gaming laptop with GTX graphics and Ryzen processor." },
{ "productId": "P213", "productName": "HP EliteBook 840", "price": 88000, "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475", "description": "Premium business laptop with security and sleek design." },
{ "productId": "P214", "productName": "Dell Vostro 3510", "price": 48000, "imageUrl": "https://images.unsplash.com/photo-1484788984921-03950022c9ef", "description": "Affordable laptop for small business users." },
{ "productId": "P215", "productName": "Lenovo Yoga Slim 7", "price": 82000, "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085", "description": "Slim premium laptop with long battery life." },

{ "productId": "P216", "productName": "HP Pavilion Gaming", "price": 67000, "imageUrl": "https://images.unsplash.com/photo-1509395176047-4a66953fd231", "description": "HP gaming laptop with powerful graphics." },
{ "productId": "P217", "productName": "Dell Alienware m15", "price": 150000, "imageUrl": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4", "description": "High-end gaming laptop with premium build and performance." },
{ "productId": "P218", "productName": "Lenovo ThinkBook 15", "price": 55000, "imageUrl": "https://images.unsplash.com/photo-1531297484001-80022131f5a1", "description": "Modern business laptop with sleek design." },
{ "productId": "P219", "productName": "HP Chromebook 14", "price": 30000, "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", "description": "Lightweight Chromebook for basic tasks and browsing." },
{ "productId": "P220", "productName": "Dell Inspiron 14", "price": 52000, "imageUrl": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", "description": "Compact and efficient laptop for everyday use." },

{ "productId": "P221", "productName": "Lenovo IdeaPad Flex 5", "price": 60000, "imageUrl": "https://images.unsplash.com/photo-1527430253228-e93688616381", "description": "Convertible laptop with flexible design." },
{ "productId": "P222", "productName": "HP Spectre x360", "price": 110000, "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475", "description": "Premium convertible ultrabook with sleek design." },
{ "productId": "P223", "productName": "Dell Precision 3560", "price": 120000, "imageUrl": "https://images.unsplash.com/photo-1484788984921-03950022c9ef", "description": "Workstation laptop for professionals." },
{ "productId": "P224", "productName": "Lenovo Legion Slim 7", "price": 130000, "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085", "description": "Slim gaming laptop with high-end specs." },
{ "productId": "P225", "productName": "HP ProBook 450", "price": 58000, "imageUrl": "https://images.unsplash.com/photo-1509395176047-4a66953fd231", "description": "Reliable business laptop for professionals." },

{ "productId": "P226", "productName": "Dell G3 Gaming", "price": 70000, "imageUrl": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4", "description": "Gaming laptop with strong graphics performance." },
{ "productId": "P227", "productName": "Lenovo IdeaPad 5", "price": 56000, "imageUrl": "https://images.unsplash.com/photo-1531297484001-80022131f5a1", "description": "Balanced laptop for work and entertainment." },
{ "productId": "P228", "productName": "HP 15s", "price": 45000, "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", "description": "Affordable laptop for daily use." },
{ "productId": "P229", "productName": "Dell Inspiron 13", "price": 65000, "imageUrl": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", "description": "Compact ultrabook with premium build." },
{ "productId": "P230", "productName": "Lenovo ThinkPad X1 Carbon", "price": 140000, "imageUrl": "https://images.unsplash.com/photo-1527430253228-e93688616381", "description": "Ultra-premium business laptop." },

{ "productId": "P231", "productName": "HP Omen 16", "price": 120000, "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475", "description": "Gaming laptop with RTX graphics." },
{ "productId": "P232", "productName": "Dell Latitude 5520", "price": 90000, "imageUrl": "https://images.unsplash.com/photo-1484788984921-03950022c9ef", "description": "Enterprise laptop with security features." },
{ "productId": "P233", "productName": "Lenovo Yoga 9i", "price": 125000, "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085", "description": "Premium convertible laptop." },
{ "productId": "P234", "productName": "HP Elite Dragonfly", "price": 150000, "imageUrl": "https://images.unsplash.com/photo-1509395176047-4a66953fd231", "description": "Ultra-light business laptop." },
{ "productId": "P235", "productName": "Dell XPS 15", "price": 140000, "imageUrl": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4", "description": "High-end laptop with stunning display." },

{ "productId": "P236", "productName": "Lenovo Legion 7", "price": 160000, "imageUrl": "https://images.unsplash.com/photo-1531297484001-80022131f5a1", "description": "Top-tier gaming laptop." },
{ "productId": "P237", "productName": "HP Pavilion Aero", "price": 60000, "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", "description": "Lightweight laptop for portability." },
{ "productId": "P238", "productName": "Dell Inspiron 16", "price": 70000, "imageUrl": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", "description": "Large screen laptop for productivity." },
{ "productId": "P239", "productName": "Lenovo IdeaPad 1", "price": 35000, "imageUrl": "https://images.unsplash.com/photo-1527430253228-e93688616381", "description": "Entry-level laptop for basic use." },
{ "productId": "P240", "productName": "HP Stream 14", "price": 28000, "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475", "description": "Budget laptop for students." },

{ "productId": "P241", "productName": "Dell Vostro 3400", "price": 48000, "imageUrl": "https://images.unsplash.com/photo-1484788984921-03950022c9ef", "description": "Business laptop with reliable performance." },
{ "productId": "P242", "productName": "Lenovo ThinkPad L14", "price": 75000, "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085", "description": "Durable laptop for professionals." },
{ "productId": "P243", "productName": "HP Pro x360", "price": 68000, "imageUrl": "https://images.unsplash.com/photo-1509395176047-4a66953fd231", "description": "Convertible laptop for work and study." },
{ "productId": "P244", "productName": "Dell G5 Gaming", "price": 85000, "imageUrl": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4", "description": "Gaming laptop with powerful GPU." },
{ "productId": "P245", "productName": "Lenovo Yoga Slim 9i", "price": 140000, "imageUrl": "https://images.unsplash.com/photo-1531297484001-80022131f5a1", "description": "Luxury slim laptop." },
{ "productId": "P204", "productName": "HP Victus Gaming Laptop", "price": 65000, "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475", "description": "Gaming laptop with Ryzen 5, 16GB RAM and dedicated graphics." },
{ "productId": "P245", "productName": "Lenovo Yoga Slim 9i", "price": 140000, "imageUrl": "https://images.unsplash.com/photo-1531297484001-80022131f5a1", "description": "Luxury slim laptop." },
{ "productId": "P204", "productName": "HP Victus Gaming Laptop", "price": 65000, "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475", "description": "Gaming laptop with Ryzen 5, 16GB RAM and dedicated graphics." }

]



let allproducts=document.getElementById("allproducts")

products.map((item)=>{
    
   let box1= document.createElement("div")
   box1.id="box1"

  let image= document.createElement("img")
  image.src=item.imageUrl

  let title= document.createElement("h3")
  title.innerHTML=item.productName

  let price= document.createElement("p")
  price.innerHTML="$ "+item.price

  let btn= document.createElement("button")
  btn.innerHTML="Add To Cart"

  box1.appendChild(image)
  box1.appendChild(title)
  box1.appendChild(price)
  box1.appendChild(btn)

  allproducts.appendChild(box1)

})

