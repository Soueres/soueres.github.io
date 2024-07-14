function testfunction(number) {
    
    var toSwitch = document.getElementById("b" + number);

    if (toSwitch.style.display === "none") {
        toSwitch.style.display = "flex";
    } else {
        toSwitch.style.display = "none";
    }
  } 