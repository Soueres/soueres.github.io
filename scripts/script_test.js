window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById("top_info").innerHTML = "Width : " + myWidth + " Height : " + myHeight;
    document.getElementById("top_info").style["margin"] = "0px";
    
    var newFontSize = Math.min(Math.max(1000/myWidth, 1), 1.7);
    var elements = document.getElementsByClassName("button");
    
    for(var i = 0; i < elements.length; ++i) {
        elements[i].style.fontSize = newFontSize + "rem";
    }
};