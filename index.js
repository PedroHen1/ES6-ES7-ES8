//TEMPLATE LITERALS
let word1 = 'Pedro'
let word2 = 'Henrique'
let num1 = 2
let num2 = 3

const fullName = `${num1 + num2} ${word1} ${word2}`
//console.log(fullName) 

//DESTRUCTURING OBJECTS
const personalInformation = {
    firstName: "Pedro",
    lastName: "Henrique",
    city: "Belo Horizonte",
    state: "Minas Gerais",
    zipCode: "35960000"
};
const {firstName: fn, lastName: ln} = personalInformation
//console.log(`${fn} ${ln}`)

//DESTRUCTURING ARRAYS 
let [firstName, middleName, lastName]= ['Pedro', 'Belo Horizonte', 'Minas'];

//console.log(lastName)

//---OBJECT LITERALS 
function addressMaker(city, state) {
    const newAddress = {city, state}

    //console.log(newAddress)
}

addressMaker('Belo Horizonte', 'Minas Gerais')

//CHALLENGE1
function addressMaker2(address) {
    const {city, state} = address

    const secondAddress = {
        country: "Brazil"
    }
    //console.log(`${city}, ${state}, ${secondAddress.country}`)
}

addressMaker2({city: "BH", state: "MG"})

//FOR OF LOOP
let incomes = [62000, 67000, 75000]
let total = 0
for (const soma of incomes) {
    total += soma
}

//console.log(total)

//CHALLENGE2
let incomes2 = [62000, 67000, 75000]

let newNumber = [50000]

for (let income of incomes2) {
    newNumber += incomes2
}
//console.log(newNumber)

//SPREAD OPERATOR
let example1 = [1,2,3,4,5,6]
let example2 = [...example1]
//console.log(example2)

//REST OPERATOR
function add(...nums) {
    //console.log(nums);
}
add(4, 5, 6, 7, 12)

//ARROW FUNCTIONS
const calcSoma = (num1, num2) => num1 + num2;
//console.log(`a soma deu ${calcSoma(2,3)}`)

const greet = name => `Hello ${name}`;
//console.log(greet('Pedro'))

//INCLUDES
let numArray = [1,2,3,4,5];
//console.log(numArray.includes(0))//return false
