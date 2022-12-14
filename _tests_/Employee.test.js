const Employee = require('../lib/Employee.js');

// test("Employee", () => {
//     it("can create employee", () => {
//         const newEmployee = new Employee('Avleen', 17, 'avleendhillon@gmail.com');

//         expect(newEmployee.name).toEqual(expect.any(String));
//         expect(newEmployee.id).toEqual(expect.any(Number));
//         expect(newEmployee.email).toEqual(expect.any(Number));
//     });

    test('employee name',() => {
        const newEmployee = new Employee('Avleen', 17, 'avleendhillon@gmail.com');
        expect(newEmployee.getName()).toEqual(expect.any(String));
    });

    test('employee id',() => {
        const newEmployee = new Employee('Avleen', 17, 'avleendhillon@gmail.com');
        expect(newEmployee.getId()).toEqual(expect.any(Number));
    });

    test('employee name',() => {
        const newEmployee = new Employee('Avleen', 17, 'avleendhillon@gmail.com');
        expect(newEmployee.getEmail()).toEqual(newEmployee.email.toString());
    });

    test('employee role', () => {
        const newEmployee = new Employee('Avleen', 17, 'avleendhillon@gmail.com');
        expect(newEmployee.getRole()).toEqual("Employee")
    });
// });