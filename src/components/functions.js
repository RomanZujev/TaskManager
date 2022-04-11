export default function getMonthString(number) {
  let month = "Month";
  switch (number) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "Novermber";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "Month Error Has Occured";
      break;
  }
  return month;
}
//returns total number of days in current years month
function getTotalMonthDays(number) {
  let date = new Date();
  let data = new Date(date.getFullYear(), number + 1, 0).getDate();
  return data;
}
export function checkIfWeekend(date) {
  if (date === 5 || date === 6) {
    return true;
  } else {
    return false;
  }
}
function getPaddingAfter(number) {
  return 7 - (number + 1);
}
//return obj containing YEAR and MONTHS keys, MONTHS filled with arrays of days;
//exmpl MONTH  : [null,null,null,1,2,3,4,5...30]
export function createYearData(yearNumber) {
  let date = new Date();
  let yearObject = {
    year: yearNumber,
    months: [],
  };
  for (let i = 0; i < 12; i++) {
    let month = [];
    //number of days before the first of the month
    let PaddingDaysBefore = new Date(date.getFullYear(), i).getDay();
    //make empty days padding
    for (let j = 0; j < PaddingDaysBefore; j++) {
      month.push(null);
    }
    let days = getTotalMonthDays(i);
    //make the actual days
    for (let l = 0; l < days; l++) {
      month.push({
        date: l + 1,
        weekday: new Date(date.getFullYear(), i, l + 1).getDay() + 1,
      });
    }
    yearObject.months.push(month);
    let PaddingDaysAfter = new Date(date.getFullYear(), i + 1, 0).getDay();

    for (let k = 0; k < getPaddingAfter(PaddingDaysAfter); k++) {
      month.push(null);
    }
  }
  return yearObject;
}
