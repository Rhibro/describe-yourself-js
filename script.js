const me = {
    firstName: "Rhiannon",
    lastName: "Bronnimann",
    age: 1993,
    job: "developer",
    pets: 0,


calcAge: function () {
    console.log(this);
    return 2022 - this.age;
},

getSummary: function() {
    return `My name is ${this.firstName} ${this.lastName} and I'm a
    ${this.calcAge()} year old ${this.job}. I have ${this.pets} pets at home.`
}
};

console.log(me.getSummary());

const friendOne = {
    firstName: "Beth",
    lastName: "Claire",
    age: 1903,
    job: "dancer",
    pets: 5,


calcAge: function () {
    console.log(this);
    return 2022 - this.age;
},

getSummary: function() {
    return `My name is ${this.firstName} ${this.lastName} and I'm a
    ${this.calcAge()} year old ${this.job}. I have ${this.pets} pets at home.`
}
};

console.log(friendOne.getSummary());

const friendTwo = {
    firstName: "Stefany",
    lastName: "Kim",
    age: 2015,
    job: "student",
    pets: 1,


calcAge: function () {
    console.log(this);
    return 2022 - this.age;
},

getSummary: function() {
    return `My name is ${this.firstName} ${this.lastName} and I'm a
    ${this.calcAge()} year old ${this.job}. I have ${this.pets > 1 ? "pets" : "a pet"} at home.`
}
};

console.log(friendTwo.getSummary());

let day = "monday";

if (day === "monday") {
    console.log ("plan week");
} else if (day === "tuesday") {
    console.log("go to gym");
} else if (day === "wednesday" || day === "thursday") {
    console.log("bake cookies");
} else if (day === "friday") {
    console.log("have a party");
} else if (day === "saturday" || day === "sunday") {
    console.log("enjoy your weekend");
} else {
    console.log("not valid");
}

function mySelf (name, age, favFood) {
    const myAge = (2022 - age) 
    return console.log(`My name is ${name} I am ${myAge} years old, and my favourite food is ${favFood}`);
}

mySelf("Rhiannon", 1993, "Sushi");
mySelf("Rhi", 1945, "Chicken");
mySelf("Lola", 2003, "Pickels");

