let company = {
    sales: [
        {name: 'John', salary: 1000},
        {name: 'Alice', salary: 600}
    ],
    development: {
        web: [
            {name: 'Peter', salary: 2000},
            {name: 'Alex', salary: 1800}
        ],
        internals: [
            {name: 'Jack', salary: 1300}
        ]
    }
};

function calculateSalarySum(department) {
    let total = 0;

    if (Array.isArray(department)) {
        for (let employee of department) {
            total += employee.salary;
        }
    }else{
        for (let subDepartment in department) {
            total += calculateSalarySum(department[subDepartment]);
        }
    }
    return total;
}

let totalSalaries = calculateSalarySum(company);
console.log(totalSalaries);

function getResult() {
    alert('Open console (F12).')
}