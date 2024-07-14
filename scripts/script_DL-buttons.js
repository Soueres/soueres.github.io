function testfunction(number) {
    
    const toHide = document.getElementsByClassName("DL-button");
    const toShow = document.getElementById("b" + number);

    if (toShow.style.display === "none") {
        for(let i = 0 ; i < toHide.length ; i++) {
            toHide[i].style.display = "none";
        }
        toShow.style.display = "flex";
    } else {
        toShow.style.display = "none";
    }
  } 