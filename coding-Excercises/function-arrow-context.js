function User(name, age){
    this.name = name;
    this.age = age;

    this.getProfile = function(){
        // Outer function context
        console.log(this.constructor.name); // User
        return() => {
            // inner function context
            console.log(this.constructor.name); // User( get it from the outer context)
        console.log("I'm " + this.name + " and I'm " + this.age + " years old.");
        };
    }
}

let user = new User('John', 30);
let profile = user.getProfile();
profile(); // I'm John and I'm 30 years old.