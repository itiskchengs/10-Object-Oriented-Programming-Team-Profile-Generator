const Engineer = require('../lib/engineer');

test('Check to see if engineer gets the github username', () => {
    const user = 'kenny';
    const bob = new Engineer('bob', 1, 'bob@test.com', user);

    expect(bob.github).toBe(user);
})
test('Check to see if engineer gets the role function', () => {
    const user = 'Engineer';
    const bob = new Engineer('bob', 1, 'bob@test.com', 'Kenny');

    expect(bob.getRole()).toBe(user);
})
test('Check to see if engineer gets the role function', () => {
    const user = 'Github: <a href="https://github.com/itiskchengs" target="_blank">kenny</a>';
    const bob = new Engineer('bob', 1, 'bob@test.com', 'kenny');

    expect(bob.specialQuestion()).toBe(user);
})

