var keycodes = [{"id":8,"name":"Backspace"},{"id":9,"name":"Tab"},{"id":13,"name":"Enter"},{"id":13,"name":"NumppadEnter"},{"id":16,"name":"ShiftLeft"},{"id":16,"name":"ShiftRight"},
                {"id":17,"name":"ControlLeft"},{"id":17,"name":"ControlRight"},{"id":18,"name":"AltLeft"},{"id":18,"name":"AltRight"},{"id":19,"name":"PauseBreak"},
                {"id":20,"name":"CapsLock"},{"id":27,"name":"Escape"},{"id":32,"name":"Space"},{"id":33,"name":"PageUp"},{"id":34,"name":"PageDown"},{"id":35,"name":"End"},{"id":36,"name":"Home"},
                {"id":37,"name":"ArrowLeft"},{"id":38,"name":"ArrowUp"},{"id":39,"name":"ArrowRight"},{"id":40,"name":"ArrowDown"},{"id":44,"name":"PrintScreen"},{"id":45,"name":"Insert"},
                {"id":46,"name":"Delete"},{"id":48,"name":"Digit0"},{"id":49,"name":"Digit1"},{"id":50,"name":"Digit2"},{"id":51,"name":"Digit3"},{"id":52,"name":"Digit4"},{"id":53,"name":"Digit5"},
                {"id":54,"name":"Digit6"},{"id":55,"name":"Digit7"},{"id":56,"name":"Digit8"},{"id":57,"name":"Digit9"},{"id":65,"name":"KeyA"},{"id":66,"name":"KeyB"},{"id":67,"name":"KeyC"},
                {"id":68,"name":"KeyD"},{"id":69,"name":"KeyE"},{"id":70,"name":"KeyF"},{"id":71,"name":"KeyG"},{"id":72,"name":"KeyH"},{"id":73,"name":"KeyI"},{"id":74,"name":"KeyJ"},{"id":75,"name":"KeyK"},
                {"id":76,"name":"KeyL"},{"id":77,"name":"KeyM"},{"id":78,"name":"KeyN"},{"id":79,"name":"KeyO"},{"id":80,"name":"KeyP"},{"id":81,"name":"KeyQ"},{"id":82,"name":"KeyR"},{"id":83,"name":"KeyS"},
                {"id":84,"name":"KeyT"},{"id":85,"name":"KeyU"},{"id":86,"name":"KeyV"},{"id":87,"name":"KeyW"},{"id":88,"name":"KeyX"},{"id":89,"name":"KeyY"},{"id":90,"name":"KeyZ"},{"id":91,"name":"OSLeft"},
                {"id":91,"name":"OSRight"},{"id":93,"name":"ContextMenu"},{"id":96,"name":"Numpad0"},{"id":97,"name":"Numpad1"},{"id":98,"name":"Numpad2"},{"id":99,"name":"Numpad3"},
                {"id":100,"name":"Numpad4"},{"id":101,"name":"Numpad5"},{"id":102,"name":"Numpad6"},{"id":103,"name":"Numpad7"},{"id":104,"name":"Numpad8"},{"id":105,"name":"Numpad9"},
                {"id":106,"name":"NumpadMultiply"},{"id":107,"name":"NumpadAdd"},{"id":109,"name":"NumpadSubtract"},{"id":110,"name":"NumpadDecimal"},{"id":111,"name":"NumpadDivide"},
                {"id":112,"name":"F1"},{"id":113,"name":"F2"},{"id":114,"name":"F3"},{"id":115,"name":"F4"},{"id":116,"name":"F5"},{"id":117,"name":"F6"},{"id":118,"name":"F7"},
                {"id":119,"name":"F8"},{"id":120,"name":"F9"},{"id":121,"name":"F10"},{"id":122,"name":"F11"},{"id":123,"name":"F12"},{"id":144,"name":"NumLock"},{"id":145,"name":"ScrollLock"},
                {"id":59,"name":"Semicolon"},{"id":187,"name":"Equal"},{"id":188,"name":"Comma"},{"id":173,"name":"Minus"},{"id":190,"name":"Period"},{"id":191,"name":"Slash"},
                {"id":192,"name":"Backquote"},{"id":219,"name":"BracketLeft"},{"id":220,"name":"Backslash"},{"id":221,"name":"BracketRight"},{"id":222,"name":"Quote"}];

document.addEventListener("click", (event) => {

    let which = document.getElementById("output__which");
    let code = document.getElementById("output__code");

    //To Do
    let key = document.getElementById("output__key");
    let location = document.getElementById("output__location");

		if (event.target.dataset.showcode != undefined) {
    		let value = event.target.id;
    		for (let i = 0; i <= keycodes.length; i++) {
        	if (value == keycodes[i]['name']) {
            which.innerHTML = keycodes[i]['id'];
            code.innerHTML = value;
          }
        }
    }
});

document.addEventListener("keyup", (event) => {
    let value = event.which;
    let text = document.getElementById("output__which");
    text.innerHTML = value;
});

document.addEventListener("keyup", (event) => {
    let value = event.code;
    let text = document.getElementById("output__code");
    text.innerHTML = value;
});

document.addEventListener("keyup", (event) => {
  let value = event.key;
  let which = event.which;
  let text = document.getElementById("output__key");
  if (which == 32) {
    text.innerHTML = "(space character)"; 
  } else {
    text.innerHTML = value;
  }
});

document.addEventListener("keyup", (event) => {
  let value = event.location;
  let text = document.getElementById("output__location");
  text.innerHTML = value;
});
