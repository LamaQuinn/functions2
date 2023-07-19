////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

// CODE HERE
let multiply =(number1,number2,callback)=>{
  let getValue=number1*number2
  callback(getValue)
}
//values=getValue
let getResult=(values)=>console.log(`The result is: ${values}`)

 multiply(4,6,getResult)


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// multiply(4, 3, answer => {
//   console.log('The answer is ' + answer) //should console.log 12
// })



////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// CODE HERE 
let first = (arr,callback)=>{
    let firstElement=arr[0]
    callback(firstElement)
}
let getFirstElement=(element)=>console.log(`The first element of an array is: ${element}`)
first(names,getFirstElement)
// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// first(names, firstName => {
//   console.log('The first name in names is ' + firstName)
// })



////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

// CODE HERE
let last = (arr,callback)=>{

let lastElement=arr[6]
    callback(lastElement)
}
let getLastElement=(element)=>console.log(`The first element of an array is: ${element}`)

last(names,getLastElement)

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

last(names, lastName => {
  console.log('The last name in names is ' + lastName)
})



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

// CODE HERE 
let  contains =(arr,name1,callback)=>{
  // arr.forEach((name2)=>{
   let x=arr.includes(name1)
   callback (x)
  // })
 
  }
//res = x
let result=(res)=>{
  if (res){
    console.log(true)
  }else{
    console.log(false)
  }
}
contains(names,'Laman',result)
// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

contains(names, 'Colt', result => {
  if(result === true){
    console.log('Colt is in the array')
  } else {
    console.log('Colt is not in the array')
  }
})



////////// PROBLEM 5 //////////
// ???????
/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE
// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
let uniq = (arr,callback)=>{
        let modifiedArray=[]
        for (let i =0; i<arr.length;i++){
             let isDup=false
          for(let l=0;l<modifiedArray.length;l++){
            if(arr[i]===modifiedArray[l]){
              isDup=true
           }
         }
          if(!isDup){
            modifiedArray.push(arr[i])
            //console.log(modifiedArray)
          }
        }
        callback(modifiedArray)
       
}
/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// CODE HERE
//uniqArr=modifiedArray
let getAnswer = (uniqArr)=>console.log(`The new names array with all the duplicate items removed is ${uniqArr}.`)
uniq(names,getAnswer)

////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

// CODE HERE 
let each = (name3,callback) =>{
  for (let i=0;i<name3.length;i++){
    var newValue=name3[i]
    callback(newValue,i)
  }
}
//element=newValue,index=i
let getRes=(element,index)=>console.log(`Name at index ${index} is ${element}`)

/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two parameters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

// CODE HERE

each(names,getRes)



////////// CHALLENGES //////////


////////// CHALLENGE 1 //////////


/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE
let  addingFactory = (firstParameter)=>(secondParameter)=>{
  let sum=firstParameter+secondParameter
  console.log(`The sum of two parameters: ${sum}`)
}
/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE
let addTen = addingFactory(4)
addTen(10)
/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE
let addTen2 = addingFactory(6)
addTen2(7)
/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

// CODE HERE




////////// CHALLENGE 2 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
  You'll learn about objects in our next lecture. But you can research objects and attempt this problem.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

// CODE HERE 

let getUserById = (users,id,callback)=>{
  for(let i=0;i<users.length;i++ ){
    if(users[i].id==id){
      callback(users[i])
      return
    }
  }
  callback(null)
}
//user5=if(users[i].id==id)
let user=(user5)=>{
  if(user5){
   console.log(`The user with the id 16t has the email of ' + ${user5.email} +  the name of  + ${user5.name} +  and the address of  + ${user5.address}`)
  }else{
    console.log(`User not found.`)
  }
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// getUserById(users, '16t', user => {
//   console.log(`The user with the id 16t has the email of ' + ${user.email} +  the name of  + ${user.name} +  and the address of  + ${user.address}`) 
// })
getUserById(users,'16t',user)