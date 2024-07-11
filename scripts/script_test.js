window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById("btt").style.fontSize = Math.min(Math.max(1000/myWidth, 1), 1.7) + "rem";
    document.getElementById("top_info").innerHTML = "Width : " + myWidth + " Height : " + myHeight;
    document.getElementById("top_info").style["margin"] = "0px";
};