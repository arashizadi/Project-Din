let beat = Array(16);
let beatInterval = Array(17);
let currentBeat;

let beatTag = document.createElement("p");
beatTag.setAttribute("Id", "beat");
let beatText = document.createTextNode("");
beatTag.appendChild(beatText);
document.body.appendChild(beatTag);

function Timer(callback, timeInterval) {
    this.timeInterval = timeInterval;

    this.start = () => {
        this.expected = Date.now() + this.timeInterval;
        currentBeat = 0;
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
        updatePlaylist();   
    }
}




let kickBPM = new Timer(() => {document.getElementById("kickButton").click()}, beatInterval[16]);

let update = new Timer(() => {count()}, beatInterval[1]);

function updatePlaylist() {
    kickBPM = new Timer(() => {document.getElementById("kickButton").click()}, beatInterval[16]);
    update = new Timer(() => {count()}, beatInterval[1]);
}
function startDrumBPM() {
    kickBPM.start();
    update.start();
}

function stopDrumBPM() {
    kickBPM.stop();
    update.stop();
}

function count() {
    if (currentBeat >= beatInterval[15]) {
        currentBeat = 0;
    }
    else
        currentBeat+= beatInterval[1];
    document.getElementById("beat").innerHTML = "Beat: " + (currentBeat/beatInterval[1] + 1);
}

function pattern(){
    switch(currentBeat/beatInterval[1] + 1) {
    case 1:
    //play every instrument that has the block enabled
      break;
        case 2:
    //play every instrument that has the block enabled
      break;
    case 3:
    //play every instrument that has the block enabled
      break;
    case 4:
    //play every instrument that has the block enabled
      break;
    case 5:
    //play every instrument that has the block enabled
      break;
    case 6:
    //play every instrument that has the block enabled
      break;
    case 7:
    //play every instrument that has the block enabled
      break;
    case 8:
    //play every instrument that has the block enabled
      break;
    case 9:
    //play every instrument that has the block enabled
      break;
    case 10:
    //play every instrument that has the block enabled
      break;
    case 11:
    //play every instrument that has the block enabled
      break;
    case 12:
    //play every instrument that has the block enabled
      break;
    case 13:
    //play every instrument that has the block enabled
      break;
    case 14:
    //play every instrument that has the block enabled
      break;
    case 15:
    //play every instrument that has the block enabled
      break;
    case 16:
    //play every instrument that has the block enabled
      break;
  }
  
}