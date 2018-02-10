// array holds the keys information
const keys = [
  {keyName: "A", keyNumber: 65, keySound: "clap"},
  {keyName: "S", keyNumber: 83, keySound: "hihat"},
  {keyName: "F", keyNumber: 70, keySound: "openhat"},
  {keyName: "G", keyNumber: 71, keySound: "boom"},
  {keyName: "H", keyNumber: 72, keySound: "ride"},
  {keyName: "J", keyNumber: 74, keySound: "snare"},
  {keyName: "K", keyNumber: 75, keySound: "tom"},
  {keyName: "L", keyNumber: 76, keySound: "tink"},
]

// Grab the div which will contain all the keys
const keysDiv = document.getElementById('keys');

// function to create keys HTML
function createHTML() {
  let keyItems;
  for(key of keys) {
    keyItems += `<div data-key=${key.keyNumber} class="key">
                <kbd>${key.keyName}</kbd>
                <span class="sound">${key.keySound}</span>
              </div>`;
  }
  return keyItems;
}

// include keys HTML within the keysDiv
keysDiv.innerHTML =createHTML();
