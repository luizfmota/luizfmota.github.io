let audio = document.getElementById("audio1");
let fullDuration = document.getElementById("audioDuration");
let audioTime = document.getElementById("audioCurrentTime");
let audioProgress = document.getElementById("progress");
let vol = document.getElementById("volumeBar");
let volDown = document.getElementById("volumeDown");
let playPauseBtn = document.getElementById("play-pause");

audio.addEventListener('canplaythrough', audioFullDurationTime, true);

var interval;

        function playAudio() {
            audio.play();
            playPauseBtn.src="./images/pause-fill.svg";
            playPauseBtn.onclick = pauseAudio ;
            interval = setInterval( audioCurrentTime, 1000);
        }

        function pauseAudio() {
            audio.pause();
            playPauseBtn.src="./images/play-fill.svg";
            playPauseBtn.onclick= playAudio ;
        }

        function stopAudio() {
            audio.pause();
            audio.currentTime = 0;
            playPauseBtn.src="./images/play-fill.svg";
            playPauseBtn.onclick= playAudio ;
            clearInterval(interval);
            audioProgress.value = 0;

            audioTime.innerText = "0:00";
        }

        function volumeDown() {
            if (audio.volume > 0){
                audio.volume = Math.round((audio.volume - 0.1) * 100) / 100;
                vol.value = audio.volume;
                if(audio.volume == 0){
                    volDown.src = "./images/volume-mute-fill.svg";
                }
            }else{
                return false;
            }
        }

        function volume() {
            audio.volume = vol.value;
            if(audio.volume == 0){
                volDown.src = "./images/volume-mute-fill.svg";
            }else{
                volDown.src = "./images/volume-down-fill.svg";
            }
        }

        function volumeUp() {
            if (audio.volume < 1){
                audio.volume = Math.round((audio.volume + 0.1) * 100) / 100;
                vol.value = audio.volume;
                if(audio.volume > 0){
                    volDown.src = "./images/volume-down-fill.svg";
                }
            }else{
                return true;
            }
        }

        function audioFullDurationTime(){
            let mins = Math.floor(audio.duration / 60);
            let secs = Math.floor(audio.duration % 60);

            if(secs < 10){
                secs = "0" + String(secs);
            }

            fullDuration.innerText = `${mins}:${secs}`;
            audioProgress.max = audio.duration;
        }

        function audioCurrentTime(){
            let mins = Math.floor(audio.currentTime / 60);
            let secs = Math.floor(audio.currentTime % 60);

            if(secs < 10){
                secs = "0" + String(secs);
            }

            audioTime.innerText = `${mins}:${secs}`;
            audioProgress.value = audio.currentTime;
        };