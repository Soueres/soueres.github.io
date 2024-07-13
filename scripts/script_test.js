window.onresize = adaptFontSize;
window.onload = adaptFontSize;

function adaptFontSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById("top_info").innerHTML = "Width : " + myWidth + " Height : " + myHeight;
    
    /* document.getElementById("top_info").style["margin"] = "0px"; */
    /* var newFontSize = Math.min(Math.max(1000/myWidth, 1), 1.7); */
    
    /* for(var i = 0; i < elements.length; ++i) {
        elements[i].style.fontSize = newFontSize + "rem";
    } */

    if( myWidth <= 700 ) {
        document.getElementById("header-id").style.fontSize = "12px";
    } else if (myWidth > 700) {
        document.getElementById("header-id").style.fontSize = "medium";
    }
};