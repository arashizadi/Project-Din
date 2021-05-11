const sequencer = document.createElement("TABLE");
const lines = new Array(28);
for (let i = 0; i < lines.length+1; i++) {
    const tr = document.createElement("TR");
    const th = document.createElement("TH");
    th.classList.add("button");
    const btn = document.createElement("button");
    switch (i) {
        case 0:
            btn.setAttribute("onclick", "document.getElementById('kickButton').click()");
            btn.innerText = "Kick";
            break;
        case 1:
            btn.setAttribute("onclick", "document.getElementById('snareButton').click()");
            btn.innerText = "Snare";
            break;
        case 2:
            btn.setAttribute("onclick", "document.getElementById('hihatButton').click()");
            btn.innerText = "Hi-hat";
            break;
        case 3:
            btn.setAttribute("onclick", "document.getElementById('whiteNoiseButton').click()");
            btn.innerText = "White Noise";
            break;
        case 4:
            btn.setAttribute("onclick", "document.getElementById('C 4').click()");
            btn.innerText = "Synth C4";
            break;
        case 5:
            btn.setAttribute("onclick", "document.getElementById('C# 4').click()");
            btn.innerText = "Synth C#4";
            break;
        case 6:
            btn.setAttribute("onclick", "document.getElementById('D 4').click()");
            btn.innerText = "Synth D4";
            break;
        case 7:
            btn.setAttribute("onclick", "document.getElementById('D# 4').click()");
            btn.innerText = "Synth D#4";
            break;
        case 8:
            btn.setAttribute("onclick", "document.getElementById('E 4').click()");
            btn.innerText = "Synth E4";
            break;
        case 9:
            btn.setAttribute("onclick", "document.getElementById('F 4').click()");
            btn.innerText = "Synth F4";
            break;
        case 10:
            btn.setAttribute("onclick", "document.getElementById('F# 4').click()");
            btn.innerText = "Synth F#4";
            break;
        case 11:
            btn.setAttribute("onclick", "document.getElementById('G 4').click()");
            btn.innerText = "Synth G4";
            break;
        case 12:
            btn.setAttribute("onclick", "document.getElementById('G# 4').click()");
            btn.innerText = "Synth G#4";
            break;
        case 13:
            btn.setAttribute("onclick", "document.getElementById('A 4').click()");
            btn.innerText = "Synth A4";
            break;
        case 14:
            btn.setAttribute("onclick", "document.getElementById('A# 4').click()");
            btn.innerText = "Synth A#4";
            break;
        case 15:
            btn.setAttribute("onclick", "document.getElementById('B 4').click()");
            btn.innerText = "Synth B4";
            break;
        case 16:
            btn.setAttribute("onclick", "document.getElementById('C 5').click()");
            btn.innerText = "Synth C5";
            break;
        case 17:
            btn.setAttribute("onclick", "document.getElementById('C# 5').click()");
            btn.innerText = "Synth C#5";
            break;
        case 18:
            btn.setAttribute("onclick", "document.getElementById('D 5').click()");
            btn.innerText = "Synth D5";
            break;
        case 19:
            btn.setAttribute("onclick", "document.getElementById('D# 5').click()");
            btn.innerText = "Synth D#5";
            break;
        case 20:
            btn.setAttribute("onclick", "document.getElementById('E 5').click()");
            btn.innerText = "Synth E5";
            break;
        case 21:
            btn.setAttribute("onclick", "document.getElementById('F 5').click()");
            btn.innerText = "Synth F5";
            break;
        case 22:
            btn.setAttribute("onclick", "document.getElementById('F# 5').click()");
            btn.innerText = "Synth F#5";
            break;
        case 23:
            btn.setAttribute("onclick", "document.getElementById('G 5').click()");
            btn.innerText = "Synth G5";
            break;
        case 24:
            btn.setAttribute("onclick", "document.getElementById('G# 5').click()");
            btn.innerText = "Synth G#5";
            break;
        case 25:
            btn.setAttribute("onclick", "document.getElementById('A 5').click()");
            btn.innerText = "Synth A5";
            break;
        case 26:
            btn.setAttribute("onclick", "document.getElementById('A# 5').click()");
            btn.innerText = "Synth A#5";
            break;
        case 27:
            btn.setAttribute("onclick", "document.getElementById('B 5').click()");
            btn.innerText = "Synth B5";
            break;
        case 28:
            btn.setAttribute("onclick", "playToggle()");
            btn.setAttribute("Id", "playback");
            btn.setAttribute("style", "align-items: center;");
            btn.innerText = "Play";
            break;
    }
    th.appendChild(btn);
    if (i == 28)
    th.innerHTML += "<label for='bpm'>\xA0\xA0\xA0BPM\xA0</label><input style='display: inline-block;'type='number' onfocusout='focusoutBpm()' min='0' id='bpm' name='bpm' value=120 size = 1>";
    tr.appendChild(th);
    for (let j = 0; j < beats.length; j++) {
        const td = document.createElement("TD");
        td.classList.add("checkbox");
        const inpt = document.createElement("input");
        inpt.setAttribute("type", "checkbox");
        inpt.setAttribute("onclick", "changePattern("+j+", "+i+")");
        if (i == 0)
            inpt.setAttribute("Id", "kick" + j);
        else if (i == 1)
            inpt.setAttribute("Id", "snare" + j);
        else if (i == 2)
            inpt.setAttribute("Id", "hihat" + j);
        else if (i == 3)
            inpt.setAttribute("Id", "whitenoise" + j);
        else if (i == 4)
            inpt.setAttribute("Id", "c4_" + j);
        else if (i == 5)
            inpt.setAttribute("Id", "cs4_" + j);
        else if (i == 6)
            inpt.setAttribute("Id", "d4_" + j);
        else if (i == 7)
            inpt.setAttribute("Id", "ds4_" + j);
        else if (i == 8)
            inpt.setAttribute("Id", "e4_" + j);
        else if (i == 9)
            inpt.setAttribute("Id", "f4_" + j);
        else if (i == 10)
            inpt.setAttribute("Id", "fs4_" + j);
        else if (i == 11)
            inpt.setAttribute("Id", "g4_" + j);
        else if (i == 12)
            inpt.setAttribute("Id", "gs4_" + j);
        else if (i == 13)
            inpt.setAttribute("Id", "a4_" + j);
        else if (i == 14)
            inpt.setAttribute("Id", "as4_" + j);
        else if (i == 15)
            inpt.setAttribute("Id", "b4_" + j);
        else if (i == 16)
            inpt.setAttribute("Id", "c5_" + j);
        else if (i == 17)
            inpt.setAttribute("Id", "cs5_" + j);
        else if (i == 18)
            inpt.setAttribute("Id", "d5_" + j);
        else if (i == 19)
            inpt.setAttribute("Id", "ds5_" + j);
        else if (i == 20)
            inpt.setAttribute("Id", "e5_" + j);
        else if (i == 21)
            inpt.setAttribute("Id", "f5_" + j);
        else if (i == 22)
            inpt.setAttribute("Id", "fs5_" + j);
        else if (i == 23)
            inpt.setAttribute("Id", "g5_" + j);
        else if (i == 24)
            inpt.setAttribute("Id", "gs5_" + j);
        else if (i == 25)
            inpt.setAttribute("Id", "a5_" + j);
        else if (i == 26)
            inpt.setAttribute("Id", "as5_" + j);
        else if (i == 27)
            inpt.setAttribute("Id", "b5_" + j);
        else if (i == 28) {
            inpt.setAttribute("Id", "beat" + j);
            inpt.disabled = true;
            inpt.style.display = "None";
        }
        if (i != 28){
        td.appendChild(inpt);
        tr.appendChild(td)
        }
    }
    if (i == 28){
        for (let j = 0; j < beats.length; j++) {
            const td = document.createElement("TD");
            const h1 = document.createElement("H1");
            h1.setAttribute("Id", "bar-"+(j+1));
            if(j < 9)
            h1.textContent="0"+(j+1);
            else
            h1.textContent=j+1;
            td.appendChild(h1);
            tr.appendChild(td);
        }
    }
    sequencer.appendChild(tr);
}
document.body.appendChild(sequencer);

