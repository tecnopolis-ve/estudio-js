let user = {
    name: 'Pepe',
    email: 'myemail@mycompany.com', 
    firstName: 'López',
    lastName: 'González',
    age: 0,
    password: '123456', 
}

//firstName property access:
user.firstName; 

for (let propertyName in user) {
    console.log(`${propertyName}: ${user[propertyName]}`);
}