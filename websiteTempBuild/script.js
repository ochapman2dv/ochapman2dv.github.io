function loadPage(pageLoaded,favicon) {
    
    var pages = document.getElementsByClassName('main'); //get array of elements with class "main"
    for(i = 0; i < pages.length; i++) { //to each member of this array,
        pages[i].style.display = "none"; //set the page's visibility to be hidden
    }
    
    document.getElementById(pageLoaded).style.display = "block"; //set the visibility of the loaded page to be visible
    document.getElementById("location").innerHTML = "You're Currently Visiting: ",pageLoaded; //set the location indicator
    document.title = pageLoaded," - Oli's House";
    document.querySelector("link[rel*='icon']").href = "./media/",favicon;

    
}

//add page linking