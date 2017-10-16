//alert('This script works!');

// Variables: number, string or character
var number1 = 35;
var number2 = 40;
//alert(number1 + number2);

//Arrays:
//var colors = ['red', 'yellow','green']; //OR
var colors = new Array('red', 'yellow','green');
//alert(colors);
//alert(colors[1]); //getting the second value from the array
colors.push('blue'); //adding a new element
console.log("colors are: "+colors +" Length of the arrays is: "+ colors.length +" sorted: "+ colors.sort() + " reverse: "+ colors.reverse());

//LOOPS
for(var i = 0; i < colors.length; i++){
  console.log("color "+ i+" is:"+colors[i]);
}

while(i>0){
  console.log("i = "+i);
  i--;
}

//forEach loop with Arrays
colors.forEach(function(myColor){
  console.log(myColor);
});

//Object Literal
var person = {
    firstName: 'Shweta',
    lastName: 'Nair',
    age: 26,
    friend: ['Jane','Alice'],
    address:{
      street: '79 Sweetberry Court',
      city: 'Atlanta',
      state: 'GA'
    },
    fullName: function(){
      return this.firstName+ " "+this.lastName;
    }

}
console.log(person.fullName()+person.age + person.friend[1]+person.address.state);

//Object Constructor
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function(){
  return 'Apple is the color '+ this.color+' and is the shape '+this.shape;
}
console.log(apple.describe());

//Constructor Pattern
function Book(name, author, category, price){
  this.name = name;
  this.author = author;
  this.category = category;
  this.price = price;

  this.describe = function(){
    return "The Book "+this.name+" from author "+this.author+" costs "+this.price+" and is of category "+this.category;
  }
}

var hp = new Book('Harry Potter','J K Rowling',' Children Fiction','$100');
console.log(hp.describe());

//Arrays of Objects
var users = [
  {
    name: 'John Doe',
    age: 30
  },
  {
    name: 'Jane Doe',
    age: 20
  },
  {
    name: 'Alice McClean',
    age: 39
  }
];
console.log(users[0].name);

function buttonClick(id){
  id.innerHTML = 'button Clicked!';
  id.class = used;
}
