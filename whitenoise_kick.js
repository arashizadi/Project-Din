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
    kickOsscillator.stop(audioContext.currentTime+0.5);
});
kickButton.setAttribute("Id", "kickButton");
kickButton.style.display = "none";
document.body.appendChild(kickButton);

function createKickChannel() {
  let output = document.createElement("output");
  output.classList.add("kickChannel-output");
  output.classList.add("output");
  output.setAttribute("for", "kickChannel");
  let outputText = document.createTextNode("100");
  output.appendChild(outputText);

  let label = document.createElement("label");
  label.classList.add("slider-text");
  label.setAttribute("for", "kickChannel");
  let labelText = document.createTextNode(" Kick Channel ");
  label.appendChild(output);
  label.appendChild(labelText);

  let input = document.createElement("input");
  input.classList.add("slider");
  input.setAttribute("type", "range");
  input.min = "0";
  input.max = "1.27";
  input.value = "1";
  input.step = "0.01";
  input.id = "kickChannel";

  let element = document.getElementById("slideContainer");
  element.appendChild(label);
  element.appendChild(input);
}
createKickChannel();

const kickChannel = document.querySelector('#kickChannel');
const kickOutput = document.querySelector('.kickChannel-output');

kickOutput.textContent = kickChannel.value * 100;
kickChannel.addEventListener('input', function() {
  kickGainControl.gain.setValueAtTime(kickChannel.value, 0);
  kickOutput.textContent = parseInt(kickChannel.value * 100);
});