console.log("Heyyyyy");

const square=function(x){
    return x*x;
};
console.log(square(8));

const squareArrow=(x) => {
    return x*x;
};
console.log(squareArrow(11));

const fullname='Manasi Shah';
const firstname=(fullname) => fullname.split(' ')[0];
console.log(firstname(fullname));

//const user={
  //  name: 'Manasi',
    //cities: ['Vadodara','Abad','Mumbai'],
    //printCities: function(){
      //  const that=this;
        //this.cities.forEach(function(city){
          //  console.log(that.name + ' ' + city);
        //});
   // }
//};
//const user={
  //  name: 'Manasi',
    //cities: ['Vadodara','Abad','Mumbai'],
    //printCities(){
    //    this.cities.forEach((city) => {
    //        console.log(this.name + ' ' + city);
    //    });
    //}
//};
const user={
    name: 'Manasi',
    cities: ['Vadodara','Abad','Mumbai'],
    printCities(){
        const cityMsg=this.cities.map((city) => {
            return this.name+' '+city+'!';
        });
        return cityMsg;
    }
};
console.log(user.printCities());

const num={
    numbers : [1,2,3,4,5,6,7,8,9],
    mul : 2,
    multiply(){
        return this.numbers.map((n) => n*this.mul);
    }
}
console.log(num.multiply());