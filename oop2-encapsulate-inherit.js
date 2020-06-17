 
// 1. Create the following classes:
//     - Book class. It should have an author and publisher property.
//     - Author class. It should have a name and books property.
//     - Publisher class.  It should have an authors and books property.
//     - Review class.  It should have a rating and user property.
//     -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

    //your code here...
    console.log('-------------------------------------------');
    console.log('Problem 1');

    class Book{
        #author;
        #publisher;
        constructor(author, publisher){
            this.#author = author;
            this.#publisher = publisher;
        }
        get data(){
            return console.log(`Author: ${this.#author}, Publisher: ${this.#publisher}`)
        }
        changeData(author = this.#author, publisher = this.#publisher){
            this.#author = author;
            this.#publisher = publisher;
        }
    }
    // const frankenstein = new Book('R.L Stein', 'West Pointe');
    // frankenstein.data;
    // frankenstein.changeData('Mary Shelley', 'Penguin')
    // frankenstein.data;
    class Author{
        #name;
        #books;
        constructor(name, books){
            this.#name = name;
            this.#books = books;
        }
        get data(){
            return console.log(`Name: ${this.#name}, Books: ${this.#books}`)
        }
        changeData(name = this.#name, books = this.#books){
            this.#name = name;
            this.#books = books;
        }
    }
    class Publisher{
        #authors;
        #books;
        constructor(author, books){
            this.#author = author;
            this.#books = books;
        }
        get data(){
            return console.log(`Author: ${this.#authors}, Books: ${this.#books}`)
        }
        changeData(authors = this.#authors, books = this.#books){
            this.#authors = authors;
            this.#books = books;
        }
    }
    class Review{
        #rating;
        #user;
        constructor(rating, user){
            this.#rating = rating;
            this.#user = user;
        }
        get data(){
            return console.log(`Rating: ${this.#rating}, User: ${this.#user}`)
        }
        changeData(rating = this.#rating, user = this.#user){
            this.#rating = rating;
            this.#user = user;
        }
    }
// 2. Create the following classes:
//     - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
//     - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
//     - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
//     - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
//     - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.

    //your code here...
    console.log('-------------------------------------------');
    console.log('Problem 2');

    class Umbrella{
        constructor(name){
            this.name = name;
        }
    }

    class Company extends Umbrella{
        constructor(name, employeeCount){
            this.name = name;
            this.employeeCount = employeeCount;
        }
    }

    class Site extends Company{
        constructor(name, location){
            super(name);
            this.location = location;
        }

    }

    class Employee{
        constructor( employeeName, jobTitle, salary){
            this.employeeName = employeeName;
            this.jobTitle = jobTitle;
            this.salary = salary;
        }
    }
/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...