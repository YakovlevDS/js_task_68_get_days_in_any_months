// ? Task: Получить количество дней в месяце с любой даты.


// Solution 1
function daysInMonth(month,year) {
    monthNum =  new Date(Date.parse(month +" 1,"+year)).getMonth()+1
    return new Date(year, monthNum, 0).getDate();
}
console.log(daysInMonth("feb", 2015));
//28
console.log('daysInMonth(1, 2008): ', daysInMonth("feb", 2008));
//29

// Solution 2
console.log('new Date(2019,2,0).getDate(): ', new Date(2019,2,0).getDate());
console.log('new Date(2020,2,0).getDate(): ', new Date(2020, 2, 0).getDate());

// Solution 3
const d = (y, m) => new Date(y, m, 0).getDate();
console.log( d(2020, 2) );// 29
console.log(d(2020, 6));// 30

// Solution 4

const getDays= (y, m)=> {
    let isLeapYear = ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0);
    return [31, (isLeapYear ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m];
}
console.log(getDays(2020, 5));

// Solution 5
//m is 1-based, feb = 2
const daysInAnyMonth = (m, y) => 
 31 - (--m ^ 1? m % 7 & 1:  y & 3? 3: y % 25? 2: y & 15? 3: 2);

console.log(daysInAnyMonth(2, 1999)); // February in a non-leap year
console.log(daysInAnyMonth(2, 2000)); // February in a leap year

// Solution 6
function getDayCountOfMonth(year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  }

  return 31;
}
console.log(getDayCountOfMonth(2020, 1));

// ! Explanation: 
