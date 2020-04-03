const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  let hours = date.getHours();
  const seconds = date.getSeconds();
  let ap = "";

  if (hours === 0 || hours === 12) {
    if (hours === 0) {
      ap = "AM";
      hours = 12;
    } else {
      ap = "PM";
    }
  } else {
    if (hours < 12) {
      ap = "AM";
    } else {
      hours = hours - 12;
      ap = "PM";
    }
  }

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds} ${ap}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
