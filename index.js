// Your code here

function createEmployeeRecord(employeeArray) {
    let employeeObj = {
    firstName:employeeArray[0],
    familyName:employeeArray[1],
    title:employeeArray[2],
    payPerHour:employeeArray[3],
    timeInEvents:[],
    timeOutEvents:[],
    }
    return employeeObj;
}

function createEmployeeRecords(employeeArrays) {
    let employeesArray = [];
    for(let i = 0; i < employeeArrays.length; i++){
        let employeeObj = createEmployeeRecord(employeeArrays[i]);
            // firstName:employeeArrays[i][0],
            // familyName:employeeArrays[i][1],
            // title:employeeArrays[i][2],
            // payPerHour:employeeArrays[i][3],
        employeesArray.push(employeeObj);
    }
    return employeesArray;
}

function createTimeInEvent(employeeRecordIn, timeIn) {
    let timeInArray = timeIn.split(" ");
    let timeInObj = {};
    timeInObj.type = "TimeIn";
    timeInObj.date = timeInArray[0];
    timeInObj.hour = Number(timeInArray[1]);
    // let dateIn = timeInArray[0];
    // let hourIn = timeInArray[1];
    employeeRecordIn.timeInEvents.push(timeInObj);
    return employeeRecordIn;
}

function createTimeOutEvent(employeeRecordOut, timeOut) {
    let timeOutArray = timeOut.split(" ");
    let timeOutObj = {};
    timeOutObj.type = "TimeOut";
    timeOutObj.date = timeOutArray[0];
    timeOutObj.hour = Number(timeOutArray[1]);
    employeeRecordOut.timeOutEvents.push(timeOutObj);
    return employeeRecordOut;
}

//stuck here
function hoursWorkedOnDate(employeeRecord, dateIn) {
    let clockIn = -1;
    let clockOut = -1;
    for(const eventIn of employeeRecord.timeInEvents){
        if (eventIn.date === dateIn) {
            clockIn = eventIn.hour;
        }
    }
    for(const eventOut of employeeRecord.timeOutEvents){
        if (eventOut.date === dateIn) {
            clockOut = eventOut.hour;
        } 
    }
    return Math.abs(clockIn - clockOut)/100;
}

function wagesEarnedOnDate(employeeRecord, dateIn) {
    let hours = hoursWorkedOnDate(employeeRecord, dateIn);
    let wage = employeeRecord.payPerHour;
    return hours * wage;
}

function allWagesFor(employeeRecord) {
    let totalPay = 0;
    for (let i = 0; i < employeeRecord.timeInEvents.length; i++){
        let clockInDate = employeeRecord.timeInEvents[i].date;
        let dailyPay = wagesEarnedOnDate(employeeRecord, clockInDate);
        totalPay = totalPay + dailyPay;
    }
    return totalPay;
}

function calculatePayroll(employeeRecords) {
    let payrollTotal = 0;
    for(const employee of employeeRecords){
        let individualPay = allWagesFor(employee);
        payrollTotal = payrollTotal + individualPay;
    }
    return payrollTotal;
}

let myArray = [
    ["samantha", "marberger", "teacher", "20"],
    ["samuel", "marberger", "software developer", "35"]
];
console.log(createEmployeeRecords(myArray));
//console.log(myArray);
//console.log(myArray[0]);
//console.log(createEmployeeRecord(myArray));
//console.log(employeeObj);
