// Exercises: Level 1
// 1. Store your first name, last name, age, country, city in your browser localStorage
localStorage.setItem("firstName" , "Aniba")
localStorage.setItem("lastname" , "Syeda")
localStorage.setItem("age" ,21)
localStorage.setItem("country" , "Pakistan")
localStorage.setItem("city" , "Karachi")
// Exercises: Level 2
// 2. Create a student object. The student object will have firstName, lastName, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage 
let student = {firstName:"Bisma" , lastName: "Naskani", age:21, skills:["html","css"] , country:"Pakistan"}
localStorage.setItem("student" , JSON.stringify(student))