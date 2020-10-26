// Реализовать класс, описывающий окружность.
class Circle{
    constructor(_radius){
        this.r = _radius;
    }
    get r_circle(){
        console.log(`Radius: ${this.r}`)
        return (`Radius: ${this.r}`);
    }
    set set_radius(new_radius){
        this.r = new_radius;
        console.log(`New radius: ${this.r}`)
    }
    get d_circle(){
        console.log(`Diameter: ${this.r*2}`);
        return (`Diameter: ${this.r*2}`);
    }
    circle_area(){
        console.log(`area for circle w r=${this.r}: ${this.r*this.r*3.14}`);
    }
    circle_length(){
        console.log(`length for circle w r=${this.r}: ${2*this.r*3.14}`);
    }
}

let figure1 = new Circle(1);
console.log(figure1.r);
figure1.r = 5;
figure1.r_circle;
figure1.d_circle;
figure1.set_radius = 10;
figure1.d_circle;
figure1.circle_area();
figure1.circle_length();

//Реализовать класс, описывающий простой маркер.
class Marker{
    constructor(_color, _amount){
        this.color = _color;
        this.amount = _amount;
        this.styles = [
            'background: silver'
            , 'border: 1px solid #3E0E02'
            , `color: ${this.color}`
            // , 'color: red'
            , 'display: block'
            , 'line-height: 25px'
            , 'text-align: center'
            , 'font-weight: bold'
        ].join(';');
    }

    get status(){
        console.log(`Current color: ${this.color}, marker is ${this.amount}% full.`);
    }

    set c(new_color){
        this.color = new_color;
        this.styles = [
            'background: silver'
            , 'border: 1px solid #3E0E02'
            , `color: ${this.color}`
            , 'display: block'
            , 'line-height: 25px'
            , 'text-align: center'
            , 'font-weight: bold'
        ].join(';');
        console.log(`New color is: ${this.color}`);
    }

    type(text){
        let i = 0;
        let text_part = '';
        while ((i < text.length) && (this.amount >=0.05)){
            text_part += text[i];
            i += 1;
            this.amount -=0.05;
            this.amount = this.amount.toFixed(2);
        }
        console.log('%c' + `${text_part}`, this.styles);
        console.log(`Amount left: ${this.amount}`);
    }
}

let pencil = new Marker('red', 50);
pencil.type('London is the capital!');
pencil.type('London is the capital!');
pencil.type('London is the capital!');
pencil.status;
pencil.amount = 1;
pencil.type('London is the capital!');


class MarkerWCharger extends Marker{
    constructor(_color, _amount){
        super();
        this.color = _color;
        this.amount = _amount;
        this.styles = [
            'background: silver'
            , 'border: 1px solid #3E0E02'
            , `color: ${this.color}`
            // , 'color: red'
            , 'display: block'
            , 'line-height: 25px'
            , 'text-align: center'
            , 'font-weight: bold'
        ].join(';');
    }

    set chargeit(any){
        this.amount = 100;
        console.log(`Charged to: ${this.amount}%`);
    }

    quickcharge(){
        this.amount = 100;
        console.log(`Quickly charged to: ${this.amount}%`);
    }
}

let charger = new MarkerWCharger('red', 40);
charger.type('Rivne is the capital!');
charger.status;
charger.chargeit = 125;
charger.type('Rivne2 is the capital!');
charger.status;
charger.quickcharge();
charger.c = 'white';
charger.type('Rivne is the capital!');

// Реализовать класс Employee, описывающий работника, и создать массив работников банка.
class Employee{
    constructor(_name, _sex, _age){
        this.name = _name;
        this.sex = _sex;
        this.age = _age;
    }
}

let w1 = new Employee('Alex', 'male', 28);
let w2 = new Employee('Maks', 'male', 28);
let w3 = new Employee('Oksana', 'female', 18);
let list = [w1, w2, w3]
console.log(list)
console.log(list[0]['name'])


class EmpTable{
    constructor(_list){
        this.list = _list;
    }

    print_table(){
        let final_list = []

        var table1 = document.getElementById("table1");
        var newRow = table1.insertRow(table1.rows.length);
        for (let i = 0; i < this.list.length; i++){
            let element = `${this.list[i]['name']} is ${this.list[i]['sex']} and has ${this.list[i]['age']} years old `;
            // final_list.push(element)
            console.log(`${this.list[i]['name']} is ${this.list[i]['sex']} and has ${this.list[i]['age']} years old `);
            // console.log(final_list)
            var newCell = newRow.insertCell(i);
            newCell.innerHTML = element;
        }
    }
}

let table = new EmpTable(list);
table.print_table();