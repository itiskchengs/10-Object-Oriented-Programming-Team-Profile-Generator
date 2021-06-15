const Manager = require('../lib/manager');

test('If manager gets a office number', () => {
    const officeNum = 303;
    const bob = new Manager('bob', 1, 'bob@test.com', officeNum);

    expect(bob.officeNumber).toBe(officeNum);
})

test('If manager gets the manager role', () => {
    const role = 'Manager';
    const bob = new Manager('bob', 1, 'bob@test.com', 303);

    expect(bob.getRole()).toBe(role);
})

test('If manager gets a office number from the prototype function', () => {
    const officeNum = 'Office Number: 303';
    const bob = new Manager('bob', 1, 'bob@test.com', 303);

    expect(bob.specialQuestion()).toBe(officeNum);
})