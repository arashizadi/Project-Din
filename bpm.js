let beats = Array(16);
let currentBeat = 0;

let beatTag = document.createElement("p");
beatTag.setAttribute("Id", "beat");
let beatText = document.createTextNode("");
beatTag.appendChild(beatText);
document.body.appendChild(beatTag);

function Timer(callback, timeInterval) {
    this.timeInterval = timeInterval;

    this.start = () => {
        this.expected = Date.now() + this.timeInterval;
        this.timeout = setTimeout(this.round, this.timeInterval);
    }
    this.stop = () => {
        clearTimeout(this.timeout);
    }
    this.round = () => {
        let drift = Date.now() - this.expected;
        callback();
        this.expected += this.timeInterval;
        this.timeout = setTimeout(this.round, this.timeInterval - drift);
    }
}

let playSequence = new Timer(() => { count() }, beats[1]);


function count() {
    if (currentBeat >= beats[15])
        currentBeat = 0;
    else
        currentBeat += beats[1];
    document.getElementById("beat").innerHTML = "Beat: " + Math.floor(currentBeat / beats[1] + 1);
    sequence();
}

