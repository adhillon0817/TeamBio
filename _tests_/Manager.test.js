 const Manager = require('../lib/Manager');

 test('Set office number',() => {
    const newManager = new Manager('Avleen', 17, 'avleendhillon@gmail.com', 25);
    expect(newManager.officeNumber).toEqual(expect.any(Number));
});

test('Get office number', () => {
    const newManager = new Manager('Avleen', 17, 'avleendhillon@gmail.com', 25);
    expect(newManager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('employee role', () => {
    const newManager = new Manager('Avleen', 17, 'avleendhillon@gmail.com', 25);
    expect(newManager.getRole()).toEqual("Manager");
});