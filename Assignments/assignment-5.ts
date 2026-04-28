/* Employee Table
S.No Name Base Salary Experience (Years) Year-End Rating (Out of

5)

1
Alice
Johnson 75000.0 5.1 4.2
2 Bob Smith 68000.0 3.2 3.8
3 Carol Davis 82000.0 7.1 4.5
4 David Brown 90000.0 10.2 2.5
5 Eva Green 60000.0 2.4 3.5

Hike
Rating % of base Salary as variable pay Bonus
> =4.0 15.0 1500
>=3 && < 4 10.0 1200
< 3.0 3.0 300

Extra Perks
Employees with Experience >= 5 Years get extra Reward of 5000;

There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.

Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
Hike % = Hike / Base Salary . */

let empData: [string, number, number, number][] = [
    ["Alice", 75000, 5.1, 4.2],
    ["Bob", 68000, 3.2, 3.8],
    ["Carol", 82000, 7.1, 4.5],
    ["David", 90000, 10.2, 2.5],
    ["Green", 60000, 2.4, 3.5]
]
let hikeMap: Map<string, number> = new Map();


for (const emp of empData) {
    const [name, Salary, experience, rating] = emp;
    let bonus = 0;
    let varpay = 0;
    let reward = 0;
    if (rating >= 4) {
        varpay = 0.15;
        bonus = bonus + 1500
    }
    else if (rating >= 3 && rating < 4) {
        varpay = 0.10
        bonus = 1200
    }
    else {
        varpay = 0.03
        bonus = 300
    }
    if (experience >= 5) {
        reward = 5000;
    }
    const hike = (Salary * varpay) + bonus + reward;
    const hikePercentage = (hike / Salary) * 100;

    hikeMap.set(name, hikePercentage);

}
for(const[name,hikePercentage] of hikeMap){
    console.log(`Hike percentage for ${name}: ${hikePercentage.toFixed(2)}%`);

}













/* let employeeData: [string, number, number, number][] = [
    ["Alice Johnson", 75000.0, 5.1, 4.2],
    ["Bob Smith", 68000.0, 3.2, 3.8],
    ["Carol Davis", 82000.0, 7.1, 4.5],
    ["David Brown", 90000.0, 10.2, 2.5],
    ["Eva Green", 60000.0, 2.4, 3.5],
];

let hikeMap: Map<string, number> = new Map();

for (const employee of employeeData) {
    const [name, baseSalary, experience, rating] = employee;
    let variablePay = 0;
    let bonus = 0;
    let reward = 0;

    if (rating >= 4.0) {
        variablePay = 0.15;
        bonus = 1500;
    } else if (rating >= 3 && rating < 4) {
        variablePay = 0.10;
        bonus = 1200;
    } else {
        variablePay = 0.03;
        bonus = 300;
    }

    if (experience >= 5) {
        reward = 5000;
    }

    const hike = (baseSalary * variablePay) + bonus + reward;
    const hikePercentage = (hike / baseSalary) * 100;

    hikeMap.set(name, hikePercentage);
}

for (const [name, hikePercentage] of hikeMap) {
    console.log(`Hike percentage for ${name}: ${hikePercentage.toFixed(2)}%`);
}

 */