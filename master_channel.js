const audioContext = new AudioContext();
const primaryGainControl = audioContext.createGain();

function createSynthChannel() {
  let output = document.createElement("output");
  output.classList.add("masterChannel-output");
  output.classList.add("output");
  output.setAttribute("for", "masterChannel");
  let outputText = document.createTextNode("100");
  output.appendChild(outputText);

  let label = document.createElement("label");
  label.classList.add("slider-text");
  label.setAttribute("for", "masterChannel");
  let labelText = document.createTextNode(" Master Channel ");
  label.appendChild(output);
  label.appendChild(labelText);

  let input = document.createElement("input");
  input.classList.add("slider");
  input.setAttribute("type", "range");
  input.min = "0";
  input.max = "1.27";
  input.value = "1";
  input.step = "0.01";
  input.id = "masterChannel";

  let element = document.getElementById("slideContainer");
  element.appendChild(label);
  element.appendChild(input);
}
createSynthChannel();


const masterChannel = document.querySelector("#masterChannel");
const masterOutput = document.querySelector(".masterChannel-output");


masterChannel.textContent = masterChannel.value * 100;

masterChannel.addEventListener('input', function () {
  primaryGainControl.gain.setValueAtTime(masterChannel.value, 0);
  masterOutput.textContent = parseInt(masterChannel.value * 100);
});

primaryGainControl.gain.setValueAtTime(masterChannel.value, 0);
primaryGainControl.connect(audioContext.destination);