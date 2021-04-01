const hihatGainControl = audioContext.createGain();

const HIHAT_URL = "https://unpkg.com/@teropa/drumkit@1.1.0/src/assets/hatOpen2.mp3";
const hihatButton = document.createElement('button');
hihatButton.classList.add("noselect");


hihatButton.innerText = "Hi-Hat";
hihatButton.addEventListener("click", async () => {
const response = await fetch(HIHAT_URL);
const soundBuffer = await response.arrayBuffer();
const hihatBuffer = await audioContext.decodeAudioData(soundBuffer);

const hihatSourse = audioContext.createBufferSource();
hihatSourse.buffer = hihatBuffer;

hihatGainControl.gain.setValueAtTime(hihatChannel.value, 0);
hihatSourse.connect(hihatGainControl);
hihatGainControl.connect(primaryGainControl);

hihatSourse.start();
});

document.body.appendChild(hihatButton);

const hihatChannel = document.querySelector('#hihatChannel');
const hihatOutput = document.querySelector('.hihatChannel-output');

hihatOutput.textContent = hihatChannel.value * 100;
hihatChannel.addEventListener('input', function() {
  hihatGainControl.gain.setValueAtTime(hihatChannel.value, 0);
  hihatOutput.textContent = parseInt(hihatChannel.value * 100);
});