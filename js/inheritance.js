let Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

let PersonOnly = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job
}

PersonOnly.prototype.dateOfBirth = function () {
    console.log(`${this.name} born in ${2023 - this.age}`);
}
//console.log(PersonOnly.prototype);

let zarif = new PersonOnly('Abdullah Zarif', 5, 'Child');

zarif.dateOfBirth();
console.log(zarif);
console.log(zarif.name);
console.log(zarif.age);

/*
let Teacher = function (name, school, educationQualification, age, isMarried, gender) {
    this.name = name;
    this.school = school;
    this.educationQualification = educationQualification;
    this.age = age;
    this.isMarried = isMarried;
    this.gender = gender
}

const AbuTayoib = new Teacher('Abu Tayoib', 'Lama Madrasha', 'Kamil', 57, true, 'male');

console.log(AbuTayoib.name);
console.log(AbuTayoib.school);
console.log(AbuTayoib.educationQualification);
console.log(AbuTayoib.age);
console.log(AbuTayoib.isMarried);
console.log(AbuTayoib.gender);
*/
