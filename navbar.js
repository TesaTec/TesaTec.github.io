
document.addEventListener("mousemove", updateDisplay, false);

/*Checks whenever it should close or open the navbar */
function updateDisplay(event) {
    if(event.x <= 5) {
        openNav();
    } else if( event.x >= 251) {
        closeNav();
    }
}

/* Set the width of the side navigation to 250px and the left margin of the page content 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft  = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft  = "0";
}