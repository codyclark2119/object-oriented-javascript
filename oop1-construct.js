//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...
console.log('-------------------------------------------');
console.log('Problem 1');

class WhyClass {
  constructor(purpose) {
    this.purpose = purpose;
  }
  explain() {
    console.log(this.purpose);
  }
  pieces() {
    console.log(
      'The class keyword, a constructor, properties, methods, and the new keyword when creating it.'
    );
  }
}

const classExplain = new WhyClass(
  'Because they are a good way of storing multipule values and functions under one easily reusable template for any alike items you want to create.'
);
classExplain.pieces();

/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

//your code here...
console.log('-------------------------------------------');
console.log('Problem 2');

class Creature {
  constructor(name, family, diet) {
    this.name = name;
    this.family = family;
    this.diet = diet;
  }
  sayHello() {
    console.log(
      `Hi! I'm a ${this.name}, that means I'm part of the ${this.family} family.`
    );
  }
  sayDiet() {
    console.log(`My diet consists of: ${this.diet.join(', ')}`);
  }
}

// Creatures

const frog = new Creature('Glass Frog', 'Centrolenidae', [
  'Spiders',
  'Flies',
  'Insects',
]);

const panther = new Creature('Black Panther', 'Panthera', [
  'Deer',
  'Wild Hogs',
  'Rabbits',
]);

const viper = new Creature('Pit Viper', 'Viperid', ['Rats', 'Mice', 'Birds']);

/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
 */
console.log('-------------------------------------------');
console.log('Problem 3');

class Shape {
  //your code here...
  constructor(name, sides) {
    this.name = name;
    this.sides = sides;
  }
  calcArea() {
    switch (this.name) {
      case 'triangle':
    }
  }
  calcCircumference() {}
}

const triangle = {
  name: 'triangle',
  sides: [4, 7, 7], //lengths of each side
  base: null,
  height: null, //determine this height using basic geometry.  You may need to research this one.
  calcArea: function () {
    console.log(
      `${this.name}'s area is calculated to be : ${
        0.5 * this.base * this.height
      }`
    );
  },
  calcPerimeter: function () {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        this.base + (this.sides[1] + this.sides[2])
      }`
    );
  },
};

triangle.base = triangle.sides[0]; //base is the 1st side in the triangle.sides array.
triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

const rectangle = {
  name: 'rectangle',
  sides: 4,
  length: 2,
  width: 5,
  calcArea: function () {
    console.log(
      `${this.name}'s area is calculated to be : ${this.length * this.width}`
    );
  },
  calcPerimeter: function () {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        2 * this.length + 2 * this.width
      }`
    );
  },
};

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

const circle = {
  name: 'circle',
  sides: 1,
  radius: 5,
  calcArea: function () {
    console.log(
      `${this.name}'s area is calculated to be : ${(
        Math.PI *
        this.radius ** 2
      ).toFixed(2)}`
    );
  },
  calcCircumference: function () {
    console.log(
      `${this.name}'s circumference is calculated to be : ${(
        2 *
        Math.PI *
        this.radius
      ).toFixed(2)}`
    );
  },
};

console.log(circle);
circle.calcCircumference();
circle.calcArea();

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.

console.log("-------------------------------------------")
console.log("Problem 4")


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.
*/
console.log('-------------------------------------------');
console.log('Problem 5');

class Earth {
  get name() {
    return 'Earth';
  }
  get planetNum() {
    return 3;
  }
}

console.log(Earth.name);
console.log(Earth.planetNum);
