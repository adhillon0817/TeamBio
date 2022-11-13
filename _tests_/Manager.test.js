 const Manager = require('../lib/Manager');

 test('employee as manager',() => {
    const newManager = new Manager('Avleen', 17, 'avleendhillon@gmail.com', 25);
    expect(newManager.roomNumber).toEqual(expect.any(Number));
});

test('employee role', () => {
    const newManager = new Manager('Avleen', 17, 'avleendhillon@gmail.com', 25);
    expect(newManager.getRole()).toEqual("Manager");
});