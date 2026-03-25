

// object : 

// let student1 = {
//     "firstname": "ravi",
//     "lastname": "kumar",
//     "course": "web designing",
//     "contact": "9876543211",
//     "totalfee": "12000"
// }

// let student2 = {
//     "firstname": "ravi",
//     "lastname": "kumar",
//     "course": "web designing",
//     "contact": "9876543211",
//     "totalfee": "12000"
// }


// json :  java script orinented notation 
        // collection of multiple Objects . 

let students = [
  { "firstname": "Ravi", "lastname": "Kumar", "course": "Web Designing", "contact": "9876500001", "totalfee": "12000" },
  { "firstname": "Amit", "lastname": "Sharma", "course": "React JS", "contact": "9876500002", "totalfee": "15000" },
  { "firstname": "Neha", "lastname": "Verma", "course": "NodeJS", "contact": "9876500003", "totalfee": "14000" },
  { "firstname": "Pooja", "lastname": "Gupta", "course": "Full Stack", "contact": "9876500004", "totalfee": "25000" },
  { "firstname": "Rahul", "lastname": "Meena", "course": "MongoDB", "contact": "9876500005", "totalfee": "10000" },
  { "firstname": "Karan", "lastname": "Yadav", "course": "Web Designing", "contact": "9876500006", "totalfee": "12000" },
  { "firstname": "Sneha", "lastname": "Jain", "course": "React JS", "contact": "9876500007", "totalfee": "15000" },
  { "firstname": "Vikas", "lastname": "Singh", "course": "NodeJS", "contact": "9876500008", "totalfee": "14000" },
  { "firstname": "Anjali", "lastname": "Saini", "course": "Full Stack", "contact": "9876500009", "totalfee": "25000" },
  { "firstname": "Deepak", "lastname": "Choudhary", "course": "MongoDB", "contact": "9876500010", "totalfee": "10000" },

  { "firstname": "Priya", "lastname": "Agarwal", "course": "Web Designing", "contact": "9876500011", "totalfee": "12000" },
  { "firstname": "Arjun", "lastname": "Rajput", "course": "React JS", "contact": "9876500012", "totalfee": "15000" },
  { "firstname": "Komal", "lastname": "Bansal", "course": "NodeJS", "contact": "9876500013", "totalfee": "14000" },
  { "firstname": "Rohit", "lastname": "Tiwari", "course": "Full Stack", "contact": "9876500014", "totalfee": "25000" },
  { "firstname": "Sakshi", "lastname": "Mittal", "course": "MongoDB", "contact": "9876500015", "totalfee": "10000" },
  { "firstname": "Manish", "lastname": "Joshi", "course": "Web Designing", "contact": "9876500016", "totalfee": "12000" },
  { "firstname": "Nikita", "lastname": "Mathur", "course": "React JS", "contact": "9876500017", "totalfee": "15000" },
  { "firstname": "Tarun", "lastname": "Kulkarni", "course": "NodeJS", "contact": "9876500018", "totalfee": "14000" },
  { "firstname": "Simran", "lastname": "Kapoor", "course": "Full Stack", "contact": "9876500019", "totalfee": "25000" },
  { "firstname": "Ajay", "lastname": "Nair", "course": "MongoDB", "contact": "9876500020", "totalfee": "10000" },

  { "firstname": "Meena", "lastname": "Reddy", "course": "Web Designing", "contact": "9876500021", "totalfee": "12000" },
  { "firstname": "Sunil", "lastname": "Das", "course": "React JS", "contact": "9876500022", "totalfee": "15000" },
  { "firstname": "Rekha", "lastname": "Iyer", "course": "NodeJS", "contact": "9876500023", "totalfee": "14000" },
  { "firstname": "Ankit", "lastname": "Patel", "course": "Full Stack", "contact": "9876500024", "totalfee": "25000" },
  { "firstname": "Divya", "lastname": "Shah", "course": "MongoDB", "contact": "9876500025", "totalfee": "10000" },
  { "firstname": "Gaurav", "lastname": "Pandey", "course": "Web Designing", "contact": "9876500026", "totalfee": "12000" },
  { "firstname": "Isha", "lastname": "Kohli", "course": "React JS", "contact": "9876500027", "totalfee": "15000" },
  { "firstname": "Naveen", "lastname": "Arora", "course": "NodeJS", "contact": "9876500028", "totalfee": "14000" },
  { "firstname": "Payal", "lastname": "Saxena", "course": "Full Stack", "contact": "9876500029", "totalfee": "25000" },
  { "firstname": "Varun", "lastname": "Malhotra", "course": "MongoDB", "contact": "9876500030", "totalfee": "10000" },

  { "firstname": "Ritika", "lastname": "Bajaj", "course": "Web Designing", "contact": "9876500031", "totalfee": "12000" },
  { "firstname": "Abhishek", "lastname": "Dubey", "course": "React JS", "contact": "9876500032", "totalfee": "15000" },
  { "firstname": "Kavita", "lastname": "Tripathi", "course": "NodeJS", "contact": "9876500033", "totalfee": "14000" },
  { "firstname": "Yogesh", "lastname": "Prajapati", "course": "Full Stack", "contact": "9876500034", "totalfee": "25000" },
  { "firstname": "Seema", "lastname": "Chauhan", "course": "MongoDB", "contact": "9876500035", "totalfee": "10000" },

  { "firstname": "Mohit", "lastname": "Soni", "course": "Web Designing", "contact": "9876500036", "totalfee": "12000" },
  { "firstname": "Pankaj", "lastname": "Solanki", "course": "React JS", "contact": "9876500037", "totalfee": "15000" },
  { "firstname": "Nisha", "lastname": "Kumari", "course": "NodeJS", "contact": "9876500038", "totalfee": "14000" },
  { "firstname": "Lokesh", "lastname": "Chandel", "course": "Full Stack", "contact": "9876500039", "totalfee": "25000" },
  { "firstname": "Aarti", "lastname": "Thakur", "course": "MongoDB", "contact": "9876500040", "totalfee": "10000" },

  { "firstname": "Suresh", "lastname": "Purohit", "course": "Web Designing", "contact": "9876500041", "totalfee": "12000" },
  { "firstname": "Kriti", "lastname": "Rastogi", "course": "React JS", "contact": "9876500042", "totalfee": "15000" },
  { "firstname": "Hemant", "lastname": "Goyal", "course": "NodeJS", "contact": "9876500043", "totalfee": "14000" },
  { "firstname": "Shivani", "lastname": "Chawla", "course": "Full Stack", "contact": "9876500044", "totalfee": "25000" },
  { "firstname": "Ramesh", "lastname": "Lodha", "course": "MongoDB", "contact": "9876500045", "totalfee": "10000" },

  { "firstname": "Alok", "lastname": "Khandelwal", "course": "Web Designing", "contact": "9876500046", "totalfee": "12000" },
  { "firstname": "Preeti", "lastname": "Maheshwari", "course": "React JS", "contact": "9876500047", "totalfee": "15000" },
  { "firstname": "Dinesh", "lastname": "Jangid", "course": "NodeJS", "contact": "9876500048", "totalfee": "14000" },
  { "firstname": "Bhavna", "lastname": "Ojha", "course": "Full Stack", "contact": "9876500049", "totalfee": "25000" },
  { "firstname": "Kishan", "lastname": "Bairwa", "course": "MongoDB", "contact": "9876500050", "totalfee": "10000" },

  { "firstname": "Rohini", "lastname": "Pareek", "course": "Web Designing", "contact": "9876500051", "totalfee": "12000" },
  { "firstname": "Tejas", "lastname": "Bhatt", "course": "React JS", "contact": "9876500052", "totalfee": "15000" },
  { "firstname": "Vandana", "lastname": "Shukla", "course": "NodeJS", "contact": "9876500053", "totalfee": "14000" },
  { "firstname": "Kapil", "lastname": "Bhardwaj", "course": "Full Stack", "contact": "9876500054", "totalfee": "25000" },
  { "firstname": "Jaya", "lastname": "Pathak", "course": "MongoDB", "contact": "9876500055", "totalfee": "10000" },

  { "firstname": "Harish", "lastname": "Tanwar", "course": "Web Designing", "contact": "9876500056", "totalfee": "12000" },
  { "firstname": "Monika", "lastname": "Bisht", "course": "React JS", "contact": "9876500057", "totalfee": "15000" },
  { "firstname": "Rajat", "lastname": "Aggarwal", "course": "NodeJS", "contact": "9876500058", "totalfee": "14000" },
  { "firstname": "Swati", "lastname": "Srivastava", "course": "Full Stack", "contact": "9876500059", "totalfee": "25000" },
  { "firstname": "Naresh", "lastname": "Khatik", "course": "MongoDB", "contact": "9876500060", "totalfee": "10000" },

  { "firstname": "Umesh", "lastname": "Rawat", "course": "Web Designing", "contact": "9876500061", "totalfee": "12000" },
  { "firstname": "Shreya", "lastname": "Seth", "course": "React JS", "contact": "9876500062", "totalfee": "15000" },
  { "firstname": "Mahesh", "lastname": "Vyas", "course": "NodeJS", "contact": "9876500063", "totalfee": "14000" },
  { "firstname": "Tanya", "lastname": "Arora", "course": "Full Stack", "contact": "9876500064", "totalfee": "25000" },
  { "firstname": "Rakesh", "lastname": "Kumar", "course": "MongoDB", "contact": "9876500065", "totalfee": "10000" },

  { "firstname": "Sonal", "lastname": "Garg", "course": "Web Designing", "contact": "9876500066", "totalfee": "12000" },
  { "firstname": "Dev", "lastname": "Joshi", "course": "React JS", "contact": "9876500067", "totalfee": "15000" },
  { "firstname": "Asha", "lastname": "Rana", "course": "NodeJS", "contact": "9876500068", "totalfee": "14000" },
  { "firstname": "Piyush", "lastname": "Khatri", "course": "Full Stack", "contact": "9876500069", "totalfee": "25000" },
  { "firstname": "Geeta", "lastname": "Mishra", "course": "MongoDB", "contact": "9876500070", "totalfee": "10000" },

  { "firstname": "Chirag", "lastname": "Bansal", "course": "Web Designing", "contact": "9876500071", "totalfee": "12000" },
  { "firstname": "Renu", "lastname": "Sahu", "course": "React JS", "contact": "9876500072", "totalfee": "15000" },
  { "firstname": "Anurag", "lastname": "Pandit", "course": "NodeJS", "contact": "9876500073", "totalfee": "14000" },
  { "firstname": "Megha", "lastname": "Goswami", "course": "Full Stack", "contact": "9876500074", "totalfee": "25000" },
  { "firstname": "Suraj", "lastname": "Paliwal", "course": "MongoDB", "contact": "9876500075", "totalfee": "10000" },

  { "firstname": "Kunal", "lastname": "Saini", "course": "Web Designing", "contact": "9876500076", "totalfee": "12000" },
  { "firstname": "Rashmi", "lastname": "Yogi", "course": "React JS", "contact": "9876500077", "totalfee": "15000" },
  { "firstname": "Deepika", "lastname": "Sen", "course": "NodeJS", "contact": "9876500078", "totalfee": "14000" },
  { "firstname": "Ashok", "lastname": "Jat", "course": "Full Stack", "contact": "9876500079", "totalfee": "25000" },
  { "firstname": "Vinod", "lastname": "Mehta", "course": "MongoDB", "contact": "9876500080", "totalfee": "10000" },

  { "firstname": "Lalit", "lastname": "Saxena", "course": "Web Designing", "contact": "9876500081", "totalfee": "12000" },
  { "firstname": "Jyoti", "lastname": "Kumawat", "course": "React JS", "contact": "9876500082", "totalfee": "15000" },
  { "firstname": "Anil", "lastname": "Dangi", "course": "NodeJS", "contact": "9876500083", "totalfee": "14000" },
  { "firstname": "Sejal", "lastname": "Rathi", "course": "Full Stack", "contact": "9876500084", "totalfee": "25000" },
  { "firstname": "Mukesh", "lastname": "Bhardwaj", "course": "MongoDB", "contact": "9876500085", "totalfee": "10000" },

  { "firstname": "Ritu", "lastname": "Chhabra", "course": "Web Designing", "contact": "9876500086", "totalfee": "12000" },
  { "firstname": "Parveen", "lastname": "Kaur", "course": "React JS", "contact": "9876500087", "totalfee": "15000" },
  { "firstname": "Jagdish", "lastname": "Verma", "course": "NodeJS", "contact": "9876500088", "totalfee": "14000" },
  { "firstname": "Nandini", "lastname": "Rao", "course": "Full Stack", "contact": "9876500089", "totalfee": "25000" },
  { "firstname": "Omprakash", "lastname": "Sharma", "course": "MongoDB", "contact": "9876500090", "totalfee": "10000" },

  { "firstname": "Gopal", "lastname": "Singh", "course": "Web Designing", "contact": "9876500091", "totalfee": "12000" },
  { "firstname": "Mansi", "lastname": "Gupta", "course": "React JS", "contact": "9876500092", "totalfee": "15000" },
  { "firstname": "Ravindra", "lastname": "Yadav", "course": "NodeJS", "contact": "9876500093", "totalfee": "14000" },
  { "firstname": "Pallavi", "lastname": "Jain", "course": "Full Stack", "contact": "9876500094", "totalfee": "25000" },
  { "firstname": "Sachin", "lastname": "Choudhary", "course": "MongoDB", "contact": "9876500095", "totalfee": "10000" },
  { "firstname": "Dolly", "lastname": "Agarwal", "course": "Web Designing", "contact": "9876500096", "totalfee": "12000" },
  { "firstname": "Nitin", "lastname": "Rajput", "course": "React JS", "contact": "9876500097", "totalfee": "15000" },
  { "firstname": "Kusum", "lastname": "Bansal", "course": "NodeJS", "contact": "9876500098", "totalfee": "14000" },
  { "firstname": "Yash", "lastname": "Tiwari", "course": "Full Stack", "contact": "9876500099", "totalfee": "25000" },
  { "firstname": "Ramesh", "lastname": "Mittal", "course": "MongoDB", "contact": "9876500100", "totalfee": "10000" }
]



let mytable=document.getElementById("studentstable")
students.map((item)=>{
    
   let tablerow= document.createElement("tr")

   let firstname= document.createElement("td")
    firstname.innerHTML=item.firstname

   let lastname= document.createElement("td")
    lastname.innerHTML=item.lastname


    let course= document.createElement("td")
    course.innerHTML=item.course

     let contact= document.createElement("td")
    contact.innerHTML=item.contact

     let fee= document.createElement("td")
    fee.innerHTML=item.totalfee



   mytable.appendChild(tablerow)
   tablerow.appendChild(firstname)
   tablerow.appendChild(lastname)
   tablerow.appendChild(course)
   tablerow.appendChild(contact)
   tablerow.appendChild(fee)
})




// create a json of products : id, name , image , price , des  : 100 
// map / lising   : box 