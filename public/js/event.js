var playing = false;

//HTML5 audio, will need user touch input to start on mobile
var intro = new Audio("mp3/CesarHarada_WSSW_bells_test_edit.mp3");

//Detect end of audio
intro.addEventListener("ended", function () {
    intro.currentTime = 0;
    playing = false;
});




AFRAME.registerComponent('markerhandler', {
    init: function () {

        // Set up the tick throttling. Will check if marker is active every 500ms
        this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
    },
    tick: function (t, dt) {

        if (document.querySelector(".markersTest").object3D.visible == true && playing == false) {
            // MARKER IS PRESENT
            intro.play();
            playing = true;
        } else {
            // MARKER IS HIDDEN, do nothing (up to you)
        }

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