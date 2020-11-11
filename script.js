// -------------------------------------------------- EVENT LISTENERS -------------------------------------------------- //

// Event listener for virtual keyboard button click.
document.addEventListener("click", (event) => {

    let element = event.target.closest(".key");

    if (!element) return;
    if (!document.querySelector(".keyboard-keys").contains(element)) return;

    createRipple(event, element);

    // Select DOM elements.
    let which = document.getElementById("output__which");
    let code = document.getElementById("output__code");
    let key = document.getElementById("output__key");
    let location = document.getElementById("output__location");

    // If user clicks on virtual keyboard key, then display the relevant KeyboardEvent properties.
		if (event.target.dataset.showcode != undefined) {

        // Element id's are named after the KeyboardEvent.code property.
        let elementID = event.target.id;

        // Display KeyboardEvent properties.
        code.innerHTML = keycodes[elementID]['code'];
        key.innerHTML = keycodes[elementID]['key']
        which.innerHTML = keycodes[elementID]['id'];
        location.innerHTML = keycodes[elementID]['location'];

        // Edge case for space bar button click on virtual keyboard.
        if (key.innerHTML == "(space character)") {
          
          key.style.color = "rgba(0, 0, 0, 0.1)";

        }

    }

});

// Event listener for keyboard button press.
document.addEventListener("keydown", (event) => {

    // Prevent keyboard event if key is held down.
    if (event.repeat) { return; }

    // Select DOM elements.
    let which = document.getElementById("output__which");
    let code = document.getElementById("output__code");
    let key = document.getElementById("output__key");
    let location = document.getElementById("output__location");

    // Display KeyboardEvent properties.
    which.innerHTML = event.which;
    code.innerHTML = event.code;
    location.innerHTML = event.location;

    // Edge case for space bar key press.
    if (event.code == "Space") {

      key.innerHTML = "(space character)"
      key.style.color = "rgba(186, 178, 181, 0.25)";

    } else {

      key.style.color = "#FFF";
      key.innerHTML = event.key;
      
    }

    // Visually indiate on the virtual keyboard which button the user pressed.
    displayKeyPress(document.getElementById(event.code.toLowerCase()));

});

// -------------------------------------------------- FUNCTION DEFINITIONS -------------------------------------------------- //

// Visually indicates which key was pressed on the keyboard.
function displayKeyPress(element) {

  element.style.background = "rgb(0, 200, 255)";
  setTimeout(() => (element.style.background = ""), 100);

}

