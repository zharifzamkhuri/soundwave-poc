
var data = {};

//Sample data

data =
    {
        "0": {
            "name": "CesarHarada_WSSW_bells_test_edit.mp3",
            "format": "mp3",
        },
        "1": {
            "name": "JamesBanbury_WSSW_singing_test_edit.mp3",
            "format": "mp3"
        }

    }

//HTML5 audio, will need user touch input to start on mobile



AFRAME.registerComponent('markerhandler', {
    init: function () {
        var markerList = document.querySelectorAll(".markers");
        var intro = [];

        intro[0] = new Audio("mp3/" + data[0].name);
        intro[0].loop = true;
        intro[1] = new Audio("mp3/" + data[1].name);
        intro[1].loop = true;


        markerList[0].addEventListener("markerFound", (e) => {
            console.log('Marker 0 Found');
            intro[0].play();

        });
        markerList[0].addEventListener("markerLost", (e) => {
            console.log('Marker 0 Lost');
            intro[0].pause();
            intro[0].currentTime = 0;
        });

        markerList[1].addEventListener("markerFound", (e) => {
            console.log('Marker 1 Found');
            intro[1].play();

        });
        markerList[1].addEventListener("markerLost", (e) => {
            console.log('Marker 1 Lost');
            intro[1].pause();
            intro[1].currentTime = 0;
        });
        // Set up the tick throttling. Will check if marker is active every 500ms
        //this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);

    },

    tick: function (t, dt) {
        /*
        var els = sceneEl.querySelectorAll('*');
        for (var i = 0; i < els.length; i++) {
            console.log(els[i]);
        }
        if (document.querySelector(".markers").object3D.visible == true) {

            /*
            if (document.querySelector(".markers").getAttribute('value') != null) {
                if (data.playing == false) {
                    // MARKER IS PRESENT
                    intro.play();
                    playing = true;
                    console.log("test");
                }
            }
            
        }
        else if (document.querySelector(".markers").object3D.visible == false) {
            intro.pause();
            intro.currentTime = 0;
            playing = false;
        }

        */
    }
});