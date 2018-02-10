// array holds the keys information
const keys = [
  {keyName: "A", keyNumber: 65, keySound: "claps"},
  {keyName: "G", keyNumber: 71, keySound: "boom"},
  {keyName: "H", keyNumber: 72, keySound: "ride"},
  {keyName: "J", keyNumber: 74, keySound: "snare"},
  {keyName: "K", keyNumber: 75, keySound: "tom"},
  {keyName: "L", keyNumber: 76, keySound: "tink"},
]

// Grab the div which will contain all the keys
const keysDiv = document.getElementById('keys'),
// Grab the div which will contain all the audios
      audioDiv = document.getElementById('audio');

// function to create keys HTML
function createKeysHTML() {
  let keyItems;
  for(key of keys) {
    keyItems += `<div data-key=${key.keyNumber} class="key">
                <kbd>${key.keyName}</kbd>
                <span class="sound">${key.keySound}</span>
              </div>`;
  }
  return keyItems;
}
// function to create Audio HTML
function createAudioHTML() {
  let audioItems;
  for(key of keys) {
    audioItems += `<audio data-key=${key.keyNumber} src="sounds/${key.keySound}.wav"></audio>`;
  }
  return audioItems;
}

// include keys HTML within the keysDiv
keysDiv.innerHTML =createKeysHTML();
// include keys HTML within the keysDiv
audioDiv.innerHTML =createAudioHTML();

// function to play sound on keydown
window.addEventListener('keydown', function(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
      key = document.querySelector(`.key[data-key="${e.keyCode}"]`),
      allKeys = document.querySelectorAll('.key');
  // if no sound for the pressed key return(finish) the function
  if(!audio) return;
  //set the audio time to 0
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');

  // function to remove the playing class
  function removetransition(e) {
    key.classList.remove('playing');
  }
  // after the transition ends remove the playing class
  allKeys.forEach((key) => {
    key.addEventListener('transitionend', removetransition);
  })

});
