/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding - When in the global scope, the value of ‘this’ will be the window/console Object;

* 2. Implicit Binding - Whenever a function is called by a preceding dot, the object left of the dot gets ‘this’.

* 3. New Binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function. "this" refers to the object left of "new".

* 4. Explicit Binding - Whenever JS’s call or apply method is used, ‘this’ is explicitly defined. call or apply override what "this" is pointing to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
}
sayName(`Chris`);


// Principle 2

// code example for Implicit Binding

const myObject = {
    greeting: `Hello`,
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        return this;
    }
};

myObject.sayHello(`Chris`);

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = `Hello `;
    this.greeter = greeter;
    this.speak = function() {
        return this.greeting + this.greeter;
    };
}

const bill = new CordialPerson(`Bob`);
const bob = new CordialPerson(`Bill`);

console.log(bill.speak());
console.log(bob.speak());

// Principle 4

// code example for Explicit Binding


var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  console.log(person.fullName.call(person1)); 