function calculateEmployeePay(basicSalary, hoursWorked) {
    let grossSalary = basicSalary;

    // Overtime calculation
    if (hoursWorked > 40) {
        grossSalary += (hoursWorked - 40)  * (basicSalary/40) * 1.5;
    }

    // Taxable income after social security deduction
    const taxableIncome = grossSalary * 0.9

    //Tax brackets
    let netSalary;
    if (taxableIncome <= 6000) {
        netSalary = taxableIncome * 0.9;

    } else if (taxableIncome <= 7500) {

        netSalary = taxableIncome * 0.75;

    } else if (taxableIncome <= 9000) {

        netSalary = taxableIncome * 0.7;

    } else if (taxableIncome <= 10500) {

        netSalary = taxableIncome * 0.675;

    } else {
        
        netSalary = taxableIncome * 0.65;
    }

    return netSalary;
}

const basicSalary = 2000;
const hoursWorked = 50;


console.log(calculateEmployeePay(basicSalary, hoursWorked));

module.exports = calculateEmployeePay;