//Filter by prop 'age'

let people = [
    {name: 'Vanessa', age: 31},
    {name: 'Alba'},
    {name: 'Blanca'},
    {name: 'Sergio', age: 31}
];

let expected = [
    {name: 'Vanessa', age: 31},
    {name: 'Sergio', age: 31}
];

function filterByProp(person, prop) {
    return person.prop; 
};

function filterByAge(person = {}) {
    return person.age;  
}
 
people.filter(filterByAge); 