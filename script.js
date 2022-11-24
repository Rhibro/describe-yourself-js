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




