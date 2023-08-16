function useThisKeyWordInJS() {
    console.log(this);
    this.name = 'Amima Hoque';
    this.length = 100;
    this.school = 'Biddapith';
}
useThisKeyWordInJS();

console.log(name);
console.log(length);
console.log(school);
console.log(this.innerHeight);