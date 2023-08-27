let EmployeeList = [
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
    let table = document.getElementById('EmpTable');
    
    let tableTR = document.createElement('tr');
    
    let tableTD1 = document.createElement('td');
    let tableTD2 = document.createElement('td');
    let tableTD3 = document.createElement('td');

    tableTD1.innerHTML = employee.EMPid;
    tableTD2.innerHTML = employee.EMPname;
    tableTD3.innerHTML = employee.EMPsalary;

    tableTR.appendChild(tableTD1);
    tableTR.appendChild(tableTD2);
    tableTR.appendChild(tableTD3);
    
    table.appendChild(tableTR);


}