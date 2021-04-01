const kickGainControl = audioContext.createGain();

const kickButton = document.createElement('button');
kickButton.classList.add("noselect");


kickButton.innerText = "Kick";
kickButton.addEventListener("click", () => {
    const kickOsscillator = audioContext.createOscillator();
    kickOsscillator.frequency.setValueAtTime(150, 0);
    kickOsscillator.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

    kickGainControl.gain.setValueAtTime(kickChannel.value ,0);
    kickGainControl.gain.exponentialRampToValueAtTime(0.005, audioContext.currentTime + 0.5);
    kickOsscillator.connect(kickGainControl);
    
    kickGainControl.connect(primaryGainControl);
    kickOsscillator.start();
    kickOsscillator.stop(audioContext.currentTime+0.1);
});
document.body.appendChild(kickButton);

const kickChannel = document.querySelector('#kickChannel');
const kickOutput = document.querySelector('.kickChannel-output');

kickOutput.textContent = kickChannel.value * 100;
kickChannel.addEventListener('input', function() {
  kickGainControl.gain.setValueAtTime(kickChannel.value, 0);
  kickOutput.textContent = parseInt(kickChannel.value * 100);
});