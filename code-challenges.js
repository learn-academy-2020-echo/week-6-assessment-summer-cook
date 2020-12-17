// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

sentenceReturner = (arrayOfObjects) => {
  //map over the array of objects and take in the items of the array and their indices
  arrayOfObjects.map((arrayItem, index) => {
    //set a variable for the key in the array of objects that we need to access (name)
  let eachObject = arrayOfObjects[index]
  let nameOfPerson = eachObject.name
  //split the person's name which is a string into 2 strings, the first and last name. It will be split at the space
  let firstAndLastNames = nameOfPerson.split(" ")
  //take in the array that is created when those strings are split, map over it, and uppercase the first letter for each item in the array. set it equal to a variable
  let uppercasedNames = firstAndLastNames.map(value => { 
      return value.charAt(0).toUpperCase() + value.slice(1) })
  // join the items of these arrays of the first and last names into single strings and return this for the mapped function
  let arrayOfNames = uppercasedNames.join(" ")
//arrayOfNames returns an array with each capitalized name. this next line adds a key to the original object with the capitalized name.
//eachObject is now an array of objects 
    eachObject.capitalizedName = arrayOfNames
    return arrayOfObjects
  })
  let finalSentences = arrayOfObjects.map(objectInArray => {
    return `${objectInArray.capitalizedName} is a ${objectInArray.occupation}.`})
  // return `${eachObject.capitalizedName} is a ${eachObject.occupation}.`
  // console.log(arrayOfObjects.occupation)
  // return `${} is a ${arrayOfObjects.occupation}.`
  return finalSentences
}

console.log(sentenceReturner(people))


//refactor to not use the index potentially. 

sentenceReturner2 = (arrayOfObjects) => {
  //map over the array of objects and take in the items of the array and their indices
  arrayOfObjects.map((arrayItem) => {
    //set a variable for the key in the array of objects that we need to access (name)
  let nameOfPerson = arrayItem.name
  //split the person's name which is a string into 2 strings, the first and last name. It will be split at the space and return an array with the first and last name at index 0 & 1 respectively.
  let firstAndLastNames = nameOfPerson.split(" ")
  //take in the array that is created when those strings are split, map over it, and uppercase the first letter for each item in the array. set it equal to a variable
  let uppercasedNames = firstAndLastNames.map(value => { 
      return value.charAt(0).toUpperCase() + value.slice(1) })
  // join the items of these arrays of the first and last names into single strings and return this for the mapped function
  let arrayOfNames = uppercasedNames.join(" ")
//arrayOfNames returns an array with each capitalized name. this next line adds a key to the original object called capitalized name with the arrayOfNames as its values.
    arrayItem.capitalizedName = arrayOfNames
    //return the updated arrayOfObjects that includes the capitalized names.
    return arrayOfObjects
  })
  //this will map over the arrayOfObjects to access each object in the array. then we can use the keys & values within those objects to return the final sentences.
  let finalSentences = arrayOfObjects.map(objectInArray => {
    return `${objectInArray.capitalizedName} is a ${objectInArray.occupation}.`})
  return finalSentences
}

console.log(sentenceReturner2(people))




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//not sure why this doesn't work.. it just returns an array with only 23
remainderReturn = (array) => {
  return array.filter(value => {
    if (typeof value === "number"){
      return value %3
    }
  }) 
}

console.log(remainderReturn(testingArray1))

//returns the values that are numbers
remainderReturn2 = (array) => {
  let numbersArray =  array.filter(value => 
    typeof value === "number" || value === 0)
    return numbersArray.map(value => value % 3)
    }
  

console.log(remainderReturn2(testingArray1))
console.log(remainderReturn2(testingArray2))

// const remainderReturn3 = (array) => {
//   let numbersArray = array.filter((value) => {
//     typeof value === "number" || value === 0
//   })
//   return numbersArray
//   let finalArray = numbersArray.map(value => value % 3)
//   return finalArray

// }

// console.log(remainderReturn3(testingArray1))





// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

//when I tried it out the first time, I kept getting an array with only one value = 1. The only unique value in the group 

// arrayCombiner = (arr1, arr2) => {
//     //this combines all the values into arr1
//   arr1.push(...arr2)
//   //sets an empty array to push the non
//   let arr3 = []
//   arr1.map((value, index) => {
//     if (arr1.indexOf(value) === index){
//       arr3.push(value)
//     }
//   })
// }
// //   return arr3.push(
// //     arr1.filter((value, i) => arr1.indexOf(value) === i)
// //   )
// // }
// console.log(arrayCombiner(testingArray3, testingArray4))

arrayCombiner2 = (arr1, arr2) => {
  //this combines all the values into arr1
arr1.push(...arr2)
//filters and returns the new array. takes in the value and index and then filters out the values if they occur in the array more than once. it will check if the value occurs at more than one index
  return arr1.filter((value, i) => arr1.indexOf(value) === i)
}

console.log(arrayCombiner2(testingArray3, testingArray4))