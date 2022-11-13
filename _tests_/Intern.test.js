const Intern = require('../lib/Intern');

test('employee as intern',() => {
    const newIntern = new Intern('Avleen', 17, 'avleendhillon@gmail.com', 'UW Seattle');
    expect(newIntern.github()).toEqual(expect.any(String));
});

test('get GitHub', () => {
    const newIntern = new Intern('Avleen', 17, 'avleendhillon@gmail.com', 'UW Seattle');
    expect(newIntern.github()).toEqual(expect.stringContaining(newIntern.github.toString()));
});

test('employee role', () => {
    const newIntern = new Intern('Avleen', 17, 'avleendhillon@gmail.com', 'UW Seattle');
    expect(newIntern.getRole()).toEqual("Intern")
});
