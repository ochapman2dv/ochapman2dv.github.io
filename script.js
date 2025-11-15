function loadPage1() {
    document.title = "Room 1 - Oli's House";
    document.querySelector("link[rel*='icon']").href = "./media/favicon.ico";
    document.getElementById("room1").style.display = "block";
    document.getElementById("room2").style.display = "none";
    document.getElementById("location").innerHTML = "You're Currently Visiting: Room 1";
}

function loadPage2() {
    document.title = "Room 2 - Oli's House";
    document.querySelector("link[rel*='icon']").href = "./media/favicon2.ico";
    document.getElementById("room1").style.display = "none";
    document.getElementById("room2").style.display = "block";
    document.getElementById("location").innerHTML = "You're Currently Visiting: Room 2";
}

//change loadPage function to take a variable parameters of what page to have displayed
//add page sharing