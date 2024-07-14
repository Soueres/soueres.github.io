window.onresize = adaptFontSize;
window.onload = adaptFontSize;

function adaptFontSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById("top_info").innerHTML = "Width : " + myWidth + " Height : " + myHeight;
};