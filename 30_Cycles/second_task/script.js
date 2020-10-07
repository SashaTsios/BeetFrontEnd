//Find the Index (Part 1)
console.log('Find the Index (Part 1) ⬇')
function search(arr, num){
    if (arr.includes(num)){
        for (let i = 0; i < arr.length; i++){
            if (arr[i] == num) {
                console.log(`${num} has index ${i}`)
                return (`${num} has index ${i}`)
            }
        }
    } else {
        console.log(`${num} not in ${arr}`)
        return (`${num} not in ${arr}`)
    }
}
search([1, 5, 3], 5)// ➞ 1
search([9, 8, 3], 3)// ➞ 2
search([1, 2, 3], 4)// ➞ -1


//Sum of the Odd Numbers
console.log('Sum of the Odd Numbers ⬇')
function addOddToN(num){
    let total = 0;
    for (let i = 1; i <= num; i+=2){
        total += i;
    }
    console.log(total)
    return (total)
}
addOddToN(5)// ➞ 9    1 + 3 + 5 = 9
addOddToN(13)// ➞ 49
addOddToN(47)// ➞ 576


//Convert Number to String of Dashes
console.log('Convert Number to String of Dashes ⬇')
function Go(num){
    // let a = '-'.repeat(num);
    // console.log(typeof a)
    console.log('-'.repeat(num))
    return ('-'.repeat(num))
}
Go(1)// ➞ "-"
Go(5)// ➞ "-----"
Go(3)// ➞ "---"


//Generate a Countdown of Numbers in an Array
console.log('Generate a Countdown of Numbers in an Array ⬇')
function countdown(num){
    let newArr = [];
    for (let i = num; i >= 0; i--){
        newArr.push(i);
    }
    console.log(newArr)
    return newArr
}
countdown(5)// ➞ [5, 4, 3, 2, 1, 0]
countdown(1)// ➞ [1, 0]
countdown(0)// ➞ [0]


//Multiply by Length
console.log('Multiply by Length ⬇')
function multiplyByLength(arr){
    let len = arr.length;
    for (let i = 0; i < len; i++){
        arr[i] = arr[i]*len;
    }
    console.log(arr)
    return arr
}
multiplyByLength([2, 3, 1, 0])// ➞ [8, 12, 4, 0]
multiplyByLength([4, 1, 1])// ➞ ([12, 3, 3])
multiplyByLength([1, 0, 3, 3, 7, 2, 1])// ➞  [7, 0, 21, 21, 49, 14, 7]
multiplyByLength([0])// ➞ ([0])