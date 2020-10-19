class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        return `Hi ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Traveller extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location=location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGreeting(){
        let loc=super.getGreeting();
        if(this.hasLocation()){
            loc +=` ${this.name} is from ${this.location}.`;
        }
        return loc;
    }
}

const me = new Traveller('Manasi Shah', 21, 'Vadodara');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());