import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
let currentTimePlay = {};

player.on('play', function(){
    player.setCurrentTime(0).then(function(seconds) {
        console.log('played the video!');
        data = localStorage.getItem(LOCALSTORAGE_KEY);
        if (data) {
            data = JSON.parse(data);
            Object.entries(data).forEach(([name, value]) => {
                currentTimePlay[name] = value;
                console.log (currentTimePlay)
                }
            )
        }
    });
}) 

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on("timeupdate", onPlay);

function onPlay(iframe){
    console.log('played the video!');
    currentTimePlay.seconds = iframe.seconds;
    currentTimePlay.duration = iframe.duration;
    currentTimePlay.percent = iframe.percent;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTimePlay));
    console.log(currentTimePlay);
};


