// tasks
// Create an empty object called dog
let dog = {}

// Print the the dog object on the console
console.log(dog)

// Add name, legs, color, age and bark properties for the dog object. 
// The bark property is a method which return woof woof
dog.name = "Bruno"
dog.legs = 4
dog.color = "Brown"
dog.age = 8
dog.bark = function() {
    return `Woof woof`
}

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.color)
console.log(dog.legs)
console.log(dog.age)
console.log(dog.bark())

// Set new properties the dog object: breed, getDogInfo
dog.breed = function() {
    return `Some breed ig`
}

dog.getDogInfo = function () {
    return `Dog name: ${dog.name} Dog used to bark like this: ${dog.bark()}`
}

// self practice
const student = {
  name: "Ali",
  age: 20,
  city: "Karachi"
}

// Task 1
// Print:
// name
// age
// city

console.log(student.name)
console.log(student.age)
console.log(student.city)

// Task 2
// Add a new property:
// university: "KU"
// Then print the whole object

student["university"] = "KU"
student.off = "hehe"
console.log(student)


// Task 3
// Change the city to "Lahore"
student["city"] = "Lahore"
console.log(student)

// Task 4
// Delete the age property
delete student.age;

// Task 5
// Print all keys of the object using Object.keys()
console.log(Object.keys(student))

const person = {
  name: "Sara",
  age: 22,
  country: "Pakistan"
}

// Task 6
// Use a loop to print:
// name Sara
// age 22
// country Pakistan

for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}


const scores = {
  math: 80,
  english: 70,
  science: 90
}

// Task 7
// Find the total score using a loop
// Expected result: 240
let result = 0;
for (let key in scores) {
    result +=scores[key]
}
console.log(result)

// Task 8
// Print only subjects with score > 75
// Expected output:
// math
// science

for (let key in scores) {
    if (scores[key] > 75) {
    console.log(key)
    }
}


const usersPoints = {
  user1: { points: 30 },
  user2: { points: 60 },
  user3: { points: 55 }
}

// Task 9
// Count users with points >= 50
// Expected result: 2
let count = 0;
for (let key in usersPoints) {
  if (usersPoints[key].points >= 50) {
    count++
  }
}
console.log(count)



const usersLogin = {
  user1: { isLoggedIn: true },
  user2: { isLoggedIn: false },
  user3: { isLoggedIn: true }
}

// Task 10
// Count how many users are logged in
// Expected result: 2
let countLoggedin = 0;
for (let user in usersLogin) {
  if (usersLogin[user].isLoggedIn) {
    countLoggedin++;
  }
} 
console.log(countLoggedin)


// task 2 moderate
 const users = {
   Alex: {
     email: "alex@alex.com",
     skills: ["HTML", "CSS", "JavaScript"],
     age: 20,
     isLoggedIn: false,
     points: 30
   },
   Asab: {
     email: "asab@asab.com",
     skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
     age: 25,
     isLoggedIn: false,
     points: 50
   },
   Brook: {
     email: "daniel@daniel.com",
     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
     age: 30,
     isLoggedIn: true,
     points: 50
   },
   Daniel: {
     email: "daniel@alex.com",
     skills: ["HTML", "CSS", "JavaScript", "Python"],
     age: 20,
     isLoggedIn: false,
     points: 40
   },
   John: {
     email: "john@john.com",
     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
     age: 20,
     isLoggedIn: true,
     points: 50
   },
   Thomas: {
     email: "thomas@thomas.com",
     skills: ["HTML", "CSS", "JavaScript", "React"],
     age: 20,
     isLoggedIn: false,
     points: 40
   },
   Paul: {
     email: "paul@paul.com",
     skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
     age: 20,
     isLoggedIn: false,
     points: 40
   }
 }

// Find the person who has many skills in the users object.
console.log("user with many skills")
for (let user in users) {
  if (users[user].skills.length >=2) {
    console.log(user)
  }
}

// Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedinuser = 0;
for (let user in users) {
  if (users[user].points >= 50) {
    loggedinuser++;
  }
}
console.log("Users logged in: " , loggedinuser)

// Find people who are MERN stack developer from the users object
console.log("Mern developer found")
for (let user in users) {
  if (users[user].skills.includes('React') &&
    users[user].skills.includes('MongoDB') && 
    users[user].skills.includes('Express') &&
    users[user].skills.includes('Node.js')) {
      console.log(user)
    }
}


// Set your name in the users object without modifying the original users object
let obj = { Aniba: {}, ...users }

// Get all keys or properties of users object
console.log(Object.keys(users))


// Get all the values of users object
console.log(Object.values(users))

const countries = {
  Finland: {
    capital: "Helsinki",
    population: 5536146,
    languages: ["Finnish", "Swedish"]
  },
  Germany: {
    capital: "Berlin",
    population: 83240525,
    languages: ["German"]
  },
  Nigeria: {
    capital: "Abuja",
    population: 206139589,
    languages: ["English"]
  },
  Japan: {
    capital: "Tokyo",
    population: 125836021,
    languages: ["Japanese"]
  },
  Brazil: {
    capital: "Brasília",
    population: 212559417,
    languages: ["Portuguese"]
  }
}

// Use the countries object to print a country name, capital, populations and languages. 
for (let coun in countries) {
  console.table(`${coun}`)
  for (let info in countries[coun]){
    console.log(`${countries[coun][info]}`)
  }
}

// task 3 

// Create an object literal called personAccount
// It has firstName, lastName, incomes, expenses properties
// It has the following methods:
// - totalIncome
// - totalExpense
// - accountInfo
// - addIncome
// - addExpense
// - accountBalance
// Incomes is a set of incomes and its description
// Expenses is a set of expenses and its description

const personAcc = {
  firstName: "Syeda",
  lastName: "Aniba",
  incomes: [{income:4500 , description:'job' }],
  expenses: [{expense:4500 , description: 'treatment'}],
  totalIncome: function () {
    let totalInc =0;
    for (let i in this.incomes) {
        totalInc += this.incomes[i].income
    }
    return totalInc
  },
  totalExpense: function () {
    let totalExp = 0;
    for (let i in this.expenses) {
      totalExp += this.expenses[i].expense
    }
    return totalExp
  },
  accInfo : function () {
    return `Name: ${this.firstName} ${this.lastName}
            totalIncome: ${this.totalIncome()}
            totalExpense: ${this.totalExpense()}`
  } ,
  addIncome: function ({income , description}) {
    this.incomes.push({income: income,description: description})
  },
  addExpense: function ({expense, description}) {
    this.expenses.push({expense: expense , description:description})
  },
  accBalance: function () {
    return this.totalExpense - this.totalIncome
  }
}
console.log(personAcc.accInfo())
personAcc.addExpense({expense: 65000, description: "job"})
console.log(personAcc.accInfo())

 const myusers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];



// add a new user to object 
function signUp (newUser) {
  let exist = myusers.find((user) => user.username === newUser.username) 
  if (exist) {
    return `User already exists`
  } else {
    myusers.push(newUser)
  }
}
console.log(signUp({username: "Aniba"}))
console.log(signUp({username: "Thomas"}))
console.table(myusers)


function signIn ( Idbyuser , Passbyuser) {
  let idExist = myusers.find(
    (user)=> user._id === Idbyuser._id && 
   user.password === Passbyuser.password )

  if (idExist) {
    return `Successfully login`
  } else {
    return `Account doesnt exist sign up`
  }
}
console.log(signIn({_id: 'ghderc' }, {password:'123333'}))
console.log(signIn({_id: 'abcdef' }, {password:'mdsdsd'}))


    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
