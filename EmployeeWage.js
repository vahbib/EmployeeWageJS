console.log("Welcome to Employee Wage Program");
//UC 6

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let employeeDailyHrsMap = new Map();
let employeeDailyWageMap = new Map();

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

function calcDailyWage(empHrs) 
{
    return empHrs * WAGE_PER_HOUR;
}
    
while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) 
{
     totalWorkingDays++; 
     let empCheck = Math.floor(Math.random() * 10) % 3; 
     let empHrs = demo(empCheck); 
     empDailyWageArr.push(calcDailyWage(empHrs));
     totalEmpHrs += empHrs;

     employeeDailyHrsMap.set(totalWorkingDays,empHrs);
     employeeDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}
console.log("Daily Wage Array: "+empDailyWageArr);
console.log(employeeDailyWageMap);
console.log(employeeDailyHrsMap);