// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
let age = Number(prompt('Enter your age:',));
let result
if (age >= 0 && age <= 12){
    result = "Baby";
} else if (age > 12 && age <= 18){
    result = "Teenager";
} else if (age > 18 && age <= 60){
    result = "Adult";
} else{
    result = "Pensioner";
}
alert(`Your age: ${age}.\nYou are: ${result}`)

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
let symbol_number = Number(prompt('Enter number:',));
let symbols = ')!@#$%^&*('
alert(`Your number is: ${symbol_number}.\nSymbol: ${symbols[symbol_number]}`)

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
let three = prompt('Enter 3 digit number:',);  //123
if (three.length == 3 && (three[0] == three[1] || three[1] == three[2] || three[0] == three[2])){
    alert('Duplicates found');
} else{
    alert('Duplicates Not found');
}

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
let year = Number(prompt('Enter year:',));
if ((year % 400 == 0 || year % 4 == 0) && year % 100 != 0) {
    alert(`Year ${year} is a leap year`);
} else {
    alert(`Year ${year} is not a leap year`);
}

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
let palindromic_number = prompt('Enter a 5 digit number:',);
if (palindromic_number[0] == palindromic_number[4] && palindromic_number[1] == palindromic_number[3]) {
    alert(`${palindromic_number} is a palindromic_number`);
} else {
    alert(`${palindromic_number} is not a palindromic_number`);
}
 
// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
let sum_usd = Number(prompt('Enter a sum of USD:',));
let convert_to = prompt('Convert to EUR (Enter E), UAN (Enter U), AZN (Enter A)',);
if (convert_to.toUpperCase()  == 'E') {
    alert(`${sum_usd}$ = ${(sum_usd*1.2)} EUR`);
} else if (convert_to.toUpperCase() == 'U') {
    alert(`${sum_usd}$ = ${(sum_usd*28)} UAH`);
} else if (convert_to.toUpperCase() == 'A') {
    alert(`${sum_usd}$ = ${(sum_usd*1.7)} AZN`);
} 

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
let discount = Number(prompt('Enter a sum:',));
if (0 <= discount && discount < 200) {
    alert(`for ${discount} no discount, total sum: ${(discount*1).toFixed(2)}`);
} else if (200 <= discount && discount < 300) {
    alert(`for ${discount} discount: 3%, total sum: ${(discount*0.97).toFixed(2)}`);
} else if (300 <= discount && discount < 500) {
    alert(`for ${discount} discount: 5%, total sum: ${(discount*0.95).toFixed(2)}`);
} else if (500 <= discount){
    alert(`for ${discount} discount: 7%, total sum: ${(discount*0.93).toFixed(2)}`);
}

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
let square_circle = Number(prompt('Enter длину окружности', ));
let square_perimeter = Number(prompt('Enter периметр квадрата',));
alert(`Circle diameter${(square_circle/3.1415)}`)
alert(`Square side${(square_perimeter/4)}`)
if(square_circle/3.1415 <= square_perimeter/4){
    alert('поместиться');
}else{
    alert('не поместиться');
}

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
let points = 0
let q1 = Number(prompt('Enter 1, 2 or 3. 3 is Correct',));
let q2 = Number(prompt('Enter 11, 22 or 33. 22 is Correct',));
let q3 = Number(prompt('Enter 111, 222 or 333. 111 is Correct',));
if (q1 == '3'){
    points += 2
}
if (q2 == '22'){
    points += 2
}
if (q3 == '111'){
    points += 2
}
alert(`Your total result ${points} points`)

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
let dd = Number(prompt('Enter day',));
let mm = Number(prompt('Enter month',));
let yyyy = Number(prompt('Enter year',));
if ((dd >= 1 && dd <= 29) && (mm == 4 || mm == 6 || mm == 9 || mm == 11) || (dd >= 1 && dd <= 30) && (mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12)){
    alert(`the next day: ${(dd+1)}.${mm}.${yyyy}`);
} else if ((dd >= 1 && dd <= 27) && mm == 2){
    alert(`the next day: ${(dd+1)}.${mm}.${yyyy}`);
} else if (dd == 28 && ((yyyy % 400 == 0 || yyyy % 4 == 0) && yyyy % 100 != 0)){
    alert(`the next day: ${(dd+1)}.${mm}.${yyyy}`);
} else if (dd == 29 && ((yyyy % 400 == 0 || yyyy % 4 == 0) && yyyy % 100 != 0)){
        alert(`the next day: 1.${mm+1}.${yyyy}`);
} else if (dd == 28 && ((yyyy % 400 != 0 || yyyy % 4 != 0) && yyyy % 100 == 0)){
    alert(`the next day: 1.${mm+1}.${yyyy}`);
} else if ((dd == 30) && (mm == 4 || mm == 6 || mm == 9 || mm == 11) || (dd == 31) && (mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10)) {
    alert(`the next day: 1.${mm+1}.${yyyy}`);
} else if (dd == 31 && mm == 12) {
    alert(`the next day: 1.1.${yyyy+1}`);
}
else{
    alert('wrong date')
}
