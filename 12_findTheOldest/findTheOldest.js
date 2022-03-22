const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let oldestAge = 0;
    let oldestPerson = {};
    for (let person of people) {
        if (person.yearOfDeath) {
            const age = person.yearOfDeath - person.yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = person;
            }
        }
        else {
            const age = currentYear - person.yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = person;
            }
        }
    }
    return oldestPerson;
};
// Do not edit below this line
module.exports = findTheOldest;
