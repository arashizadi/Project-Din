const audioContext = new AudioContext();
const primaryGainControl = audioContext.createGain();

const masterChannel = document.querySelector('#masterChannel');
const masterOutput = document.querySelector('.masterChannel-output');

masterOutput.textContent = masterChannel.value * 100;
masterChannel.addEventListener('input', function() {
  primaryGainControl.gain.setValueAtTime(masterChannel.value, 0);
  masterOutput.textContent = parseInt(masterChannel.value * 100);
});

primaryGainControl.gain.setValueAtTime(masterChannel.value, 0);
primaryGainControl.connect(audioContext.destination);