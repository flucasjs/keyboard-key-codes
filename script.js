var keycodes = [{"id":8,"name":"backspace"},{"id":9,"name":"tab"},{"id":13,"name":"enter"},{"id":13,"name":"numpadenter"},{"id":16,"name":"leftshift"},{"id":16,"name":"rightshift"},
{"id":17,"name":"leftctrl"},{"id":17,"name":"rightcontrol"},{"id":17,"name":"rightcontrol"},{"id":18,"name":"leftalt"},{"id":18,"name":"rightalt"},{"id":19,"name":"pausebreak"},
                {"id":20,"name":"capslock"},{"id":27,"name":"esc"},{"id":32,"name":"spacebar"},{"id":33,"name":"pageup"},{"id":34,"name":"pagedown"},{"id":35,"name":"end"},{"id":36,"name":"home"},
                {"id":37,"name":"leftarrow"},{"id":38,"name":"uparrow"},{"id":39,"name":"rightarrow"},{"id":40,"name":"downarrow"},{"id":44,"name":"printscreen"},{"id":45,"name":"insert"},
                {"id":46,"name":"delete"},{"id":48,"name":"zero"},{"id":49,"name":"one"},{"id":50,"name":"two"},{"id":51,"name":"three"},{"id":52,"name":"four"},{"id":53,"name":"five"},
                {"id":54,"name":"six"},{"id":55,"name":"seven"},{"id":56,"name":"eight"},{"id":57,"name":"nine"},{"id":65,"name":"a"},{"id":66,"name":"b"},{"id":67,"name":"c"},
                {"id":68,"name":"d"},{"id":69,"name":"r"},{"id":70,"name":"f"},{"id":71,"name":"g"},{"id":72,"name":"h"},{"id":73,"name":"i"},{"id":74,"name":"j"},{"id":75,"name":"k"},
                {"id":76,"name":"l"},{"id":77,"name":"m"},{"id":78,"name":"n"},{"id":79,"name":"o"},{"id":80,"name":"p"},{"id":81,"name":"q"},{"id":82,"name":"r"},{"id":83,"name":"s"},
                {"id":84,"name":"t"},{"id":85,"name":"u"},{"id":86,"name":"v"},{"id":87,"name":"w"},{"id":88,"name":"x"},{"id":89,"name":"y"},{"id":90,"name":"z"},{"id":91,"name":"leftwinkey"},
                {"id":91,"name":"rightwinkey"},{"id":93,"name":"contextmenu"},{"id":96,"name":"numpad0"},{"id":97,"name":"numpad1"},{"id":98,"name":"numpad2"},{"id":99,"name":"numpad3"},
                {"id":100,"name":"numpad4"},{"id":101,"name":"numpad5"},{"id":102,"name":"numpad6"},{"id":103,"name":"numpad7"},{"id":104,"name":"numpad8"},{"id":105,"name":"numpad9"},
                {"id":106,"name":"numpad-asterisk"},{"id":107,"name":"numpad-plus"},{"id":109,"name":"numpad-minus"},{"id":110,"name":"numpadperiod"},{"id":111,"name":"numpadslash"},
                {"id":112,"name":"f1"},{"id":113,"name":"f2"},{"id":114,"name":"f3"},{"id":115,"name":"f4"},{"id":116,"name":"f5"},{"id":117,"name":"f6"},{"id":118,"name":"f7"},
                {"id":119,"name":"f8"},{"id":120,"name":"f9"},{"id":121,"name":"f10"},{"id":122,"name":"f11"},{"id":123,"name":"f12"},{"id":144,"name":"numlock"},{"id":145,"name":"scrolllock"},
                {"id":186,"name":"semicolon"},{"id":187,"name":"equal"},{"id":188,"name":"comma"},{"id":189,"name":"dash"},{"id":190,"name":"period"},{"id":191,"name":"slash"},
                {"id":192,"name":"graveaccent"},{"id":219,"name":"openbracket"},{"id":220,"name":"backslash"},{"id":221,"name":"closedbracket"},{"id":222,"name":"apostrophe"}];

document.addEventListener("click", (event) => {
		if (event.target.dataset.showcode != undefined) {
    		let value = event.target.id;
    		for (let i = 0; i <= keycodes.length; i++) {
        	if (value == keycodes[i]['name']) {
            //alert(keycodes[i]['id']);
            let text = document.getElementById("output");
            text.innerHTML = keycodes[i]['id'];
          }
        }
    }
    
})