function createRipple(event, key) {

  const container = document.querySelector(".keyboard-keys");
  const section = document.querySelector(".keyboard-outer-flex-container");
  const wrapper = createWrapper(key);
  const circle = document.createElement("span");
  const diameter = Math.max(key.clientWidth, key.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (container.offsetLeft + key.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (container.offsetTop + section.offsetTop + key.offsetTop + radius)}px`;
  // console.log(`event.clientX: ${event.clientX}px` + `event.clientY: ${event.clientY}px `)
  circle.classList.add("ripple");

  wrapper.append(circle);
  key.append(wrapper);

  setTimeout(() => {

    key.removeChild(key.querySelector("#wrapper"));

  }, 1000)

}

function createWrapper(key) {

  const keyboard = document.querySelector(".keyboard-keys")
  const container = document.querySelector(".keyboard-outer-flex-container")
  const elemWrapper = document.createElement("div");
  elemWrapper.style.position = "fixed";
  elemWrapper.style.width = `${key.clientWidth}px`;
  elemWrapper.style.height = `${key.clientHeight}px`;
  // Adding 2px to clear the 2px border on top and left sides.
  elemWrapper.style.left = `${key.offsetLeft + keyboard.offsetLeft + 2}px`;
  elemWrapper.style.top = `${key.offsetTop + container.offsetTop + keyboard.offsetTop + 2}px`;
  // console.log(`${key.style.borderWidth}`)
  elemWrapper.style.borderRadius = "5px";
  // console.log(`key: ${key.offsetTop}px ` + `container: ${container.offsetTop}px`)
  elemWrapper.style.background = "transparent";
  elemWrapper.style.overflow = "hidden";
  elemWrapper.id = "wrapper";
  
  return elemWrapper;

}

// -------------------------------------------------- GLOBAL VARIABLES -------------------------------------------------- //

// Object containing all relevant KeyboardEvent properties.
let keycodes = { backspace: {id: 8, code: "Backspace", key: "Backspace", location: 0}, tab: {id: 9, code: "Tab", key: "Tab", location: 0}, enter: {id: 13, code: "Enter", key: "Enter", location: 0},
                 numpadenter: {id: 13, code: "NumpadEnter", key: "NumpadEnter", location: 3}, shiftleft: {id: 16, code: "ShiftLeft", key: "ShiftLeft", location: 1},
                 shiftright: {id: 16, code: "ShiftRight", key: "ShiftRight", location: "2"}, controlleft: {id: 17, code: "ControlLeft", key: "Control", location: 1},
                 controlright: {id: 17, code: "ControlRight", key: "Control", location: "2"}, altleft: {id: 18, code: "AltLeft", key: "Alt", location: 1}, 
                 altright: {id: 18, code: "AltRight", key: "Alt", location: "2"}, pausebreak: {id: 19, code: "PauseBreak", key: "Pause/Break", location: 0}, 
                 capslock: {id: 20, code: "CapsLock", key: "CapsLock", location: 0}, escape: {id: 27, code: "Escape", key: "Escape", location: 0},
                 space: {id: 32, code: "Space", key: "(space character)", location: 0}, pageup: {id: 33, code: "PageUp", key: "PageUp", location: 0},
                 pagedown: {id: 34, code: "PageDown", key: "PageDown", location: 0}, end: {id: 35, code: "End", key: "End", location: 0}, home: {id: 36, code: "Home", key: "Home", location: 0},
                 arrowleft: {id: 37, code: "ArrowLeft", key: "ArrowLeft", location: 0}, arrowup: {id: 38, code: "ArrowUp", key: "ArrowUp", location: 0}, arrowright: {id: 39, code: "ArrowRight", 
                 key: "ArrowRight", location: 0}, arrowdown: {id: 40, code: "ArrowDown", key: "ArrowDown", location: 0}, printscreen: {id: 44, code: "PrintScreen", key: "Print Screen", location: 0}, 
                 scroll: {id: 45, code: "Insert", key: "Insert", location: 0}, delete: {id: 46, code: "Delete", key: "Delete", location: 0}, digit0: {id: 48, code: "Digit0", key: "0", location: 0}, 
                 digit1: {id: 49, code: "Digit1", key: "1", location: 0}, digit2: {id: 50, code: "Digit2", key: "2", location: 0}, digit3: {id: 51, code: "Digit3", key: "3", location: 0}, 
                 digit4: {id: 52, code: "Digit4", key: "4", location: 0}, digit5: {id: 53, code: "Digit5", key: "5", location: 0}, digit6: {id: 54, code: "Digit6", key: "6", location: 0}, 
                 digit7: {id: 55, code: "Digit7", key: "7", location: 0}, digit8: {id: 56, code: "Digit8", key: "8", location: 0}, digit9: {id: 57, code: "Digit9", key: "9", location: 0},
                 keya: {id: 65, code: "KeyA", key: "a", location: 0}, keyb: {id: 66, code: "KeyB", key: "b", location: 0}, keyc: {id: 67, code: "KeyC", key: "c", location: 0}, 
                 keyd: {id: 68, code: "KeyD", key: "d", location: 0}, keye: {id: 69, code: "KeyE", key: "r", location: 0}, keyf: {id: 70, code: "KeyF", key: "f", location: 0}, 
                 keyg: {id: 71, code: "KeyG", key: "g", location: 0}, keyh: {id: 72, code: "KeyH", key: "h", location: 0}, keyi: {id: 73, code: "KeyI", key: "i", location: 0}, 
                 keyj: {id: 74, code: "KeyJ", key: "j", location: 0}, keyk: {id: 75, code: "KeyK", key: "k", location: 0}, keyl: {id: 76, code: "KeyL", key: "l", location: 0},
                 keym: {id: 77, code: "KeyM", key: "m", location: 0}, keyn: {id: 78, code: "KeyN", key: "n", location: 0}, keyo: {id: 79, code: "KeyO", key: "o", location: 0}, 
                 keyp: {id: 80, code: "KeyP", key: "p", location: 0}, keyq: {id: 81, code: "KeyQ", key: "q", location: 0}, keyr: {id: 82, code: "KeyR", key: "r", location: 0}, 
                 keys: {id: 83, code: "KeyS", key: "s", location: 0}, keyt: {id: 84, code: "KeyT", key: "t", location: 0}, keyu: {id: 85, code: "KeyU", key: "u", location: 0}, 
                 keyv: {id: 86, code: "KeyV", key: "v", location: 0}, keyw: {id: 87, code: "KeyW", key: "w", location: 0}, keyx: {id: 88, code: "KeyX", key: "x", location: 0},
                 keyy: {id: 89, code: "KeyY", key: "y", location: 0}, keyz: {id: 90, code: "KeyZ", key: "", location: 0}, osleft: {id: 91, code: "OSLeft", key: "OS", location: 1}, 
                 osright: {id: 91, code: "OSRight", key: "OS", location: "2"}, contextmenu: {id: 93, code: "ContextMenu", key: "ContextMenu", location: 0}, numpad0: {id: 96, code: "Numpad0", key: "0", location: 3}, 
                 numpad1: {id: 97, code: "Numpad1", key: "1", location: 3}, numpad2: {id: 98, code: "Numpad2", key: "2", location: 3}, numpad3: {id: 99, code: "Numpad3", key: "3", location: 3}, 
                 numpad4: {id: 100, code: "Numpad4", key: "4", location: 3}, numpad5: {id: 101, code: "Numpad5", key: "5", location: 3}, numpad6: {id: 102, code: "Numpad6", key: "6", location: 3}, 
                 numpad7: {id: 103, code: "Numpad7", key: "7", location: 3}, numpad8: {id: 104, code: "Numpad8", key: "8", location: 3}, numpad9: {id: 105, code: "Numpad9", key: "9", location: 3}, 
                 numpadmultiply: {id: 106, code: "NumpadMultiply", key: "*", location: 3}, numpadadd: {id: 107, code: "NumpadAdd", key: "+", location: 3}, 
                 numpadsubtract: {id: 109, code: "NumpadSubtract", key: "-", location: 3}, numpaddecimal: {id: 110, code: "NumpadDecimal", key: ".", location: 3}, 
                 numpaddivide: {id: 111, code: "NumpadDivide", key: "/", location: "/"}, f1: {id: 112, code: "F1", key: "F1", location: 0}, f2: {id: 113, code: "F2", key: "F2", location: 0}, 
                 f3: {id: 114, code: "F3", key: "F3", location: 0}, f4: {id: 115, code: "F4", key: "F4", location: 0}, f5: {id: 116, code: "F5", key: "F5", location: 0}, 
                 f6: {id: 117, code: "F6", key: "F6", location: 0}, f7: {id: 118, code: "F7", key: "F7", location: 0}, f8: {id: 119, code: "F8", key: "F8", location: 0}, 
                 f9: {id: 120, code: "F9", key: "F9", location: 0}, f10: {id: 121, code: "F10", key: "F10", location: 0}, f11: {id: 122, code: "F11", key: "F11", location: 0},
                 f12: {id: 123, code: "F12", key: "F12", location: 0}, numlock: {id: 144, code: "NumLock", key: "NumLock", location: 0}, scrolllock: {id: 145, code: "ScrollLock", key: "ScrollLock", location: 0},
                 semicolon: {id: 59, code: "Semicolon", key: ";", location: 0}, equal: {id: 187, code: "Equal", key: "=", location: 0}, comma: {id: 188, code: "Comma", key: ",", location: 0},
                 minus: {id: 173, code: "Minus", key: "-", location: 0}, period: {id: 190, code: "Period", key: ".", location: 0}, slash: {id: 191, code: "Slash", key: "/", location: 0},
                 backquote: {id: 192, code: "Backquote", key: "`", location: 0}, bracketleft: {id: 219, code: "BracketLeft", key: "[", location: 0}, backslash: {id: 220, code: "Backslash", key: "\\", location: 0},
                 bracketright: {id: 221, code: "BracketRight", key: "]", location: 0}, quote: {id: 222, code: "Quote", key: "'", location: 0} };