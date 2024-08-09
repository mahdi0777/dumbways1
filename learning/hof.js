const numbers = [1,2,3,4,5]

// for (let a = 0; x < numbers.length; a++) {
    // console.log (numbers [a]) //looping
// }

// numbers.forEach (function (number, index){
//     console.log (`number ke ${index}, punya nilai ${number}`);
// });

// numbers.map ( (number, index)) => {
//     console.log (`index ke index ${index}, index punya nilai ${number}`)
// }

 const oddNumbers = numbers.filter ((number, index)=>{
     return number %2 == 0
})

console.log(oddNumbers)

