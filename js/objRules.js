// let myCustomObj = {
//     name: 'Arkam',
//     age: 6,
//     job: 'Kidding',
//     msg: function () {
//         console.log(this);
//     }
// }
// myCustomObj.msg();


let myCustomObj = {
    name: 'Arkam',
    age: 6,
    job: 'Kidding',
    anotherObj: {
        name: 'Amima',
        // msg: function () {
        //     console.log(`My name is ${this.name}`);
        // }
        value: function () {
            console.log(this);
        }
    }
}
//myCustomObj.anotherObj.msg();
//myCustomObj.anotherObj.value();
myCustomObj.anotherObj.value.call(myCustomObj);