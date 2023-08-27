// let i = [10, 20, 30, 40, 55];

// 2-dimentional array
// let arr = [
//     [00,01,02],
//     [10,11,12],
//     [20,21,22]
// ];
// console.log(arr[2][1]);
// for (let i=0;i<3;i++)
//     for(let j=0;j<3;j++)
//         console.log(arr[i][j]);

// for (let i=0;i<3;i++)
//     console.log(arr[i][0] + "  " + arr[i][1] + "  " + arr[i][2]);

// for - looping statement
// for (initial; condition; incremental/decremental value)
// 6th table
// 1 to 10 tables
// let tableNo = Number(prompt("Enter Table Number : "));

// for (let tableNo=1; tableNo<=10; tableNo++) {
//     console.log("==================");
//     for (let j=1; j<=10; j++) {
//         console.log(tableNo + " * " + j + " = " + (j*tableNo));
//     }
    
// }
// isNaN(i[j])==false
// i[j]=undefined45
// j<5
// j<=4

// let animals = ['Lion', 'Tiger', 'Elephant', 'Fox', 'Wolf'];
// // for (let animal in animals) {
// //     console.log(animals[animal]);
// // }

// for (let animal of animals)
//     console.log(animal);

let EmpIDs = [1,2,3]
let EmployeeNames = ['rajesh','suresh','Govind']
let salaries = [1000, 5000, 3000]

let EmployeeList = [
    [1, 'rajesh', 1000.01],
    [2, 'suresh', 5000.10],
    [3, 'Govind', 3000.99]
];
let newEmployeeList = [
    {
        EMPid: 'U001', 
        EMPname: 'Balaji',
        EMPsalary: 5000.34
    },
    {
        EMPid: 'U002', 
        EMPname: 'Ragul',
        EMPsalary: 9999.99
    }
]    
for (let employee of EmployeeList) {
    console.log("Emp ID ", employee[0]);
    console.log("Emp Name ", employee[1]);
    console.log("Emp Salary ", employee[2]);
}

// for (let employee of EmployeeList) {
//     // console.log(employee);
//     console.log("Emp ID ", employee[0]);
//     console.log("Emp Name ", employee[1]);
//     console.log("Emp Salary ", employee[2]);
// }