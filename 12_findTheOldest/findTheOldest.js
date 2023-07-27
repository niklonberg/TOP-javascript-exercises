const findTheOldest = function(people) {
  let oldestAge = 0;
  let oldestPerson = people[0];

  people.forEach(person => {
    const age = getAge(person.yearOfDeath, person.yearOfBirth)

    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = person
    }

  })

  return oldestPerson
};

const getAge = function(death, birth) {
  if (!death) {
    death = new Date().getFullYear()
  }
  return death - birth
}


// Do not edit below this line
module.exports = findTheOldest;
