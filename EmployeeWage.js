console.log("Welcome to Employee Wage Program");
// UC1
// const IS_ABSENT = 0;
// let random = Math.floor(Math.random()* 10) % 2;
// if(random == IS_ABSENT) {
//     console.log("Employee is Absent");
//     return;
// }
// else {
//     console.log("Employee is Present");
// }
//UC 2
// const IS_PART_TIME = 1;
// const IS_FULL_TIME = 2;
// const PART_TIME_HOURS = 4;
// const FULL_TIME_HOURS = 8;
// const WAGE_PER_HOUR = 20;

// let empHrs = 0;
// let options = Math.floor(Math.random() * 10) % 3;

// switch (options) {
//     case IS_FULL_TIME:
//         empHrs = FULL_TIME_HOURS;
//         break;
//     case IS_PART_TIME:
//         empHrs = PART_TIME_HOURS;
//         break;
//     default:
//         empHrs = 0;
// } 
// let empWage = empHrs * WAGE_PER_HOUR;
// console.log("Employee wage is ", empWage);

// UC 3
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// let empHrs = 0;
// let options = Math.floor(Math.random() * 10) % 3;
// demo(options);

// function demo(options) {
//     switch (options) {
//         case IS_FULL_TIME:
//             empHrs = FULL_TIME_HOURS;
//             break;
//         case IS_PART_TIME:
//             empHrs = PART_TIME_HOURS;
//             break;
//         default:
//             empHrs = 0;
//     } 
//     let empWage = empHrs * WAGE_PER_HOUR;
//     console.log("Employee wage is ", empWage);
// }
// UC4

function demo(options){
    switch(options){
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
     
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        default:
            return 0;
    }
}
let empHrs = 0;
let WORKING_DAYS = 20;

// for(let day = 0; day < WORKING_DAYS ; day ++){
//     let options = Math.floor(Math.random() * 10) % 3;
//     empHrs = demo(options);
//     let empWage = empHrs * WAGE_PER_HOUR;
//     console.log("Day : "+day+" Employee wage is",empWage);
// }

//UC5
const MAX_HOURS_IN_MONTH = 100;
let Total_EMP_HOURS = 0;
let TOTAL_EMP_WAGE = 0;
let TOTAL_WORKING_DAYS = 0;
while (Total_EMP_HOURS < MAX_HOURS_IN_MONTH && TOTAL_WORKING_DAYS < WORKING_DAYS ) {
    TOTAL_WORKING_DAYS++;
    let options = Math.floor(Math.random() * 10) % 3;
    empHrs = demo(options);
    Total_EMP_HOURS += empHrs;
    let empWage = empHrs * WAGE_PER_HOUR;
        console.log("Day : "+TOTAL_WORKING_DAYS+ " | Total Hours "+Total_EMP_HOURS +" | Employee wage is:",empWage);
}
let totalEmpWage = Total_EMP_HOURS * WAGE_PER_HOUR;
console.log("Total Employee Wage: ",totalEmpWage);
