const Engineer = require('../lib/Engineer');

test('employee as engineer',() => {
    const newEngineer = new Engineer('Avleen', 17, 'avleendhillon@gmail.com', 'adhillon0817');
    expect(newEngineer.getName()).toEqual(expect.any(String));
});

test('get GitHub', () => {
    const newEngineer = new Engineer('Avleen', 17, 'avleendhillon@gmail.com', 'adhillon0817');
    expect(newEngineer.getGitHub()).toEqual(expect.stringContaining(newEngineer.github.toString()));
});

test('employee role', () => {
    const newEngineer = new Engineer('Avleen', 17, 'avleendhillon@gmail.com', 'adhillon0817');
    expect(newEngineer.getRole()).toEqual("Engineer")
});
