class Person {
  constructor(name='Anonymous', age=0){
    this.name=name;
    this.age=age;
  }
  getGreetings(){
    return `Hi! i am ${this.name}`;
  }
  getDescription(){
    return`${this.name} is ${this.age} years old.`;
  }
}
// const me =new Person('Affan Akhter',26)
// console.log(me.getGreetings());
// console.log(me.getDescription());
//
// const other = new Person();
// console.log(other.getGreetings());
// console.log(other.getDescription());
// sub classes
 class Student extends Person {
   constructor(name,age,major){
     super(name,age);
     this.major=major;
   }
   hasMajor(){
     !!this.major
   }
   getDescription(){
     let discription=super.getDescription()
     if(this.hasMajor){
       discription +=`Their major is  ${this.major}`
     }
     return discription
   }

 }
 class Traveler extends Person {
   constructor(name,age,homeLocation) {
     super(name,age)
     this.homeLocation=homeLocation;
   }
   getGreetings(){
     let location=super.getGreetings();
     if(this.homeLocation){
       location+=`the home town of ${this.name} is ${this.homeLocation}`
     }
     return location;
   }
 }
 const me =new Traveler('Affan Akhter',26,'Pakistan')
 console.log(me.getGreetings());
 // console.log(me.getDescription());

 const other = new Traveler();
 console.log(other.getGreetings());
 // console.log(other.getDescription());
