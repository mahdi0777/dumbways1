

function bubbleshort(numbers) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < numbers.length - 1; i++) {
            if(numbers[i] > numbers[i+1]) {
                let temp = numbers[i]
                numbers[i] = numbers[i+1]
                numbers[i+1] = temp
                swapped = true
            }
        }
    } while (swapped)
}

const numbers = [20, 12, 35, 11, 17, 9, 58, 23, 69, 21]
bubbleshort(numbers)
console.log(numbers)