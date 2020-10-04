// 1 Car example
let car = {
    make: "Chery",
    model: "Amulet",
    year: 2008,
    speed: 100,
    'data': function (){
        return(`Car ${this.make} ${this.model}, ${this.year} year production with average speed ${this.speed} km per hour.`)
    },
    'time': function time(km){
        let neededTimeH = Math.floor(km / this.speed)
        let neededTimeM = (km % this.speed)*0.6
        let additionalRest = Math.floor(neededTimeH / 4)
        return(`The car with average speed ${this.speed} km/h needs ${neededTimeH + additionalRest} hours ${neededTimeM} minutes (${additionalRest} hours break) for a ${km}km trip.`)
    }
}

function info(car){
    console.log(`Car ${car.make} ${car.model}, ${car.year} year production with average speed ${car.speed} km per hour.`)
}

function time(car, km){
    let neededTimeH = Math.floor(km / car.speed)
    let neededTimeM = (km % car.speed)*0.6
    let additionalRest = Math.floor(neededTimeH / 4)
    // console.log(neededTimeH)
    // console.log(neededTimeM)
    // console.log(additionalRest)
    console.log(`The car with average speed ${car.speed} km/h needs ${neededTimeH + additionalRest} hours ${neededTimeM} minutes (${additionalRest} hours break) for a ${km}km trip.`)
}

console.log(car['data']())
info(car)
console.log(car['time'](500))
time(car, 800)


// 2. Divider
let fractionObj = {
    numerator: 5,
    denominator: 10,
    'add': function add(numeratorA, denominatorA){
        let denominatorCurrent = this.denominator;
        let numeratorCurrent = this.numerator;

        console.log('addition');
        let denominatorUpdated = denominatorCurrent*denominatorA;
        let numeratorUpdated = numeratorCurrent*denominatorA + numeratorA*denominatorCurrent;

        this.numerator = numeratorUpdated;
        this.denominator = denominatorUpdated;
        console.log(`${numeratorCurrent}/${denominatorCurrent} + ${numeratorA}/${denominatorA} = ${this.numerator}/${this.denominator}`);
    },
    'dis': function dis(numeratorA, denominatorA){
        let denominatorCurrent = this.denominator;
        let numeratorCurrent = this.numerator;

        console.log('distraction');
        let denominatorUpdated = denominatorCurrent*denominatorA;
        let numeratorUpdated = numeratorCurrent*denominatorA - numeratorA*denominatorCurrent;

        this.numerator = numeratorUpdated;
        this.denominator = denominatorUpdated;
        console.log(`${numeratorCurrent}/${denominatorCurrent} - ${numeratorA}/${denominatorA} = ${this.numerator}/${this.denominator}`);
    },
    'mult': function mult(numeratorA, denominatorA){
        let denominatorCurrent = this.denominator;
        let numeratorCurrent = this.numerator;

        console.log('multiply');
        let denominatorUpdated = denominatorCurrent*denominatorA;
        let numeratorUpdated = numeratorCurrent*numeratorA;

        this.numerator = numeratorUpdated;
        this.denominator = denominatorUpdated;
        console.log(`${numeratorCurrent}/${denominatorCurrent} * ${numeratorA}/${denominatorA} = ${this.numerator}/${this.denominator}`);
    },
    'div': function div(numeratorA, denominatorA){
        let denominatorCurrent = this.denominator;
        let numeratorCurrent = this.numerator;

        console.log('division');
        let denominatorUpdated = denominatorCurrent*numeratorA;
        let numeratorUpdated = numeratorCurrent*denominatorA;

        this.numerator = numeratorUpdated;
        this.denominator = denominatorUpdated;
        console.log(`${numeratorCurrent}/${denominatorCurrent} / ${numeratorA}/${denominatorA} = ${this.numerator}/${this.denominator}`);
    },
    'reduction': function reduction(){
        let denominatorCurrent = this.denominator;
        let numeratorCurrent = this.numerator;
        console.log(typeof denominatorCurrent);
        console.log(typeof numeratorCurrent);
        console.log('reduction1');
        let denominatorUpdated;
        let numeratorUpdated;
        // Better than nothing.
        if (numeratorCurrent%denominatorCurrent == 0){
            denominatorUpdated = 1;
            numeratorUpdated = numeratorCurrent/denominatorCurrent;
        } else if(denominatorCurrent%numeratorCurrent == 0){
            denominatorUpdated = denominatorCurrent/numeratorCurrent;
            numeratorUpdated = 1;
        } else if(denominatorCurrent%7 == 0 && numeratorCurrent%7 == 0){
            denominatorUpdated = denominatorCurrent/7;
            numeratorUpdated = numeratorCurrent/7;
        }else if(denominatorCurrent%5 == 0 && numeratorCurrent%5 == 0){
            denominatorUpdated = denominatorCurrent/5;
            numeratorUpdated = numeratorCurrent/5;
        }else if(denominatorCurrent%3 == 0 && numeratorCurrent%3 == 0){
            denominatorUpdated = denominatorCurrent/3;
            numeratorUpdated = numeratorCurrent/3;
        }else if(denominatorCurrent%2 === 0 && numeratorCurrent%2 === 0){
            denominatorUpdated = denominatorCurrent/2;
            numeratorUpdated = numeratorCurrent/2;
        }
        console.log('reduction3');
        console.log(denominatorUpdated);
        console.log(numeratorUpdated);

        this.numerator = numeratorUpdated;
        this.denominator = denominatorUpdated;
        console.log(`${numeratorCurrent}/${denominatorCurrent} = ${this.numerator}/${this.denominator}`);
    },
}

