const noteGainControl = audioContext.createGain();
var duration = 4;
var poly = 5;
var interval = 1.5;
var _synthType = [];
var _selectedType = [];
const noteOscillator = [];
var buffer = audioContext.createBuffer(2, audioContext.sampleRate * duration, audioContext.sampleRate);

const LchannelData = buffer.getChannelData(0);
const RchannelData = buffer.getChannelData(1);


for (let i = 0; i < buffer.length; i++) {
    LchannelData[i] = Math.random() * 2 - 1;
    RchannelData[i] = Math.random() * 2 - 1;
}


const notes = [
    { note: "C 4", frequency: 261.63 },
    { note: "C# 4", frequency: 277.18 },
    { note: "D 4", frequency: 293.66 },
    { note: "D# 4", frequency: 311.13 },
    { note: "E 4", frequency: 329.63 },
    { note: "F 4", frequency: 349.23 },
    { note: "F# 4", frequency: 369.99 },
    { note: "G 4", frequency: 392.0 },
    { note: "G# 4", frequency: 415.3 },
    { note: "A 4", frequency: 440.0 },
    { note: "A# 4", frequency: 466.16 },
    { note: "B 4", frequency: 493.88 },
    { note: "C 5", frequency: 523.25 },
    { note: "C# 5", frequency: 554.37 },
    { note: "D 5", frequency: 587.33 },
    { note: "D# 5", frequency: 622.25 },
    { note: "E 5", frequency: 659.25 },
    { note: "F 5", frequency: 698.46 },
    { note: "F# 5", frequency: 739.99 },
    { note: "G 5", frequency: 783.99 },
    { note: "G# 5", frequency: 830.61 },
    { note: "A 5", frequency: 880.00 },
    { note: "A# 5", frequency: 932.33 },
    { note: "B 5", frequency: 987.77 },
];
document.body.classList.add("noselect");
document.body.appendChild(document.createElement('br'));

function createSynthChannel() {
    let durationInput = document.createElement("input");
    durationInput.value = 4;
    durationInput.size = 1;
    durationInput.setAttribute("onfocusout", "focusoutDurSynth()");
    durationInput.setAttribute("type", "number");
    durationInput.setAttribute("min", "1");
    durationInput.setAttribute("class", "durationSynth");
    let durationLabel = document.createElement("label");
    durationLabel.setAttribute("for", durationInput);
    let durationLabelText = document.createTextNode("\xA0Duration:\xA0");
    durationLabel.appendChild(durationLabelText);
    durationInput.appendChild(durationLabel);
    document.body.appendChild(durationLabel);
    document.body.appendChild(durationInput);

    let polyInput = document.createElement("input");
    polyInput.value = 5;
    polyInput.size = 1;
    polyInput.setAttribute("onfocusout", "focusoutPolSynth()");
    polyInput.setAttribute("type", "number");
    polyInput.setAttribute("step", "1");
    polyInput.setAttribute("min", "1");
    polyInput.setAttribute("class", "polySynth");
    let polyLabel = document.createElement("label");
    polyLabel.setAttribute("for", polyInput);
    let polyLabelText = document.createTextNode("\xA0Poly:\xA0");
    polyLabel.appendChild(polyLabelText);
    polyInput.appendChild(polyLabel);
    document.body.appendChild(polyLabel);
    document.body.appendChild(polyInput);

    let polyIntervalInput = document.createElement("input");
    polyIntervalInput.value = 1.5;
    polyIntervalInput.size = 1;
    polyIntervalInput.setAttribute("onfocusout", "focusoutPolInt()");
    polyIntervalInput.setAttribute("type", "number");
    polyIntervalInput.setAttribute("step", "0.01");
    polyIntervalInput.setAttribute("min", "0.01");
    polyIntervalInput.setAttribute("class", "polyIntervalSynth");
    let polyIntervalLabel = document.createElement("label");
    polyIntervalLabel.setAttribute("for", polyIntervalInput);
    let polyIntervalLabelText = document.createTextNode("\xA0Chord Scale:\xA0");
    polyIntervalLabel.appendChild(polyIntervalLabelText);
    polyIntervalInput.appendChild(polyIntervalLabel);
    document.body.appendChild(polyIntervalLabel);
    document.body.appendChild(polyIntervalInput);

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
    let dropdownLabelText = document.createElement("label")
    dropdownLabelText.innerText = "\xA0Waveform:\xA0";
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
    dropdown.appendChild(dropdownLabelText);
    document.body.appendChild(dropdownLabelText);
    document.body.appendChild(dropdown);
}
createSynthChannel();
notes.forEach(({ note, frequency }) => {
    document.querySelector("#noteChannel");

    const noteButton = document.createElement('button');
    noteButton.classList.add("noselect");
    noteButton.innerText = note;
    noteButton.setAttribute("Id", note);
    noteButton.style.visibility = "hidden";
    noteButton.addEventListener("click", () => {
        for (let i = 0; i < poly; i++) {
            _synthType[i] = document.getElementById("synthType" + 1);
            _selectedType[i] = _synthType[i].selectedIndex;
            noteOscillator[i] = audioContext.createOscillator();
            noteOscillator[i].type = _synthType[i].options[_selectedType[i]].text.toLowerCase();
            if (i == 0)
                noteOscillator[i].frequency.setValueAtTime(frequency, audioContext.currentTime);
            else
                noteOscillator[i].frequency.setValueAtTime(frequency * interval * i, audioContext.currentTime);
            noteGainControl.gain.setValueAtTime(noteChannel.value / (6 * poly), 0);
            noteOscillator[i].connect(noteGainControl);
            noteGainControl.connect(primaryGainControl);
            noteOscillator[i].start();
            noteOscillator[i].stop(audioContext.currentTime + duration);
        }
    })
    document.body.appendChild(noteButton);
})

const noteChannel = document.querySelector("#noteChannel");
const noteOutput = document.querySelector(".noteChannel-output");


noteChannel.textContent = noteChannel.value * 100;

noteChannel.addEventListener('input', function () {
    noteGainControl.gain.setValueAtTime(noteChannel.value / (6 * poly), 0);
    noteOutput.textContent = parseInt(noteChannel.value * 100);
});

const durSynth = document.querySelector(".durationSynth");
durSynth.addEventListener('input', function () {
    if (durSynth.value == "" || parseFloat(durSynth.value) < 0)
    duration = duration;
    else
        duration = parseFloat(durSynth.value);
});

function focusoutDurSynth(){
    const durSynth = document.querySelector(".durationSynth");
    if (durSynth.value == "" || parseFloat(durSynth.value) < 0)
    durSynth.value = duration;
}

const polSynth = document.querySelector(".polySynth");
polSynth.addEventListener('input', function () {
    if (polSynth.value == "" || parseFloat(polSynth.value) < 1)
        poly = poly;
    else
        poly = parseFloat(polSynth.value);
});

function focusoutPolSynth(){
    const polSynth = document.querySelector(".polySynth");
    if (polSynth.value == "" || parseFloat(polSynth.value) < 1)
    polSynth.value = Math.abs(poly);
}

const polIntSynth = document.querySelector(".polyIntervalSynth");
polIntSynth.addEventListener('input', function () {
    if (polIntSynth.value == "")
        interval = interval;
    else
        interval = parseFloat(polIntSynth.value);
});

function focusoutPolInt(){
    const polIntSynth = document.querySelector(".polyIntervalSynth");
    if (polIntSynth.value == "" || parseFloat(polIntSynth.value) <= 0)
        polIntSynth.value = Math.abs(interval);
}