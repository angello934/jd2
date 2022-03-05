// Variable para mencionar el video
var playback = document.getElementById("playback");


    function start(){
        playback.play();
        document.getElementById("prvw").classList.add ("hidden");
    }

    function timevdo(){
        alert(playback.startDate);
    }