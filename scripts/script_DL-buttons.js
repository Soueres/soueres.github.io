function toggle_on_click() {

    /* console.log(this.id, this.className, "query called : ","#" + this.id + " .toggle-button"); */
    
    const toSwitch = document.querySelector("#" + this.id + " .toggle-button");
    const toSwitchColor = document.querySelector("#" + this.id);

    if (toSwitch.style.visibility === "hidden") {

        for (let i=1 ; i<=24 ; i++) {
            document.querySelector("#bt" + i + " .toggle-button").style.setProperty('visibility', 'hidden');
            document.querySelector("#bt" + i).removeAttribute("style");
        }

        toSwitch.style.setProperty('visibility', 'visible');
        toSwitchColor.style.setProperty('background-color', '#d12b2b');
        
    } else {

        for (let i=1 ; i<=24 ; i++) {
           document.querySelector("#bt" + i).removeAttribute("style");
        }

        toSwitch.style.setProperty('visibility', 'hidden');
    }
}  

for (let i=1 ; i<=24 ; i++) {
    document.querySelector("#bt" + i).addEventListener("click", toggle_on_click);
}
