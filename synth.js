const noteGainControl = audioContext.createGain();
var duration = 4;
var poly = 5;
var _synthType = [];
var _selectedType = [];
const noteOscillator = [];
const buffer = audioContext.createBuffer(2, audioContext.sampleRate * duration, audioContext.sampleRate);

const LchannelData = buffer.getChannelData(0);
const RchannelData = buffer.getChannelData(1);


for (let i = 0; i < buffer.length; i++) {
    LchannelData[i] = Math.random() * 2 - 1;
    RchannelData[i] = Math.random() * 2 - 1;
}


const notes = [
    { note: "C", frequency: 261.63 },
    { note: "C#", frequency: 277.18 },
    { note: "D", frequency: 293.66 },
    { note: "D#", frequency: 311.13 },
    { note: "E", frequency: 329.63 },
    { note: "F", frequency: 349.23 },
    { note: "F#", frequency: 369.99 },
    { note: "G", frequency: 392.0 },
    { note: "G#", frequency: 415.3 },
    { note: "A", frequency: 440.0 },
    { note: "A#", frequency: 466.16 },
    { note: "B", frequency: 493.88 },
    { note: "C", frequency: 523.25 },
];
document.body.classList.add("noselect");
document.body.appendChild(document.createElement('br'));

notes.forEach(({ note, frequency }) => {
    document.querySelector("#noteChannel");

    const noteButton = document.createElement('button');
    noteButton.classList.add("noselect");
    noteButton.innerText = note;
    noteButton.addEventListener("click", () => {
        for (let i = 0; i < poly; i++) {

            _synthType[i] = document.getElementById("synthType" + 1);
            _selectedType[i] = _synthType[i].selectedIndex;
            noteOscillator[i] = audioContext.createOscillator();
            noteOscillator[i].type = _synthType[i].options[_selectedType[i]].text.toLowerCase();

            if (i == 0)
                noteOscillator[i].frequency.setValueAtTime(frequency, audioContext.currentTime);
            else
                noteOscillator[i].frequency.setValueAtTime(frequency * 1.5 * i, audioContext.currentTime);

            noteGainControl.gain.setValueAtTime(noteChannel.value / 6 * poly, 0);
            noteOscillator[i].connect(noteGainControl);
            noteGainControl.connect(primaryGainControl);
            noteOscillator[i].start();
            noteOscillator[i].stop(audioContext.currentTime + duration);
        }
    })
    document.body.appendChild(noteButton);
})

function createSynthChannel() {
    let output = document.createElement("output");
    output.classList.add("noteChannel-output");
    output.classList.add("output");
    output.setAttribute("for", "noteChannel");
    let outputText = document.createTextNode("100");
    output.appendChild(outputText);

    let label = document.createElement("label");
    label.classList.add("slider-text");
    label.setAttribute("for", "noteChannel");
    let labelText = document.createTextNode(" Synth Channel ");
    label.appendChild(output);
    label.appendChild(labelText);

    let input = document.createElement("input");
    input.classList.add("slider");
    input.setAttribute("type", "range");
    input.min = "0";
    input.max = "1.27";
    input.value = "1";
    input.step = "0.01";
    input.id = "noteChannel";

    let element = document.getElementById("slideContainer");
    element.appendChild(label);
    element.appendChild(input);

    let dropdown = document.createElement("select");
    dropdown.setAttribute("ID", "synthType" + 1);

    let ddOne = document.createElement("option");
    let ddOneText = document.createTextNode("Sine");
    ddOne.appendChild(ddOneText);

    let ddTwo = document.createElement("option");
    let ddTwoText = document.createTextNode("Triangle");
    ddTwo.appendChild(ddTwoText);

    let ddThree = document.createElement("option");
    let ddThreeText = document.createTextNode("Square");
    ddThree.appendChild(ddThreeText);

    let ddFour = document.createElement("option");
    let ddFourText = document.createTextNode("Sawtooth");
    ddFour.appendChild(ddFourText);

    dropdown.appendChild(ddOne);
    dropdown.appendChild(ddTwo);
    dropdown.appendChild(ddThree);
    dropdown.appendChild(ddFour);
    document.body.appendChild(dropdown);
}
createSynthChannel();


const noteChannel = document.querySelector("#noteChannel");
const noteOutput = document.querySelector(".noteChannel-output");


noteChannel.textContent = noteChannel.value * 100;

noteChannel.addEventListener('input', function () {
    noteGainControl.gain.setValueAtTime(noteChannel.value / 6, 0);
    noteOutput.textContent = parseInt(noteChannel.value * 100);
});