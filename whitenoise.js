const whiteNoiseGainControl = audioContext.createGain();

const whiteNoiseButton = document.createElement('button');
whiteNoiseButton.classList.add("noselect");


whiteNoiseButton.innerText = "White Noise";
whiteNoiseButton.addEventListener("click", () => {
    const whiteNoiseSource = audioContext.createBufferSource();
    whiteNoiseSource.buffer = buffer;
    whiteNoiseGainControl.gain.setValueAtTime(whiteNoiseChannel.value ,0);
    whiteNoiseSource.connect(whiteNoiseGainControl);
    whiteNoiseGainControl.connect(primaryGainControl);
    whiteNoiseSource.start();
});
document.body.appendChild(whiteNoiseButton);

const whiteNoiseChannel = document.querySelector('#whiteNoiseChannel');
const whiteNoiseOutput = document.querySelector('.whiteNoiseChannel-output');

whiteNoiseOutput.textContent = whiteNoiseChannel.value * 100;
whiteNoiseChannel.addEventListener('input', function() {
    whiteNoiseGainControl.gain.setValueAtTime(whiteNoiseChannel.value, 0);
    whiteNoiseOutput.textContent = parseInt(whiteNoiseChannel.value * 100);
});whiteNoiseChannel