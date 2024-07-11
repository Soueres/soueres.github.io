window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById("top_info").style["margin"] = "0px";
    document.getElementById("top_info").innerHTML = "Width : " + myWidth + " Height : " + myHeight
};