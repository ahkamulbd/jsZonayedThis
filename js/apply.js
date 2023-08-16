let myCustomObj = {
    name: 'Jarif Abdullah',
    age: 5,
    job: 'Kidding',
    anotherObj: {
        name: 'Izan Abdullah',
        value: function () {
            console.log(`My name is ${this.name}`);
        }
    }
}

//myCustomObj.anotherObj.value.apply(myCustomObj);


let firstPerson = {
    name: 'Jarif Abdullah',
    dob: 2018,
    age: function (currentYear, msg) {
        console.log(`${msg} ${this.name} is ${currentYear - this.dob} years old !!!`);
    }
}
let secondPerson = {
    name: 'Izan Abdullah',
    dob: 2021
}

firstPerson.age(2023, 'Hello World !');
firstPerson.age.apply(secondPerson, [2023, 'Hello World']);