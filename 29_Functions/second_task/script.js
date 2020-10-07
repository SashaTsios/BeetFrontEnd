// The Farm Problem
function animals(chickens, cows, pigs) {
    return (chickens*2 + cows*4 + pigs*4);
}
console.log('animals ⬇')
let a = animals(2, 3, 5)
console.log(a)
let b = animals(1, 2, 3)
console.log(b)
let c = animals(5, 2, 8)
console.log(c)

//Football Points
function footballPoints(wins, draws, losses) {
    return (wins*3 + draws*1);
}
console.log('footballPoints ⬇')
let team1 = footballPoints(3, 4, 2)
console.log(team1)
let team2 = footballPoints(5, 0, 2)
console.log(team2)
let team3 = footballPoints(0, 0, 1)
console.log(team3)

//Is the String Odd or Even?
function oddOrEven(word){
    return (word.length % 2 == 0) ? true : false;
}
console.log('oddOrEven ⬇')
let word1 = oddOrEven("apples")
console.log(word1)
let word2 = oddOrEven("pears")
console.log(word2)
let word3 = oddOrEven("cherry")
console.log(word3)

//Check if an Integer is Divisible By Five
function divisibleByFive(num){
    return (num%5 == 0) ? true : false;
}
console.log('divisibleByFive ⬇')
let num1 = divisibleByFive(5)
console.log(num1)
let num2 = divisibleByFive(-55)
console.log(num2)
let num3 = divisibleByFive(37)
console.log(num3)

//Minimal VI: Ternary Operator
function ternary(a, b){
    // return ((typeof a == "boolean" && typeof b == "boolean") ? "both" : (typeof a == "boolean" && typeof b != "boolean") ? "first" : (typeof a != "boolean" && typeof b == "boolean") ? "second" : "neither");
    return ((a == true && b == true) ? "both" : ( a == true && b != true) ? "first" : (a != true && b == true) ? "second" : (a == false && b == false) ? "neither" : "other");
}

console.log('Ternary Operator ⬇')
let ternary1 = ternary(true, true)
console.log(ternary1)
let ternary2 = ternary(true, false)
console.log(ternary2)
let ternary3 = ternary(false, true)
console.log(ternary3)
let ternary4 = ternary(false, false)
console.log(ternary4)
