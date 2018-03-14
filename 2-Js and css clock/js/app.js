const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
function setDate() {
  const now = new Date();
  /*
   * Add Seconds Functionality
   */
  // get the current seconds
  const sec = now.getSeconds();
  const secDegrees = ((sec / 60) * 360) + 90;
  // Move the seconds hand
  secondHand.style.transform = `rotate(${secDegrees}deg)`;

  /*
   * Add Minutes Functionality
   */
  // get the current minutes
  const Min = now.getMinutes();
  const MinDegrees = ((Min / 60) * 360) + 90;
  // Move the seconds hand
  minuteHand.style.transform = `rotate(${MinDegrees}deg)`;
}

setInterval(setDate, 1000);
