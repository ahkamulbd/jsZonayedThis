let Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job
}

let amima = new Person('Amima Hoque', 8, 'Student');
// console.log(amima.name);
// console.log(amima.age);

let Country = function (name, population, continent, isCool) {
    this.name = name;
    this.population = population;
    this.continent = continent;
    this.isCool = isCool,
        this.gotIndependence = function () {
            console.log(`${this.name} got independence at 1971.`)
        }
}

let myCountry = new Country('Bangladesh', 16, 'Asia', false);

console.log(myCountry.name);
console.log(myCountry.population);
console.log(myCountry.continent);
console.log(myCountry.isCool);
//console.log(myCountry.gotIndependence());
myCountry.gotIndependence();

