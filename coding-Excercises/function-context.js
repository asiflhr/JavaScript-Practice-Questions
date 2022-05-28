function User(name, age){
    this.name = name;
    this.age = age;

    this.getProfile = function(){
        // Outer function context
        console.log(this.constructor.name); // User
        return function(){
            // inner function context
            console.log(this.constructor.name); // (window) User( get it from the outer context)
            console.log("I'm " + this.name + " and I'm " + this.age + " years old.");
        };
    }
}

var user = new User('John', 30);
var profile = user.getProfile();
profile(); // I'm undefined and I'm undefined years old.