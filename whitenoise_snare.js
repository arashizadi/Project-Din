const whiteNoiseGain = audioContext.createGain();

const snareButton = document.createElement('button');
const snareFilter = audioContext.createBiquadFilter();

snareButton.classList.add("noselect");
snareFilter.type = "highpass";
snareFilter.frequency.value = 1500;
snareFilter.connect(primaryGainControl);
snareButton.innerText = "Snare";
snareButton.addEventListener("click", () => {
    const whiteNoiseSource = audioContext.createBufferSource();
    whiteNoiseSource.buffer = buffer;

    whiteNoiseGain.gain.setValueAtTime(snareChannel.value, audioContext.currentTime);
    whiteNoiseGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    whiteNoiseSource.connect(whiteNoiseGain);
    whiteNoiseGain.connect(snareFilter);

    whiteNoiseSource.start()
    whiteNoiseSource.stop(audioContext.currentTime + 0.2);

    const snareOscillator = audioContext.createOscillator();
    snareOscillator.type = "triangle";
    snareOscillator.frequency.setValueAtTime(100, audioContext.currentTime);
    snareOscillator.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

    const oscillatorGain = audioContext.createGain();
    oscillatorGain.gain.setValueAtTime(1, audioContext.currentTime);
    oscillatorGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    snareOscillator.connect(oscillatorGain);
    oscillatorGain.connect(primaryGainControl);
    snareOscillator.start();
    snareOscillator.stop(audioContext.currentTime + 0.2);
});
document.body.appendChild(snareButton);

const snareChannel = document.querySelector('#snareChannel');
const snareOutput = document.querySelector('.snareChannel-output');

snareOutput.textContent = snareChannel.value * 100;
snareChannel.addEventListener('input', function() {
  whiteNoiseGain.gain.setValueAtTime(snareChannel.value, audioContext.currentTime);
  snareOutput.textContent = parseInt(snareChannel.value * 100);
});