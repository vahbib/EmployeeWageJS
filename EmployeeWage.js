console.log("Welcome to Employee Wage Program");
//UC 7

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
}
console.log("Daily Wage Array: "+empDailyWageArr);

// UC 7A: Calc total Wage using Array forEach or reduce method
let totalEmployeeWage = 0;
function sum (dailyWage) {
    totalEmployeeWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Addition of wages Using For Each= " +totalEmployeeWage);

function wages(totalEmployeeWage, dailyWage) {
    return totalEmployeeWage+dailyWage;
}
console.log("Wage Using Reduce "+ empDailyWageArr.reduce(wages, 0));

// UC 7B: Show the Day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return "\nDay: "+dailyCntr+" | Wage: "+dailyWage;
}
let mapDayWithWageArray = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage using Map: "+ mapDayWithWageArray);

//UC 7C: Show Days when Full time wage of 160 were earned using filter function
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArray.filter(fullTimeWage);
console.log("Daily Wage Filter When Fulltime Wage Earned: "+ fullDayWageArr);

//UC 7D: Find the first occurrence when Full Time Wage was earned using find function

console.log("First Time Fulltime Wage was earned on Day: "+ mapDayWithWageArray.find(fullTimeWage));

//UC 7E: Check if Every Element of Full Time Wage is truly holding Full time wage
console.log("CHeck all elements have full time Wage: "+ fullDayWageArr.every(fullTimeWage));

// UC 7F: Check if there is any Part Time Wage
function partTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
let partTimeDayWageArr = mapDayWithWageArray.filter(partTimeWage);
console.log("Daily Wage Filter When Part-time Wage Earned: "+ partTimeDayWageArr);

// UC 7G: Find the number of days the Employee Worked

function totalWorkingDay(noOfDay, dailyWage) {
    if(dailyWage >0) return noOfDay+1;
    return noOfDay;
}
console.log("No of days when employee worked: " + empDailyWageArr.reduce(totalWorkingDay, 0));