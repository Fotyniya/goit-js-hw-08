import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// const onPlay = function(iframe) {
//     console.log (player.duration)  
// };

// iframe.addEventListener("timeupdate", onPlay);

player.on('play', function() {
    console.log('played the video!');
    
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