console.log(fractionObj)
fractionObj.add(1, 2);
fractionObj.dis(1, 2);
fractionObj.mult(2, 5);
fractionObj.div(1, 2);
fractionObj.reduction();
fractionObj.reduction();
fractionObj.reduction();


// 3. Timer
let timerObj = {
    h: 0,
    m: 00,
    s: 00,
    show: function(){
        console.log(`Current time is ${this.h}:${this.m}:${this.s}`);
    },
    addS: function(s){ // все перевести в сек і потім назад
        let total = s + this.h*3600 + this.m*60 + this.s;
        let newH = Math.floor(total / 3600); // цілі години
        let newM = Math.floor((total - newH*3600) / 60); // цілі хвилини
        let newS = (total - newH*3600) % 60;
        if(newH >=24){
            newH = Math.floor(newH % 24)
        }
        this.h= newH,
        this.m= newM,
        this.s= newS,
        console.log(`Added ${s} seconds. Calculated Seconds time is ${newH}:${newM}:${newS}`);
    },
    addM: function(m){ // все перевести в min і потім назад
        let total = m + this.h*60 + this.m;
        let newH = Math.floor(total / 60); // цілі години
        let newM = (total - newH*60); // цілі хвилини
        if(newH >=24){
            newH = Math.floor(newH % 24)
        }
        this.h= newH,
        this.m= newM,
        console.log(`Added ${m} minutes. Calculated Minutes time is ${newH}:${newM}:${this.s}`);
    },
    addH: function(h){ // все перевести в min і потім назад
        let total = h + this.h;
        let newH = total; // цілі години
        if(newH >=24){
            newH = Math.floor(newH % 24)
        }
        this.h= newH,
        console.log(`Added ${h} hours. Calculated Minutes time is ${newH}:${this.m}:${this.s}`);
    },
    update: function(hh,mm,ss){
        let total = hh*3600 + mm*60 + ss;
        let newH = Math.floor(total / 3600); // цілі години
        let newM = Math.floor((total - newH*3600) / 60); // цілі хвилини
        let newS = (total - newH*3600) % 60;
        if(newH >=24){
            newH = Math.floor(newH % 24)
        }
        this.h= newH,
        this.m= newM,
        this.s= newS,
        console.log(`NEW time is ${this.h}:${this.m}:${this.s}`);
    },
}

timerObj.show()
timerObj.addS(1)
timerObj.addM(390)
timerObj.addH(5)
console.log(timerObj)
timerObj.update(23, 40, 50)
console.log(timerObj)
console.log(timerObj['h'])
console.log(timerObj['m'])
console.log(timerObj['s'])