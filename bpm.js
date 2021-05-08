let beat = Array(16);
let beatInterval = Array(17);
let bpm;

function Timer(callback, timeInterval) {
    this.timeInterval = timeInterval;

    this.start = () => {
        this.expected = Date.now() + this.timeInterval;
        this.timeout = setTimeout(this.round, this.timeInterval);
        console.log("Started");
    }
    this.stop = () => {
        clearTimeout(this.timeout);
        console.log("Stopped");
    }
    this.round = () => {
        let drift = Date.now() - this.expected;
        callback();
        this.expected += this.timeInterval;
        this.timeout = setTimeout(this.round, this.timeInterval - drift);
    }
}

function changeBPM(_bpm) {
    bpm = _bpm;
    for (let b = 0; b < beatInterval.length; b++) {
        beatInterval[b] = b*15000/bpm;
        console.log(beatInterval[b]);
    }
}




const kickBPM = new Timer(() => {document.getElementById("kickButton").click()}, 500);
const snareBPM = new Timer(() => {document.getElementById("snareButton").click()}, 1000);
const hihatBPM = new Timer(() => {document.getElementById("hihatButton").click()}, 250);

function startDrumBPM() {
    kickBPM.start();
    snareBPM.start();
    hihatBPM.start();
}

function stopDrumBPM() {
    kickBPM.stop();
    snareBPM.stop();
    hihatBPM.stop();
}





function map(value, minA, maxA, minB, maxB) {
    return (1 - ((value - minA) / (maxA - minA))) * minB + ((value - minA) / (maxA - minA)) * maxB;
}