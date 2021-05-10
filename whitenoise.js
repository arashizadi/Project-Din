const whiteNoiseGainControl = audioContext.createGain();

const whiteNoiseButton = document.createElement('button');
whiteNoiseButton.classList.add("noselect");


whiteNoiseButton.innerText = "White Noise";
whiteNoiseButton.addEventListener("click", () => {
    const whiteNoiseSource = audioContext.createBufferSource();
    whiteNoiseSource.buffer = buffer;
    whiteNoiseGainControl.gain.setValueAtTime(whiteNoiseChannel.value/6, 0);
    whiteNoiseSource.connect(whiteNoiseGainControl);
    whiteNoiseGainControl.connect(primaryGainControl);
    whiteNoiseSource.start();
});
whiteNoiseButton.setAttribute("Id", "whiteNoiseButton");
whiteNoiseButton.style.display = "none";
document.body.appendChild(whiteNoiseButton);


function createWhiteNoiseChannel() {
    let output = document.createElement("output");
    output.classList.add("whiteNoiseChannel-output");
    output.classList.add("output");
    output.setAttribute("for", "whiteNoiseChannel");
    let outputText = document.createTextNode("100");
    output.appendChild(outputText);

    let label = document.createElement("label");
    label.classList.add("slider-text");
    label.setAttribute("for", "whiteNoiseChannel");
    let labelText = document.createTextNode(" White Noise Channel ");
    label.appendChild(output);
    label.appendChild(labelText);

    let input = document.createElement("input");
    input.classList.add("slider");
    input.setAttribute("type", "range");
    input.min = "0";
    input.max = "1.27";
    input.value = "1";
    input.step = "0.01";
    input.id = "whiteNoiseChannel";

    let element = document.getElementById("slideContainer");
    element.appendChild(label);
    element.appendChild(input);
}
createWhiteNoiseChannel();

const whiteNoiseChannel = document.querySelector('#whiteNoiseChannel');
const whiteNoiseOutput = document.querySelector('.whiteNoiseChannel-output');

whiteNoiseOutput.textContent = whiteNoiseChannel.value * 100;
whiteNoiseChannel.addEventListener('input', function() {
    whiteNoiseGainControl.gain.setValueAtTime(whiteNoiseChannel.value/6, 0);
    whiteNoiseOutput.textContent = parseInt(whiteNoiseChannel.value * 100);
});whiteNoiseChannel