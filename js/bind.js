let myCustomObj = {
    name: 'Amima Hoque',
    age: 8,
    job: 'Student',
    anotherObj: {
        name: 'Arkamul Hoque',
        value: function () {
            console.log(`My name is ${this.name}`);
        }
    }
}
//myCustomObj.anotherObj.value.bind(myCustomObj);
let anotherFunc = myCustomObj.anotherObj.value.bind(myCustomObj);

anotherFunc();