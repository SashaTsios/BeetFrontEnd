//Подсчитать сумму всех чисел в заданном пользователем диапазоне.
function sum(start, end){
    let sum = 0;
    let bigger = end;
    let smaller;
    if (start < end) { // we do not know is the second number bigger (1, 3) or (3, 1)
        bigger = end;
        smaller = start;
    } else{
        bigger = start;
        smaller = end;
    }
    for (let i = smaller; i <= bigger; i++){
        sum += i;
    }
    console.log(sum);
    return sum
}
console.log('sum of range ⬇')
sum(1, 6)
sum(3, 1)
sum(0, 4)


// Запросить 2 числа и найти только наибольший общий делитель.
function divider(first, second) {
    let dividers = []
    for (let i = 1; i <= first; i++){
        if (first%i == 0){
            dividers.unshift(i)
        }
    }
    // console.log(dividers)
    let biggest_div = 0;
    for (let j = 0; j < dividers.length; j++){
        if (second%dividers[j] == 0){
            biggest_div = dividers[j];
            break;
        }
    }
    console.log(`for ${first} and ${second} the biggest divider is: ${biggest_div}`)
    return biggest_div
}
console.log('biggest divider for both numbers ⬇')
divider(5, 10)
divider(4, 6)
divider(8, 24)


// Запросить у пользователя число и вывести все делители этого числа.
function allDividers(num) {
    let dividersList = []
    for (let i = 1; i <= num; i++){
        if (num%i == 0){
            dividersList.push(i)
        }
    }
    console.log(`list of dividers for ${num}: ${dividersList}`)
    return dividersList
}
console.log('shows dividers ⬇')
allDividers(7)
allDividers(8)
allDividers(28)


// Определить количество цифр в введенном числе.
function countDigits(num){
    console.log((`${num} has ${((num.toString()).length)} digits`))
    return (num.toString()).length
}
console.log('count digits ⬇')
countDigits(11)
countDigits(1234)
countDigits(11223344)


// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
function countNums(list_of_numbers){
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < list_of_numbers.length; i++){
        if (list_of_numbers[i] > 0){
            positive += 1;
        } else if (list_of_numbers[i] < 0){
            negative += 1;
        } else {
            zero += 1;
        }
    }
    console.log(`${list_of_numbers} has ${positive} positive, ${negative} negative numbers and ${zero} zeros`)
    return (`${list_of_numbers} has ${positive} positive, ${negative} negative numbers and ${zero} zeros`)
}
console.log('count positive/negative numbers ⬇')
countNums([1,2,3,4,5,0,0,-1,-100,-200])


// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
function slicing(){
    let answer = prompt('число', ).toString()
    let number = prompt('на сколько цифр его сдвинуть', ).toString()
    let new_number = answer.slice(number) + answer.slice(0, number)
    console.log(new_number)
    return new_number
}
console.log('slice numbers ⬇')
slicing()


// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
function nextDay(){
    let days = ['Mo', 'Tuesday', 'We', 'Th', 'Fr', 'Sa', 'Sunday']
    // for (let i=0; i )
    var i = -1;
    do{
        if (i>=6){
            i = -1;
        }
        i += 1;
        console.log(days[i], i);
        // let day  = prompt('to continue press: y or Y', ).toString()
    } while (prompt('to continue press: y or Y', ).toUpperCase() == 'Y');
    
}
console.log('shows next day, asks y to continue ⬇')
nextDay()


// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
function table(){
    for (let i=2; i <=9; i++){
        for (let j=1; j <= 10; j++){
            console.log(`${i} * ${j} = ${i*j}`)
        }
    }
}
console.log('table ⬇')
table()