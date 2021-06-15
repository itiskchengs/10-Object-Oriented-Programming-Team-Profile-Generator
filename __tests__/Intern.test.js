const Intern = require('../lib/intern');

test('If intern gets a school name', () => {
    const school = 'ucf';
    const bob = new Intern('bob', 1, 'bob@test.com', school)

    expect(bob.school).toBe(school);
})

test('If intern gets the intern role', () => {
    const role = 'Intern';
    const bob = new Intern('bob', 1, 'bob@test.com', 'ucf')

    expect(bob.getRole()).toBe(role);
})

test('If intern gets a school name from the prototype function', () => {
    const school = 'School: ucf';
    const bob = new Intern('bob', 1, 'bob@test.com', 'ucf')

    expect(bob.specialQuestion()).toBe(school);
})

