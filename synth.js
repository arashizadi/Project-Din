const noteGainControl = audioContext.createGain();

var duration = 1;
const buffer = audioContext.createBuffer(2, audioContext.sampleRate*duration,audioContext.sampleRate);

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
document.body.appendChild(document.createElement('br'));

notes.forEach(({note, frequency}) => {
    const noteButton = document.createElement('button');
    noteButton.classList.add("noselect");
    noteButton.innerText = note;
    noteButton.addEventListener("click", () => {
        const noteOscillator = audioContext.createOscillator();
        noteOscillator.type = "square";
        noteOscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

        noteGainControl.gain.setValueAtTime(noteChannel.value ,0);
        noteOscillator.connect(noteGainControl);
        noteGainControl.connect(primaryGainControl);
        noteOscillator.start();
        noteOscillator.stop(audioContext.currentTime + 1);
    })
document.body.appendChild(noteButton);
})

const noteChannel = document.querySelector('#noteChannel');
const noteOutput = document.querySelector('.noteChannel-output');

noteOutput.textContent = noteChannel.value * 100;
noteChannel.addEventListener('input', function() {
    noteGainControl.gain.setValueAtTime(noteChannel.value, 0);
    noteOutput.textContent = parseInt(noteChannel.value * 100);
});