

//HTML5 audio, will need user touch input to start on mobile





AFRAME.registerComponent('markerhandler', {
    init: function () {

        var intro = [];
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

            };

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                intro[key] = new Audio("mp3/" + data[key].name);
                intro[key].loop = true;
                console.log(intro[key])
            }
        }

        var markerList = document.querySelectorAll(".markers");

        markerList.forEach(function (marker, index) {
            marker.addEventListener('markerFound', function () {
                console.log('Marker ' + index + ' found');
                intro[index].play();
            });
            marker.addEventListener('markerLost', (e) => {
                console.log('Marker ' + index + ' lost');
                intro[index].pause();
                intro[index].currentTime = 0;
            });

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