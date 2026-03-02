// Exercises Level 1

// 1. Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const skillsJson = JSON.stringify(skills)
console.log(skillsJson)


// 2. Stringify the age variable // convert json to obj = json.parse coonvert obt to json json.stringy
let age = 250;
let ageJson = JSON.stringify(age)
console.log(ageJson)

// 3. Stringify the isMarried variable
let isMarried = true;
let isMarriedJson = JSON.stringify(isMarried)
console.log(isMarried)

// 4. Stringify the student object
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
let newObjJSON = JSON.stringify(student)
console.log(newObjJSON)

// Exercises Level 2
// 5. Stringify the students object with only firstName, lastName and skills properties

let filteredJSON = JSON.stringify(student,["firstName","lastName","skills"],4)
console.log(filteredJSON)

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
` 

// Exercises Level 3
// 6. Parse the txt JSON to object.
let txtObj = JSON.parse(txt)
console.log(txtObj)

// 7. Find the user who has many skills from the variable stored in txt.
let userObj = JSON.parse(txt)
for (let user in userObj) {
    if (userObj[user].skills.length >=2) {
        console.log(user)
    }
}