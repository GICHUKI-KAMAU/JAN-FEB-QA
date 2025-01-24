const calculateEmployeePay = require('./employee');

test('calculateEmployeePay', () => {
    const basicSalary = 9000;
    const hoursWorked = 65;
    expect(calculateEmployeePay(basicSalary, hoursWorked)).toBe(10200.9375  
    );
});
   