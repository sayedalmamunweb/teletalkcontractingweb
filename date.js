Window.updateTime("load",updateTime);
function updateTime() {
  var dateInfo = new Date();

  /* time Start */
  var hr,
    _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
    sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
    ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

  // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
  if (dateInfo.getHours() == 0) {
    hr = 12;
  } else if (dateInfo.getHours() > 12) {
    hr = dateInfo.getHours() - 12;
  } else {
    hr = dateInfo.getHours();
  }

  var currentTime = hr + ":" + _min + ":" + sec;

  // time End
  document.getElementsByClassName("hms")[0].innerHTML = currentTime;
  document.getElementsByClassName("ampm")[0].innerHTML = ampm;

  /* date start */
  var dow = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
    month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    year = dateInfo.getFullYear();
    day = dateInfo.getDate();

  // date End

  var currentDate = dow[dateInfo.getDay()] + ", " + day + "  " + month[dateInfo.getMonth()]+ " "+year+" ";

  document.getElementsByClassName("date")[0].innerHTML = currentDate;
};
// print time and date once, then update them every second
updateTime();
setInterval(function () {
  updateTime()
}, 1000);