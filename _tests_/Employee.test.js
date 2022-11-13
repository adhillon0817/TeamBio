const Employee = require('.../lib/Employee.js');

describe("Employee", () => {
    it("can create employee", () => {
        const newEmployee = new Employee('Avleen', 17, 'avleendhillon@gmail.com');

        expect(newEmployee.name).toEqual(expect.any(String));
        expect(newEmployee.id).toEqual(expect.any(Number));
        expect(newEmployee.email).toEqual(expect.any(Number));
    });

})