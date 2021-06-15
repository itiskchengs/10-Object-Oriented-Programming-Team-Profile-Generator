const Employee = require('../lib/employee');

test('Can I make an employee', () => {
    const bob = new Employee();
    expect(typeof(bob)).toBe('object');
})

test('Can I make an employee name', () => {
    const name = 'bob';
    const bob = new Employee(name);
    expect(bob.name).toBe(name);
})

test('Can I make an employee ID', () => {
    const id = 1;
    const bob = new Employee('bob',id);
    expect(bob.id).toBe(id);
})

test('Can I make an employee email', () => {
    const email = 'bob@test.com';
    const bob = new Employee('bob', 1, email);
    expect(bob.email).toBe(email);
})

test('Can I make an employee name', () => {
    const name = 'bob';
    const bob = new Employee(name);
    expect(bob.getName()).toBe(name);
})

test('Can I make an employee ID', () => {
    const id = 1;
    const bob = new Employee('bob',id);
    expect(bob.getId()).toBe(id);
})

test('Can I get an employee email', () => {
    const email = 'bob@test.com';
    const bob = new Employee('bob', 1, email);
    expect(bob.getEmail()).toBe(email);
})

test('Can I get an employee role', () => {
    const role = 'Employee';
    const bob = new Employee('bob', 1, 'bob@test.com');
    expect(bob.getRole()).toBe(role);
})