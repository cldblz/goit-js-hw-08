import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
    localStorage.setItem("videoplayer-current-time", e.seconds);
}

const currentTime = localStorage.getItem("videoplayer-current-time")

setCurrentTime(currentTime)

function setCurrentTime(time) {
    if (!time) {
        return
    }

    player.setCurrentTime(time)
}