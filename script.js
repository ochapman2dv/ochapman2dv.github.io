let currentRoom = "room1" // set room1 to be default room
let urlParameter = new URLSearchParams(window.location.search).get("page"); // get initial URL parameter

// map of all room IDs and their names
const roomMap = new Map([
    ["room1", "Room 1"],
    ["room2", "Room 2"]

]);

function goRoom(roomID) {

    roomName = getRoomName(roomID) // get room ID's associated name

    document.getElementById(roomID).style.display = "block"; // show page content
    document.getElementById(currentRoom).style.display = "none"; // hide other page content
    document.title = roomName+" - Oli's House"; // change title of page
    document.getElementById("location").innerHTML = "You're Currently Visiting: "+roomName; // change location text
    document.querySelector("link[rel*='icon']").href = "./media/"+roomID+".ico"; // change favicon
    currentRoom = roomID; // set currentRoom to roomID
    

    link = new URL(window.location.href), link.searchParams.set("page", currentRoom);
    window.history.replaceState(null, "", link); // update url with new page link
}


function getRoomName(roomID) {

if (roomMap.has(roomID)) {
    return (roomMap.get(roomID));
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


// room isn't really a word to me anymore
// hope you enjoyed my messy code xx