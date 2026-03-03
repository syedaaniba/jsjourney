const number = 1;
const myPromise = new Promise((resolve,reject) => {
    if (number % 2 == 0) {
        resolve("Number is even yayayy")
    } else {
        reject("Number is odd ughh")
    }
})
myPromise
.then((result)=> console.log(result))
.catch((error)=> console.log(error))


//Read the countries API using fetch and print the name of country,
// capital, languages, population and area.

// This will return only the 10 first countries (works reliably in Node.js)
const countriesAPI = 'https://restcountries.com/v2/all?fields=name,capital,languages,population,area';
fetch(countriesAPI) 
.then(response=> response.json())
.then(data=> {
    data.forEach(country => {
        console.log(country.name)
        console.log(country.capital)
        console.log(country.languages)
        console.log(country.population)
        console.log(country.area)  
    });
})
.catch(error => console.log(error))

//Exercises: Level 2
//Print out all the cat names in to catNames variable.
const catsAPI =  'https://meowfacts.herokuapp.com/?count=5'
fetch(catsAPI) 
.then(response => response.json())
.then(data=> {
    data.data.forEach(fact => console.log(fact))
})
.catch(error => console.log(error))

