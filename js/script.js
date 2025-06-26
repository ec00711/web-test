// Set the date we're counting down to
var countDownDate = new Date("July 1, 2025 19:57:00").getTime();
var startTime = new Date("July 1, 2025 19:45:00").getTime();

// Update the count down every 1 second
var myInterval = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  if(now < startTime){
    document.getElementById("clock").innerHTML = "Not yet...";
    return;
  }

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(myInterval);
    document.getElementById("clock").innerHTML = "TIME UP";
  }
}, 1000);