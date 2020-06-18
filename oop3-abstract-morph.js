/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
  constructor() {
    if (this.constructor == Creature) {
      throw new Error('Unable to instantiate Class Creature')
    }
  }

  move() {
    throw new Error(
      'This is an abstract method. You can never invoke this method!'
    )
  }

  act() {
    throw new Error(
      'This is an abstract method. You can never invoke this method!'
    )
  }
}

class Human extends Creature {
  constructor(name, age, profession, movies) {
    super()
    this.name = name
    this.age = age
    this.profession = profession
    this.movies = movies
  }

  move() {
    const directions = ['North', 'East', 'South', 'West']
    console.log(
      `${this.name} is moving ${directions[Math.floor(Math.random() * 4)]}`
    )
  }
  act() {
    console.log(`${this.name}, gets everyone into position to film the shot!`)
  }
  bio() {
    console.log(
      `Hi! I'm ${this.name}, I'm a regular Human, my age is ${this.age} and I am a ${this.profession}`
    )
  }
  listMovies() {
    console.log(`My most famous movies are ${this.movies.join(', ')}`)
  }
}

const bon = new Human('Bong Joon Ho', 50, 'Director', [
  'Parasite',
  'The Host',
  'Snowpiercer',
  'Memories of Murder',
])
bon.bio()
bon.listMovies()

class Cat extends Creature {
  constructor(name, weight, color) {
    super()
    this.name = name
    this.weight = weight
    this.color = color
  }

  move() {
    const directions = ['North', 'East', 'South', 'West']
    console.log(
      `${this.name} is moving ${directions[Math.floor(Math.random() * 4)]}`
    )
  }
  act() {
    console.log(`${this.name} is lazily relaxing on his masters keyboard!`)
  }
  bio() {
    console.log(
      `Hi! I'm ${this.name}, I'm a regular Cat and I am ${this.color} colored.`
    )
  }
  isChonk() {
    if (this.weight > 50) {
      return console.log(`${this.name} is really chonky!`)
    } else if (this.weight <= 50 && this.weight > 15) {
      return console.log(`${this.name} is kinda chonky!`)
    } else {
      return console.log(`${this.name} is pretty thin!`)
    }
  }
}

const cat = new Cat('Oreo', 50, 'Black and white')
cat.bio()
cat.isChonk()

class Dog extends Creature {
  constructor(name, age, breed) {
    super()
    this.name = name
    this.age = age
    this.breed = breed
  }

  move() {
    const directions = ['North', 'East', 'South', 'West']
    console.log(
      `${this.name} is moving ${directions[Math.floor(Math.random() * 4)]}`
    )
  }
  act() {
    console.log(`${this.name} is running around extra energenically!`)
  }
  bio() {
    console.log(
      `Hi! I'm ${this.name}, I'm a regular Dog and my breed is ${this.breed}`
    )
  }
  dogToHuman() {
    if (this.age === 1) {
      return console.log(
        `${this.name} is ${this.age} years old, and 15 dog years old!`
      )
    } else if (this.age === 2) {
      return console.log(
        `${this.name} is ${this.age} years old, and 24 dog years old!`
      )
    } else {
      return console.log(
        `${this.name} is ${this.age} years old, and ${
          24 + (this.age - 2) * 5
        } dog years old!`
      )
    }
  }
}

const dog = new Dog('Spot', 15, 'Dalmation')
dog.bio()
dog.dogToHuman()
/*
  2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
  */

class Person {
  name

  eat() {
    console.log(this.name + ' is eating')
  }

  sleep = () => {
    console.log(this.name + ' is sleeping')
  }

  code = function () {
    console.log(this.name + ' is coding')
  }

  repeat = function () {
    console.log(this.name + ' is repeating the above steps, yet another time')
  }

  explain() {
    //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
    console.log(
      'I refactored the Teacher functions to be on the class field instead of a method in the prototype so that it overwrites the Person functions, by turning them into keys equaling arrow functions'
    )
  }
}

class Teacher extends Person {
  //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.

  constructor(name) {
    super(name)
    this.name = name
  }

  eat = () => {
    console.log(this.name + ' loves to teach before eating')
  }

  sleep = () => {
    console.log(this.name + ' sleeps after preparing the lesson plan')
  }

  code = () => {
    console.log(this.name + ' codes first, then teaches it the next day.')
  }

  repeat = () => {
    console.log(this.name + ' teaches, codes, eats, sleeps, and repeats')
  }
}

class Student extends Person {
  //set up your methods in this student class, so all of these methods will override the methods from the super class.
  constructor(name) {
    super(name)
    this.name = name
  }
  eat = () => {
    console.log(this.name + ' studies, then eats')
  }

  sleep = () => {
    console.log(
      this.name +
        ' studies coding so much, that they dream about it in their sleep'
    )
  }

  code = () => {
    console.log(
      this.name +
        ' was first overwhelmed by coding, but kept at it, and now has become a coding guru!'
    )
  }

  repeat = () => {
    console.log(
      this.name +
        ' keeps on studying, coding, eating, and sleeping, and puts it all on repeat.'
    )
  }
}

const teacher = new Teacher('Dr. Teacher')

teacher.explain()

const student = new Student('Pupil Student')

student.explain()

teacher.eat()
teacher.sleep()
teacher.code()
teacher.repeat()

student.eat()
student.sleep()
student.code()
student.repeat()

//****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:

class Cook {
  prepare(food1, food2, food3) {
    console.log('The cook is cooking ' + food1, food2, food3)
  }

  //   prepare = function () {
  //     console.log('The cook is cooking');
  //   };

  explain = () => {
    console.log('Remove the second function so it doesnt take priority.')
  }
}

const cook = new Cook()

cook.prepare('turkey', 'salami', 'pizza')

cook.explain()
