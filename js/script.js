// JS/JQUERY FOR CALENDAR AND BOOKING FUNCTIONALITY

const date = new Date();

const renderCalendar = ()=>{

  date.setDate(1);
  const monthDays = document.querySelector(".days");

  // this function displays the calendar according to the number of days in the month. Specifying the day as 0 allows me to get the number of days for the last (live) month.Adding a +1 behind getMonth allows me to get the last day of the current month.The .getDate function allows me to get only the (last) day of the month instead of i.e. Thu Sep 30 2021 00:00:00 GMT+1300 (New Zealand Daylight Time), allowing me to use it in the for loop
  const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

  // This defines the last day of the previous month, which is similar to above except no need to +1 to getMonth
  const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

  // if you set the date to (1), the date.getDay() function shows the day that the new month begins on. This number also coincides with the number of days left from the previous month that we want to display on the calendar before starting the new month.
  // Therefore this variable stores the index number of the first day of the month
  const firstDayIndex = date.getDay();
  // repeat firstDayIndex for lastDayIndex using lastDay but with the .getDay function
  const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
  // this function determines how many days in the next month needs to be displayed by subtracting the lastDayIndex from 7
  const nextDays = 7 - lastDayIndex - 1;



  console.log(date.getDate());
  console.log(firstDayIndex);

  const months =[
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
    "December",
  ];
  // This gets the month from the date function and displays the current (live) month. Cool eh?
  document.querySelector(".date h1").innerHTML
  = months[date.getMonth()];
  // This uses the toDateString to displays the current (live) day. Super cool eh?
  document.querySelector(".date p").innerHTML
  = new Date().toDateString();

  // Declaring a function called days
  let days="";

  // DISPLAYS DAY IN PREV MONTH - This takes the first day index, which determines the number of the days of last month to show, then finds the # of the last day of the previous month and subtracts the firstDayIndex from it. The loop then iterates across all the prevLastDays and displays it in the cal
  for(let i = firstDayIndex; i > 0 ; i--){
    days += `<div class="prev-date">${prevLastDay - i +1}</div>`;
  }

  // DISPLAYS DAYS OF THIS MONTH - using for loop to display all the days in the month using js instead of the commented out HTML
  // the IF statement checks which is the current day *of this month* and highlights it
  for(let i = 1; i <= lastDay; i++){
    if (i === new Date().getDate()&&date.getMonth()=== new Date().getMonth()){
      days += `<div class="today">${i}</div>`;
    }
    else{
      days += `<div>${i}</div>`;
    }
  }



  // DISPLAYS DAYS IN NEXT MONTH - This takes the index of the last day of this month (in this case, 4), which determines the number of the days of last month to show, then finds the # of the last day of the previous month and subtracts the firstDayIndex from it. The loop then iterates across all the prevLastDays and displays it in the cal
  for(let i = 1; i <= nextDays ; i++){
    days += `<div class="next-date">${i}</div>`;
    monthDays.innerHTML = days;
  }


}

// Finally to make the arrows work to show the different months. ()=> calls following function on click.However, these buttons will only work if you render the *whole* calendar, so I've created a global function renderCalendar() that carries out the entire calendar rendering function above.
document.querySelector(".prev").addEventListener("click",()=>{
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
document.querySelector(".next").addEventListener("click",()=>{
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

// If this is not called, then it won't display for the current month
renderCalendar();

// ############################ Animating the Booking process (hardcoded) ######################

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Setting up functions: when I click on any button, hide everything except testy and footer as reset
function hideMain(){
  $(".pop-sect,.video-sect,.section-ELS,.virtual-sect,.section-aff,.masthead").fadeOut(500);
}
function hideAllSuccessMessages(){
  $(".contact-success, .success-message").fadeOut(500);
}
function hideAllSections(){
  $(".cal-section,#booking-section,.booking-details,.contactUs,.aboutUs").fadeOut(500);
}
function hideWhoops(){
  $(".not-complete").fadeOut(500);
}

// call reset functions to start with, and implement the functions in order when specific buttons are pressed.
hideAllSections();
hideAllSuccessMessages();
hideWhoops();

$(".book-butt").click(function(){
  $(".testy-container").fadeOut(500); //because I don't want the testimonial container to show for the booking page
  hideAllSuccessMessages();
  hideAllSections();
  hideMain();
  scrollToTop();
  $(".cal-section").slideDown(500);
});

$("#demo-button").click(function(){
  $("#booking-section").fadeToggle(400);
});

$("#bookingButton").click(function(){
  $(".booking-details").fadeToggle(400);
});

$("#booking-submit").click(function(){
  $(".contact-success").fadeOut(500);
  hideAllSections();
  hideMain();
  scrollToTop();
  $(".success-message").slideDown(500);
});

/* <!-- ############################## ABOUT US SECTION ################################### --> */
// $('.aboutUs').hide();

$(".about-our-story").click(function(){
  hideAllSuccessMessages();
  hideAllSections();
  hideMain();
  scrollToTop();
  $(".aboutUs").slideDown(800);
})
/* <!-- ############################## CONTACT US SECTION ################################### --> */

$(".contact-us").click(function(){
  hideAllSuccessMessages();
  hideAllSections();
  hideMain();
  scrollToTop();
  $(".contactUs").slideDown(800);
})

$("#contact-submit").click(function(){
  hideAllSuccessMessages();
  hideAllSections();
  hideMain();
  scrollToTop();
  $(".contact-success").slideDown(500);
});

// ########################### WHOOPS NOTIFICATION ############################
$(".whoops").click(function(){
  hideAllSuccessMessages();
  hideAllSections();
  hideMain();
  $(".testy-container").fadeOut(500); //because I don't want the testimonial container to show for Whoops! page
  scrollToTop();
  $(".not-complete").slideToggle(500);
});


// This is a bastardised version of JS and jquery that I managed to come up with, that calls all empty # links to a variable that can then direct people to the "Whoops" page
var allLinks = document.querySelectorAll("a[href='#']");

$(allLinks).click(function(){
  hideAllSuccessMessages();
  hideAllSections();
  hideMain();
  $(".testy-container").fadeOut(500); //because I don't want the testimonial container to show for Whoops! page
  scrollToTop();
  $(".not-complete").slideToggle(500);
});
