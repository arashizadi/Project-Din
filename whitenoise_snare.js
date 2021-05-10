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
    snareOscillator.frequency.setValueAtTime(170, audioContext.currentTime);

    const oscillatorGain = audioContext.createGain();
    oscillatorGain.gain.setValueAtTime(1, audioContext.currentTime);
    oscillatorGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    snareOscillator.connect(oscillatorGain);
    oscillatorGain.connect(primaryGainControl);
    snareOscillator.start();
    snareOscillator.stop(audioContext.currentTime + 0.2);
});
snareButton.setAttribute("Id", "snareButton");
snareButton.style.display = "none";
document.body.appendChild(snareButton);

function createSnareChannel() {
  let output = document.createElement("output");
  output.classList.add("snareChannel-output");
  output.classList.add("output");
  output.setAttribute("for", "snareChannel");
  let outputText = document.createTextNode("100");
  output.appendChild(outputText);

  let label = document.createElement("label");
  label.classList.add("slider-text");
  label.setAttribute("for", "snareChannel");
  let labelText = document.createTextNode(" Snare Channel ");
  label.appendChild(output);
  label.appendChild(labelText);

  let input = document.createElement("input");
  input.classList.add("slider");
  input.setAttribute("type", "range");
  input.min = "0";
  input.max = "1.27";
  input.value = "1";
  input.step = "0.01";
  input.id = "snareChannel";

  let element = document.getElementById("slideContainer");
  element.appendChild(label);
  element.appendChild(input);
}
createSnareChannel();

const snareChannel = document.querySelector('#snareChannel');
const snareOutput = document.querySelector('.snareChannel-output');

snareOutput.textContent = snareChannel.value * 100;
snareChannel.addEventListener('input', function() {
  whiteNoiseGain.gain.setValueAtTime(snareChannel.value, audioContext.currentTime);
  snareOutput.textContent = parseInt(snareChannel.value * 100);
});