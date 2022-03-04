let isNS = navigator.appName == "Netscape" ? 1 : 0;
let EnableRightClick = 0;
if (isNS) document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);

function miscHandler() {
    if (EnableRightClick == 1) {
        return true;
    } else {
        return false;
    }
}
function mouseHandler(e) {
    if (EnableRightClick == 1) {
        return true;
    }
    let myevent = isNS ? e : event;
    let eventbutton = isNS ? myevent.which : myevent.button;
    if (eventbutton == 2 || eventbutton == 3) return false;
}
function keyHandler(e) {
    let myevent = isNS ? e : window.event;
    if (myevent.keyCode == 96) EnableRightClick = 1;
    return;
}

document.oncontextmenu = miscHandler;
document.onkeypress = keyHandler;
document.onmousedown = mouseHandler;
document.onmouseup = mouseHandler;
