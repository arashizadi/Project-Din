const hihatGainControl = [];
const HIHAT_URL = [];

const hihatButton = [];
function createHihatChannel(a) {
hihatButton[a] = document.createElement('button');
hihatButton[a].classList.add("noselect");
if (a == 2)
HIHAT_URL[a] = "https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3";
else
HIHAT_URL[a] = "https://unpkg.com/@teropa/drumkit@1.1.0/src/assets/hatOpen2.mp3";


hihatGainControl[a] = audioContext.createGain();


hihatButton[a].innerText = "Hi-Hat";
hihatButton[a].addEventListener("click", async () => {
const response = await fetch(HIHAT_URL[a]);
const soundBuffer = await response.arrayBuffer();
const hihatBuffer = await audioContext.decodeAudioData(soundBuffer);

const hihatSourse = audioContext.createBufferSource();
hihatSourse.buffer = hihatBuffer;

hihatGainControl[a].gain.setValueAtTime(hihatChannel.value, 0);
hihatSourse.connect(hihatGainControl[a]);
hihatGainControl[a].connect(primaryGainControl);

hihatSourse.start();
});

document.body.appendChild(hihatButton[a]);


  let output = document.createElement("output");
  output.classList.add("hihatChannel-output" + a);
  output.classList.add("output");
  output.setAttribute("for", "hihatChannel" + a);
  let outputText = document.createTextNode("100");
  output.appendChild(outputText);

  let label = document.createElement("label");
  label.classList.add("slider-text");
  label.setAttribute("for", "hihatChannel" + a);
  let labelText = document.createTextNode(" Hi-hat Channel " + a);
  label.appendChild(output);
  label.appendChild(labelText);

  let input = document.createElement("input");
  input.classList.add("slider");
  input.setAttribute("type", "range");
  input.min = "0";
  input.max = "1.27";
  input.value = "1";
  input.step = "0.01";
  input.id = "hihatChannel" + a;

  let element = document.getElementById("slideContainer");
  element.appendChild(label);
  element.appendChild(input);


const hihatChannel = document.querySelector('#hihatChannel' + a);
const hihatOutput = document.querySelector('.hihatChannel-output' + a);

hihatOutput.textContent = hihatChannel.value * 100;
hihatChannel.addEventListener('input', function() {
  hihatGainControl.gain.setValueAtTime(hihatChannel.value, 0);
  hihatOutput.textContent = parseInt(hihatChannel.value * 100);
});
}