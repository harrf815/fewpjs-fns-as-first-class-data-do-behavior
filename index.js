/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(str) {
  const time = str.split(":");
  const hour = parseInt(time, 10);

  if (hour < 12 ) {
    return displayMessage('Good Morning');
  }
  else if (hour >=12 && hour <= 17) {
    return displayMessage('Good Afternoon');
  }
  else {
    return displayMessage('Good Evening');
  }
}

function displayMessage(msg) {
  const element = document.getElementById("greeting");
  element.innerText = msg;
  return msg;
}