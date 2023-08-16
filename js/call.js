var myCustomObj = {
    name: 'Zarif Abdullah',
    age: 5,
    job: 'Kidding',
    anotherObj: {
        name: 'Izan Abdullah',
        value: function () {
            //console.log(`My name is ${this.name}`);
        }
    }
}
myCustomObj.anotherObj.value();
myCustomObj.anotherObj.value.call(myCustomObj);

// Another Example

let firstPerson = {
    name: 'Amima Hoque',
    dob: 2014,
    age: function (currentYear) {
        console.log(`${this.name} is ${currentYear - this.dob} years old !!!!!!!`);
    }
}

let secondPerson = {
    name: 'Arkamul Hoque',
    dob: 2017
}
firstPerson.age(2023);
firstPerson.age.call(secondPerson, 2023);