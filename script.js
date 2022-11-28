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
    ${this.calcAge()} year old ${this.job}. I have ${this.pets} pets at home.`
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




