const findTheOldest = function(people) {
    peopleProcessed = people.map((person) => {
        let currentDate = new Date();
        let year = currentDate.getFullYear();

        let name = person.name;
        let age = ("yearOfDeath" in person) ? person.yearOfDeath - person.yearOfBirth : year - person.yearOfBirth;

        return {name, age}
    })

    peopleProcessed.sort((a, b) => a.age - b.age);
    
    return peopleProcessed.at(-1)
};

// Do not edit below this line
module.exports = findTheOldest;
