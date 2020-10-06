//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function compare(a, b){
    if (a < b){
        return -1;
    } else if (a > b){
        return 1;
    } else{
        return 0;
    }
}
console.log('compare numbers⬇')
console.log(compare(1, 10))
console.log(compare(11, 10))
console.log(compare(11, 11))

// Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(n){
    return (n == 0 || n == 1) ? 1 : n*factorial(n-1);
}
console.log('factorial⬇')
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function concatinate(a, b, c){
    return (String(a) + String(b) + String(c))
}
console.log('concatinate numbers⬇')
console.log(concatinate(1, 2, 3))
console.log(concatinate(11, 22, 33))

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function square(a, b){
    // if (b === undefined){
    //     return a*a;
    // } else {
    //     return a*b;
    // }
    return ((b === undefined) ? a*a: a*b)
}
console.log('count square⬇')
console.log(square(2, 3))
console.log(square(4, 5))
console.log(square(6))
console.log(square(7))

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function ideal(num){
    let sum = 0;
    let start1 = 1; 
    let end1 = num; 
    if (num < 1){
        // console.log('less than 1, wrong');
    } else if (num == 1){
        // console.log(1);
    } else{
        // console.log(`else for ${num}`)
        for (var i=start1; i < end1; i++) {
            // console.log(`else i ${i}`)
            if (num%i == 0) {
                // console.log(`sum before ${sum}`)
                sum += i;
                // console.log(`sum after ${sum}`)
            }
        }
    }
    // console.log(num, sum)
    // return (num == sum) ? (`for ${num}: ${true}`) : (`for ${num}: ${false}`);
    if (num == sum) {
        console.log(`for ${num}: ${true}`)
    }else {
        console.log(`for ${num}: ${false}`)
    };
    return (num == sum) ? true : false;
    }

console.log('ideal number⬇')
console.log(ideal(1))
console.log(ideal(2))
console.log(ideal(3))
console.log(ideal(4))
console.log(ideal(5))
console.log(ideal(6))
console.log(ideal(28))
console.log(ideal(29))

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
function idealRange(start, end){
    console.log(`range for ${start}, ${end}`)
    for (var j=start; j < end; j++){
        console.log('-------------------')
        // console.log(j)
        // console.log(ideal(j))
        let result = ideal(j)
        // console.log(z)
        // console.log('======================')
        if (result === true) {
            console.log((`${j} is ideal`));
        }
    }
}
console.log('ideal range')
console.log(idealRange(5, 7))
console.log(idealRange(2, 11))
console.log(idealRange(5, 29))

// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function showTime(hours, minutes=0, seconds=0){
    return (`${hours}:${minutes}:${seconds}`)
}
console.log('show time⬇')
console.log(showTime(10))
console.log(showTime(1, 2, 3))
console.log(showTime(1, 2))
console.log(showTime(5, 0, 1))

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function toSeconds(hh, mm, ss){
    return (hh*3600 + mm*60 + ss);
}
console.log('time to seconds⬇')
console.log(toSeconds(1, 1, 1))
console.log(toSeconds(0, 2, 5))
console.log(toSeconds(9, 59, 59))

// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function fromSeconds(seconds){
    let h = Math.floor(seconds/3600);
    let m = Math.floor((seconds - h*3600)/60);
    let s = (seconds - h*3600)%60;
    return (`${h}:${m}:${s}`)
}
console.log('time from seconds⬇')
console.log(fromSeconds(61))
console.log(fromSeconds(3601))
console.log(fromSeconds(35999))

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
//При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
function difference(time1, time2){ // []h1, m1, s1), (h2, m2, s2)
    let seconds1 = toSeconds(time1[0], time1[1], time1[2]);
    console.log(seconds1)
    let seconds2 = toSeconds(time2[0], time2[1], time2[2]);
    let secondsDiff = (seconds1 > seconds2) ? (seconds1 - seconds2) : (seconds2 - seconds1);
    return fromSeconds(secondsDiff)
}
console.log('time difference⬇')
console.log(difference([10, 0, 2], [9, 0, 1]))
console.log(difference([10, 0, 2], [9, 0, 3]))
console.log(difference([1, 59, 59], [2, 0, 3]))