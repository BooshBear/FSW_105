var shopper = {
    firstName: "Joe",
    lastName: "Doe",
    human: true,
    birthDate: 1999,
    groceryCart: ["apple", "pear", "milk"],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(shopper.fullName());