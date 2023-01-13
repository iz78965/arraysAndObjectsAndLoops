// //objects and arrays


// //first arrays and functions
// // push function

// // fruits = ['apple', 'banana', 'grapes']

// // fruits.push('pear')

// // Slice function

// // console.log(fruits.slice(0,3))
// // console.log(fruits)

// // indexof function

// // console.log(fruits.indexOf('banana'))


// // objects

// // const man = {
// //     name: "ibrahim",
// //     lastName: "zulfiqar",
// //     age: "26"
// // }

// // console.log(man)
// // console.log(man.name)
// // console.log(man.lastName)
// // console.log(man['name'])
// // console.log(man['age'])


// // objects through ES6 arrow functions and also use template literals

// const bioData = (naame, lastNaame, age, age2) => {

//    const mySelf = {
//     naame : "hello" ,
//     latNaame : "boy"
//     age : 24

//    }

//    const secondData = {
//     age : "23", 
//     age2 : "25"
//    }

//    const intro = `hello may name is ${naame} and ${lastNaame}. and age is ${age} now is ${age2}`

//    return intro;

// }

// console.log(bioData("ibrahim", "zulfiqar", "45", "56"))



// loops 

// const fruits = ['apple', 'banana', 'grapes']

// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
    
//     console.log(fruit)
// }

// const number = [1,2,3,4,5,6]

// for (let i=0; i<number.length; i++){
//     // console.log(number[i])
//     const numbers = number[i]
//     console.log(numbers)
// }

// es6 for loop 
// Comsole log numbers of array number

// for (const numbers of number) {
//     console.log(numbers)
// }
// 

// get the double of numbers of array of number 
// let result = []
// for ( let i = 0; i < number.length; i++){
//     const a =  number[i] * 2 
//     result.push(number[i]*2)
    
    
//     console.log(a)
// }
// console.log(result)

// let result = []
// for ( const numbers of number) {
//     // console.log (numbers * 2)
//     result.push(numbers * 2)
// }
// console.log(result)


// lets get the doublo of array with loop through function

// const number = [1, 2, 3, 4, 5, 6]
// const double = (numbers) => {
//     let result = []
//     for (const numbers of number){
//         result.push(numbers * 2)
//     }

//     return result
//     // console.log(result)
// }

// console.log(double(1, 2, 3, 4))

// number = [1, 2, 3, 4,5]
// const multiply = (numbers) => {
//     let result = []
//     for (const number of numbers){
//         result.push(number * 2)

//     }

//     return result

// }

// console.log(multiply([3, 4, 5, 6, 7, 7, 8, 8]))


// const letterCounter = (phrase) => {
    
//     let result = 0;
//     for( const letter in phrase){
//         // console.log(Number(letter)+1)
//         result = Number(letter)+1
//     }
//     return {result}
// }

// const phrase = prompt("write a phrase")
// console.log(letterCounter(phrase))

// now by using property

// const letterCounter = (phrase) => {
//      let result = 0;
    
//     return {result: phrase.length}
// }

// const phrase = prompt("write a phrase")
// console.log(letterCounter(phrase))



// sum up all the number of array number 


// const num = [1,3,5,6]
// const sumArray = (numbers) => {
//     let result  = 0;

//     for (const number of numbers ) {
//         result = result + number
//     }

//      return {result}

// }

// console.log(sumArray(num))


// finding the max number in the array

// const num = [1,2,3,4,7,5,6,9]
// const maxNumber = (numbers) => {

//     let result = numbers[0]
//     for (const number of numbers){
//         if(number > result) {

//             result = number
//         }

//     }
//     return {result}


// }

// console.log(maxNumber(num))




// find the frequency of the numbers in the phrase or paragraph
// const countFrequency = (phrase) => {
//     console.log(phrase)
//     let letterFrequency = [];
//     // see what letter exits in array of phrase using for loop 
    
//     for (const letter of phrase) {
//         // it it exists in the frequency then increse its value by one
//         if (letter in letterFrequency ){
//             letterFrequency[letter] += 1
            
//         }
//         // if does not then set it value to one
//         else {
//             letterFrequency[letter] = 1
//         }
//     }

//     return letterFrequency

// }

// console.log(countFrequency("hello how are you doing"))



// word frequency in a phrase 


const wordFrequency = (phrase) => {

    const frequency = []

    for (const words of phrase){
        phrase.split(' ')
        if (words in frequency){
            frequency[words] += 1
        }

        else {
            frequency[words] = 1
        }
    }

    return frequency
    
    

}

console.log(wordFrequency("hello how are doing."))













