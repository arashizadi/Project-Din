const pattern = Array.from({ length: lines.length }, () => Array(beats.length).fill(false));
let playing = false;

function changePattern(row, column) {
    pattern[row][column] = !pattern[row][column];
}

function sequence() {
    if (pattern[Math.floor(currentBeat / beats[1])][0])
        document.getElementById('kickButton').click();
    if (pattern[Math.floor(currentBeat / beats[1])][1])
        document.getElementById('snareButton').click();
    if (pattern[Math.floor(currentBeat / beats[1])][2])
        document.getElementById('hihatButton').click();
    if (pattern[Math.floor(currentBeat / beats[1])][3])
        document.getElementById('whiteNoiseButton').click();
    if (pattern[Math.floor(currentBeat / beats[1])][4])
        document.getElementById('C 4').click();
    if (pattern[Math.floor(currentBeat / beats[1])][5])
        document.getElementById('C# 4').click();
    if (pattern[Math.floor(currentBeat / beats[1])][6])
        document.getElementById('D 4').click();
    if (pattern[Math.floor(currentBeat / beats[1])][7])
        document.getElementById('D# 4').click();
    if (pattern[Math.floor(currentBeat / beats[1])][8])
        document.getElementById('E 4').click();
    if (pattern[Math.floor(currentBeat / beats[1])][9])
        document.getElementById('F 4').click();
    if (pattern[Math.floor(currentBeat / beats[1])][10])
        document.getElementById('F# 4').click();
    if (pattern[Math.floor(currentBeat / beats[1])][11])
        document.getElementById('G 4').click();
    if (pattern[Math.floor(currentBeat / beats[1])][12])
        document.getElementById('G# 4').click();
    if (pattern[Math.floor(currentBeat / beats[1])][13])
        document.getElementById('A 4').click();
    if (pattern[Math.floor(currentBeat / beats[1])][14])
        document.getElementById('A# 4').click();
    if (pattern[Math.floor(currentBeat / beats[1])][15])
        document.getElementById('B 4').click();
    if (pattern[Math.floor(currentBeat / beats[1])][16])
        document.getElementById('C 5').click();
    if (pattern[Math.floor(currentBeat / beats[1])][17])
        document.getElementById('C# 5').click();
    if (pattern[Math.floor(currentBeat / beats[1])][18])
        document.getElementById('D 5').click();
    if (pattern[Math.floor(currentBeat / beats[1])][19])
        document.getElementById('D# 5').click();
    if (pattern[Math.floor(currentBeat / beats[1])][20])
        document.getElementById('E 5').click();
    if (pattern[Math.floor(currentBeat / beats[1])][21])
        document.getElementById('F 5').click();
    if (pattern[Math.floor(currentBeat / beats[1])][22])
        document.getElementById('F# 5').click();
    if (pattern[Math.floor(currentBeat / beats[1])][23])
        document.getElementById('G 5').click();
    if (pattern[Math.floor(currentBeat / beats[1])][24])
        document.getElementById('G# 5').click();
    if (pattern[Math.floor(currentBeat / beats[1])][25])
        document.getElementById('A 5').click();
    if (pattern[Math.floor(currentBeat / beats[1])][26])
        document.getElementById('A# 5').click();
    if (pattern[Math.floor(currentBeat / beats[1])][27])
        document.getElementById('B 5').click();
    
    if ((currentBeat+1) == 1){
    document.getElementById("bar-1").classList.add("highlighted");
    document.getElementById("bar-16").classList.remove("highlighted");
    }
    else{
        document.getElementById("bar-"+(Math.floor(currentBeat / beats[1] + 1))).classList.add("highlighted");
        document.getElementById("bar-"+Math.floor(currentBeat / beats[1])).classList.remove("highlighted");
    }
}

function playToggle() {
    let playButton = document.getElementById('playback');
    playing = !playing;
    if (playing) {
        playButton.innerText = "Stop";
        playSequence.start();
    }
    else {
        playButton.innerText = "Play";
        playSequence.stop();
        document.getElementById("bar-"+Math.floor(currentBeat / beats[1] + 1)).classList.remove("highlighted");
        currentBeat = 0;
    }
}

const userBpm = document.getElementById("bpm");
userBpm.addEventListener('input', function () {
    if (userBpm.value == "" || parseFloat(userBpm.value) <= 0)
        bpm = bpm
    else {
        bpm = parseFloat(userBpm.value);
        for (let b = 0; b < beats.length; b++)
            beats[b] = b * 15000 / bpm;
        if (playing) {
            playSequence.stop();
            playSequence = new Timer(() => { count() }, beats[1]);
            playSequence.start();
        }
        else
            playSequence = new Timer(() => { count() }, beats[1]);
    }
});

function initBpm() {
    bpm = 120;
    for (let b = 0; b < beats.length; b++) {
        beats[b] = b * 15000 / bpm;
    }
    playSequence = new Timer(() => { count() }, beats[1]);
}

function focusoutBpm() {
    const userBpm = document.getElementById("bpm");
    if (userBpm.value == "" || parseFloat(userBpm.value) <= 0)
        userBpm.value = bpm;
}
initBpm();