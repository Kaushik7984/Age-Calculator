let dob = document.getElementById("birthDate");
let currentDate = document.getElementById("currentDate");
let output = document.getElementById("output");

document.getElementById("Calculatebtn").addEventListener("click", () => {
  if (dob.value === "" || currentDate.value === "") {
    output.innerHTML = "Please select Date";
  } else {
    calculateAgeDifference(dob.value, currentDate.value);
  }
});

function calculateAgeDifference(start, end) {
  // console.log(start);
  let dobYear = parseInt(start.substring(0, 4), 10); // base 10
  // console.log(dobYear)
  let dobMonth = parseInt(start.substring(5, 7), 10);
  let dobDate = parseInt(start.substring(8, 10), 10);
  let currentYear = parseInt(end.substring(0, 4), 10); // base 10
  let currentMonth = parseInt(end.substring(5, 7), 10);
  let currentDate = parseInt(end.substring(8, 10), 10);

  //year diffrence
  let yearAgeDiff = currentYear - dobYear;

  //month diffrence
  let monthAgeDiff;

  if (currentMonth >= dobMonth) {
    monthAgeDiff = currentMonth - dobMonth;
  } else {
    yearAgeDiff--;
    monthAgeDiff = 12 + currentMonth - dobMonth;
  }

  //days diffrence
  let dateAgeDiff;

  if (currentDate >= dobDate) {
    dateAgeDiff = currentDate - dobDate;
  } else {
    console.log("working");
    monthAgeDiff--;

    noOfMonthInDOb = daysInMonth(dobMonth, dobYear);
    function daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    }

    dateAgeDiff = noOfMonthInDOb + currentDate - dobDate;

    // case when monthAgeDiff goes negative
    if (monthAgeDiff < 0) {
      monthAgeDiff = 11;
      yearAgeDiff--;
    }
  }

  output.innerHTML =
    yearAgeDiff + "Years, " + monthAgeDiff + "Months, " + dateAgeDiff + "Days";

  // console.log(output);
}
