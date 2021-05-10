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
hihatButton.setAttribute("Id", "hihatButton");
hihatButton.style.display = "none";
document.body.appendChild(hihatButton);

function createHihatChannel() {
  let output = document.createElement("output");
  output.classList.add("hihatChannel-output");
  output.classList.add("output");
  output.setAttribute("for", "hihatChannel");
  let outputText = document.createTextNode("100");
  output.appendChild(outputText);

  let label = document.createElement("label");
  label.classList.add("slider-text");
  label.setAttribute("for", "hihatChannel");
  let labelText = document.createTextNode(" Hi-hat Channel ");
  label.appendChild(output);
  label.appendChild(labelText);

  let input = document.createElement("input");
  input.classList.add("slider");
  input.setAttribute("type", "range");
  input.min = "0";
  input.max = "1.27";
  input.value = "1";
  input.step = "0.01";
  input.id = "hihatChannel";

  let element = document.getElementById("slideContainer");
  element.appendChild(label);
  element.appendChild(input);
}
createHihatChannel();

const hihatChannel = document.querySelector('#hihatChannel');
const hihatOutput = document.querySelector('.hihatChannel-output');

hihatOutput.textContent = hihatChannel.value * 100;
hihatChannel.addEventListener('input', function() {
    whiteNoiseGainControl.gain.setValueAtTime(hihatChannel.value/6, 0);
    hihatOutput.textContent = parseInt(hihatChannel.value * 100);
});hihatChannel