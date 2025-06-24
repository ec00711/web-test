// Option 1: use function name in the HTML
// I think I like this better
function buttonClick()
{
    document.getElementById("showButton").innerHTML = "this has been clicked before";
}

/*
 const for constants
let for local variables
var for global variables - needed here because we're 
    editing the items that exist in the html
*/
var showButton = document.getElementById("showButton");
var hiddenText = document.getElementById("hiddenText");

// Option 2: Access HTML element and add an event listener to it
// This seems messier - less separation
showButton.addEventListener('click', function()
{
    if(hiddenText.classList.contains("hidden"))
    {
        hiddenText.classList.remove("hidden");
    }
    else
    {
        hiddenText.classList.add("hidden");
    }
})