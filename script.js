// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDate = dayjs();
$('#currentDay').text(currentDate.format('dddd, MMMM DD, YYYY'));


  var timeShow = ()=> {
//finding the current hour through below
var currentTime = new Date().getHours();
console.log(currentTime);


$(".time-block").each(function() {
  var timeBlock = parseInt($(this).attr("id"));
  console.log(currentTime, timeBlock);
  console.log($(this))

  if (currentTime === timeBlock){
    $(this).addClass("present");
    $(this).removeClass(" past future");
  }
  else if(currentTime < timeBlock){
    $(this).addClass("future");
    $(this).removeClass("past present");
  }
  else {
    $(this).addClass("past");
    $(this).removeClass("present future");
  }
})
  }

var startZone = ()=> {
  timeShow();

$('.saveBtn').on('click', function(){

  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
})

// for (let id = 9; id < 17; id++) {
//   $("id[i] .description").val(localStorage.getItem("id[i"));
//this for loop did not work and i initiated the individual localstorage for each.
// }


$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

}

startZone();




// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.