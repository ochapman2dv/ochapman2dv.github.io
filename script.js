let currentRoom = "room1" // set room1 to be default room
let urlParameter = new URLSearchParams(window.location.search).get('page');
// get URL parameter

function goRoom(roomID,roomName) {
    document.getElementById(roomID).style.display = "block";
    document.getElementById(currentRoom).style.display = "none";
    document.title = roomName+" - Oli's House";
    document.getElementById("location").innerHTML = "You're Currently Visiting: "+roomName;
    document.querySelector("link[rel*='icon']").href = "./media/"+roomID+".ico";
    currentRoom = roomID;
    // add current room to url parameter here
    new URLSearchParams(window.location.search).set("room", roomID);
    console.log()
}

function getRoomName(roomID) { // ugly ugly code that gets a room's name from its ID
    if (roomID == 'room1') {
        return "Room 1";
    }
    if (roomID == 'room2') {
        return "Room 2";
    }
    else {
        return null;
    }
}

if (getRoomName(urlParameter) == null) {
    console.log("no parameter found!")
    // oops, no parameter! (puts user to default room)
}

if (urlParameter == "room1") {
    // do nothing, already at default room!
}

else {
    let currentRoom = urlParameter;
    goRoom(urlParameter,getRoomName(urlParameter));
}