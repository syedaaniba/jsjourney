
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
] 
// Explain the difference between forEach, map, filter, and reduce.

// Define a callback function before you use it in forEach, map, filter or reduce.


// Use forEach to console.log each country in the countries array.
countries.forEach(coun => { console.log(coun)
});

// Use forEach to console.log each name in the names array.
names.forEach(names => {
    console.log(names)
});

// Use forEach to console.log each number in the numbers array.
numbers.forEach(num => {
    console.log(num)
});

// Use map to create a new array by changing each country to uppercase in the countries array.
let lower = countries.map((coun) => coun.toLowerCase())
console.log(lower)

// Use map to create an array of countries length from countries array.
let len = countries.map((coun) => coun.length )
console.log(len)

// Use map to create a new array by changing each number to square in the numbers array
let sqr = numbers.map((num) => num * num )
console.log(sqr)

// Use map to change to each name to uppercase in the names array
let upper = names.map((name) => name.toUpperCase())
console.log(upper)

// Use map to map the products array to its corresponding prices.
let productPrice = products.map((pro) => `${pro.product} : ${pro.price}`)
console.log(productPrice)

// Use filter to filter out countries containing land.
let countriesWithLand = countries.filter((coun) => coun.includes('land'));
console.log(countriesWithLand)

// Use filter to filter out countries having six character.
let countriesWith6Char = countries.filter((coun) => coun.length == 6 )
console.log(countriesWith6Char)

// Use filter to filter out countries containing six letters and more in the country array.
let coun = countries.filter((coun) => coun.length >= 6)
console.log(coun)

// Use filter to filter out country start with 'E';
let counWithE = countries.filter((coun) => coun.startsWith('E'))
console.log(counWithE)


// Use filter to filter out only prices with values.
let priceWithValues = products.filter((pro) =>  typeof pro.price  === "number")
console.log(priceWithValues)


// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    let arrWithStr = []
    for (item of arr) {
    if (typeof item === 'string') {
        arrWithStr.push(item)
     }
    }
    return arrWithStr
}
console.log(getStringLists(["Aniba",10,"Asad",1,2,3,4,5]))

// Use reduce to sum all the numbers in the numbers array.
let sum = numbers.reduce((acc,curr) => acc + curr , 0)
console.log(sum)


// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let sentence = countries.reduce((acc, curr, index) => {
    if (index == countries.length - 1) {
        return acc + "and" + curr
    } 
    return acc + ", " + curr
}) + " are northern countried";
console.log(sentence)


// Explain the difference between some and every
// some reyurn true if any even one value match the ocndition 
// every return true only if all th econdtiion matches the value

// Use some to check if some names' length greater than seven in names array

// Use every to check if all the countries contain the word land

// Explain the difference between find and findIndex.
// find fiinds the first matched value 
// findindex finds the first matche value index

// Use find to find the first country containing only six letters in the countries array
let findCoun = countries.find((coun) => coun.length == 6)
console.log(findCoun)

// Use findIndex to find the position of the first country containing only six letters in the countries array
let find = countries.findIndex((coun) => coun.length == 6)
console.log(find)

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let norwayPos = countries.findIndex((coun) => coun.includes('Norway'))
console.log(norwayPos)

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let russiaPos = countries.findIndex((coun) => coun.includes('Russia'))
console.log(russiaPos)

// exercise 2 
// Find the total price of products by chaining two or more array iterators (eg. arr.map(callback).filter(callback).reduce(callback))

let totalPrice = products
                .map((pro) => pro.price)
                .filter((price) => typeof price === "number")
                .reduce((acc,curr) => acc + curr, 0)

               
console.log("total price:" , totalPrice)

// Find the sum of price of products using only reduce (reduce(callback))
let price = products.reduce((acc,curr) => {
    if (typeof curr.price === "number" ) {
       return acc + curr.price
    }
    return acc
}, 0)
console.log(price)


// Declare a function called categorizeCountries which returns an array of countries which have some common pattern (eg 'land', 'ia', 'island', 'stan')
function categorizeCountries () {
    let arr = []
    for (let coun of countries) {
        if (
           (coun.includes("ia"))
        || (coun.includes("stan"))
        || (coun.includes("land"))
        || (coun.includes("island"))
       )
       {
        arr.push(coun)
       }
       return arr
    }}
console.log(categorizeCountries())



// Create a function which returns an array of objects, each containing the letter and the number of times the letter is used to start a country name


// Declare a getFirstTenCountries function and return an array of ten countries using functional programming on the countries.js array
console.log(countries.splice(0,10))

// Declare a getLastTenCountries function which returns the last ten countries in the countries array


// Find out which letter is used most frequently as the initial for a country name from the countries array (eg. Finland, Fiji, France)