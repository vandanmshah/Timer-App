var interval;
function checkTime() {
    if (interval) {
        document.getElementsByClassName("text")[0].innerHTML = "Your final text is :- " + document.getElementsByClassName("inputStr")[0].value;
        clearInterval(interval);
    }
}

function pageLoaded () {
    document.getElementsByClassName("inputStr")[0].onkeyup = function() {
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(checkTime, 5000);
    };
}