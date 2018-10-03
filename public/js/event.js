//HTML5 audio, will need user touch input to start on mobile

AFRAME.registerComponent('markerhandler', {
    init: function () {
        // Promise
        var getData = new Promise(
            function (resolve) {
                var sounds = {
                    "0": {
                        "name": "CesarHarada_WSSW_bells_test_edit.mp3",
                        "format": "mp3",
                        "href": "https://www.linkedin.com/in/cesarharada/"
                    },
                    "1": {
                        "name": "JamesBanbury_WSSW_singing_test_edit.mp3",
                        "format": "mp3",
                        "href": "https://www.linkedin.com/in/james-banbury-aa6ab36/"
                    },
                    "2": {
                        "name": "PeteDavis_WSSW_drum_test_edit.mp3",
                        "format": "mp3",
                        "href": "https://www.linkedin.com/in/pete-davis-0686528/"
                    },
                    "3": {
                        "name": "ThierryHalbroth_WSSW_flute_test_edit.mp3",
                        "format": "mp3",
                        "href": "https://www.linkedin.com/in/thalbroth/"
                    }
                };
                resolve(sounds);
            }
        );

        // call our promise
        var init = function () {
            getData.then(function (data) {
                var intro = [];

                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        intro[key] = new Audio("mp3/" + data[key].name);
                        intro[key].loop = true;
                        console.log(intro[key])
                    }
                }

                var markerList = document.querySelectorAll(".markers");

                markerList.forEach(function (marker, index) {
                    marker.setAttribute('link', {
                        href: data[index].href,
                        visualAspectEnabled: false
                    });
                    marker.addEventListener('markerFound', function (ev) {
                        console.log('Marker ' + index + ' found');
                        console.log(intro[index])
                        //intro[index].play();
                    });
                    marker.addEventListener('markerLost', function (ev) {
                        console.log('Marker ' + index + ' lost');
                        intro[index].pause();
                        intro[index].currentTime = 0;
                    });
                    marker.addEventListener('click', function (ev) {
                        if (marker.object3D.visible == true && ev.detail.cursorEl) {
                            console.log('Marker clicked');
                            intro[index].play();
                        }
                    });

                });
            })
        };

        init();



        /*
                var intro = [];
                var data = {};
        
                //Sample data
        
                data =
                    {
                        "0": {
                            "name": "CesarHarada_WSSW_bells_test_edit.mp3",
                            "format": "mp3",
                            "href": "https://www.linkedin.com/in/zharifzamkhuri/"
                        },
                        "1": {
                            "name": "JamesBanbury_WSSW_singing_test_edit.mp3",
                            "format": "mp3",
                            "href": "https://www.linkedin.com/in/zharifzamkhuri/"
                        },
                        "2": {
                            "name": "PeteDavis_WSSW_drum_test_edit.mp3",
                            "format": "mp3",
                            "href": "https://www.linkedin.com/in/zharifzamkhuri/"
                        },
                        "3": {
                            "name": "ThierryHalbroth_WSSW_flute_test_edit.mp3",
                            "format": "mp3",
                            "href": "https://www.linkedin.com/in/zharifzamkhuri/"
                        }
                    };
        
        */
        // Set up the tick throttling. Will check if marker is active every 500ms
        //this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);

    }

    //tick: function (t, dt) {
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
    //}
});