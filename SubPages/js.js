var autoPlayVideo = document.getElementById("onScreencapVideo");
    autoPlayVideo.oncanplaythrough = function() {
        autoPlayVideo.muted = true;
        autoPlayVideo.play();
        autoPlayVideo.pause();
        autoPlayVideo.muted = false;
        autoPlayVideo.play();
    }