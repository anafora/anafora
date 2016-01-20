/**
 * Created by Min on 2016-01-18.
 */
var videoElement;
var infoShown = false;

document.addEventListener("DOMContentLoaded", function(){
    //get video
    videoElement = document.getElementById("videoElement");
    console.log(videoElement);

    //add event listeners
    videoElement.addEventListener("play", showInfo);

    document.getElementById("btnPlayPause").addEventListener("click", playPause);
    document.getElementById("btnRestart").addEventListener("click", restart);
    document.getElementById("btnBack").addEventListener("click", back);
    document.getElementById("btnForward").addEventListener("click", forward);
    document.getElementById("btnMuteToggle").addEventListener("click", toggleMute);
    document.getElementById("btnLoopToggle").addEventListener("click", toggleLoop);
    document.getElementById("btnVolUP").addEventListener("click", volumeUp);
    document.getElementById("btnVolDOWN").addEventListener("click", volumeDown);
    document.getElementById("btnSpeedUP").addEventListener("click", speedUp);
    document.getElementById("btnSlowDOWN").addEventListener("click", slowDown);
    document.getElementById("btnInfo").addEventListener("click", info);
    document.getElementById("btnClear").addEventListener("click", clear);
    document.getElementById("btnSwitch").addEventListener("click", switchFormat);
});

function clear(ev){
    ev.preventDefault();
    var m = document.getElementById("msg");
    m.innerHTML = '';
}

function info(ev){
    ev.preventDefault();
    infoShown = false;
    showInfo();
}

function msg(message){
    var m = document.getElementById("msg");
    currentText =  message + "<br/>" + m.innerHTML;
    m.innerHTML = currentText;
}

function showInfo(ev){
    if(infoShown === false)
    {
        //write out some info about the video
        msg("In this browser video/mp4 " + videoElement.canPlayType("video/mp4") + " can play.");
        msg("In this browser video/webm " + videoElement.canPlayType("video/webm") + " can play.");
        msg("Video width " + videoElement.videoWidth);
        msg("Video height " + videoElement.videoHeight);
        msg("Video current source " + videoElement.currentSrc);
        msg("Video volume " + videoElement.volume.toFixed(2));
        msg("Video playbackRate " + videoElement.playbackRate);
        msg("This video is " +  videoElement.duration + " seconds long.");
        infoShown = true;
    }
}

function playPause(ev){
    ev.preventDefault();
    if (videoElement.paused) {
        videoElement.play();
        msg("Play");
    }else{
        videoElement.pause();
        msg("Pause");
    }
}

function restart(ev){
    ev.preventDefault();
    videoElement.pause();
    videoElement.currentTime = 0;
    msg("Restart");
    videoElement.play();
}

function back(ev){
    ev.preventDefault();
    try{
        jump(-5);
        msg("Jump back -5 sec");
    }catch(err){
        msg(err.name + " No video currently loaded.");
    }
}

function forward(ev){
    ev.preventDefault();
    try{
        jump(5);
        msg("Jump forward 5 sec");
    }catch(err){
        msg(err.name + " No video currently loaded.");
    }
}

function jump(time){
    videoElement.currentTime += time;
}

function toggleMute(ev){
    ev.preventDefault();
    if (videoElement.muted) {
        videoElement.muted = false;
        ev.target.textContent = 'Mute Off';
        msg("Mute Off");
    } else {
        videoElement.muted = true;
        ev.target.textContent = 'Mute On';
        msg("Mute On");
    }
}

function toggleLoop(ev){
    ev.preventDefault();
    if(videoElement.loop){
        videoElement.loop = false;
        ev.target.textContent = 'Loop Off';
        msg("Loop Off");
    }else{
        videoElement.loop = true;
        ev.target.textContent = 'Loop On';
        msg("Loop On");
    }
}

function volumeUp(ev){
    ev.preventDefault();
    var vol = videoElement.volume;
    vol += .1;
    //  test for range 0 - 1 to avoid exceptions
    if (vol >= 0 && vol <= 1) {
        // if valid value, use it
        videoElement.volume = vol;
    } else {
        // otherwise jump to 1
        videoElement.volume = 1;
    }
    msg("Volume: " + videoElement.volume.toFixed(2));
}

function volumeDown(ev){
    ev.preventDefault();
    var vol = videoElement.volume;
    vol -= .1;
    //  test for range 0 - 1 to avoid exceptions
    if (vol >= 0 && vol <= 1) {
        // if valid value, use it
        videoElement.volume = vol;
    } else {
        // otherwise jump to 0
        videoElement.volume = 0;
    }
    msg("Volume: " + videoElement.volume.toFixed(2));
}

function speedUp(ev){
    ev.preventDefault();
    videoElement.playbackRate += 0.25;
    msg("Playback rate: " + videoElement.playbackRate);
}

function slowDown(ev){
    ev.preventDefault();
    videoElement.playbackRate -= 0.25;
    msg("Playback rate: " + videoElement.playbackRate);
}

function switchFormat(ev) {
    ev.preventDefault();
    var sources = new Array();
    sources[0] = 'video/bbb-1200px.mp4';
    sources[1] = 'video/big-buck-bunny_trailer.webm';

    var checker = videoElement.getElementsByTagName("source");



}


//
//function changeSource(ev) {
//    ev.preventDefault();
//
//    if(videoElement.currentSrc.indexOf())
//}