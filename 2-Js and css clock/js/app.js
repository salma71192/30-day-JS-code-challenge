const secondHand = document.querySelector('.second-hand');
function setDate() {
  const now = new Date();
  const sec = now.getSeconds();
  const secDegrees = ((sec / 60) * 360) + 90;
  console.log(sec);

  secondHand.style.transform = `rotate(${secDegrees}deg)`;
}

setInterval(setDate, 1000);
