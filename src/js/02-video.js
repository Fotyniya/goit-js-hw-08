import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on("play", onPlay);
player.on("timeupdate", throttle(onSetTime, 1000));
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

function onPlay(){
    player.setCurrentTime(parseFloat(localStorage.getItem(LOCALSTORAGE_KEY))).then(function(seconds) {
    console.log('played the video!');
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});
};

function onSetTime(player){
    const currentTime = player.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));
};