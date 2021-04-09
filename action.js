let hihatCounter = 1;
const createHihatButton = document.createElement('button');
createHihatButton.classList.add("noselect");


createHihatButton.innerText = "Create Hi-Hat Channel";
createHihatButton.addEventListener("click", async () => {
    createHihatChannel(hihatCounter);
    hihatCounter++;
});

document.body.appendChild(createHihatButton);


