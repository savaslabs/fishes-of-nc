// Function to fetch and insert SVG content
function fetchAndInsertSVG(containerId, svgPath) {
    fetch(svgPath)
        .then(response => response.text())
        .then(svgData => {
            document.getElementById(containerId).innerHTML = svgData;
        })
        .catch(error => console.error('Error loading SVG:', error));
}

fetchAndInsertSVG('swim-svg-1', './assets/swim.svg');
fetchAndInsertSVG('swim-svg-2', './assets/swim.svg');

// Page gallery slider functionality
const track = document.querySelector('.page-gallery');
const images = track.querySelectorAll('img');
const imageWidth = images[0].offsetWidth;
const gap = 24;

let trackWidth = (imageWidth + gap) * images.length;
let maxDelta = trackWidth - track.offsetWidth;

window.onresize = () => {
  imageWidth = images[0].offsetWidth;
  trackWidth = (imageWidth + gap) * images.length;
  maxDelta = trackWidth - track.offsetWidth;
};

window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  
  let nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) - mouseDelta / maxDelta * 100;
  nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -(100 * (images.length - 1)));

  track.dataset.percentage = nextPercentage;

  if (!isNaN(nextPercentage)) {
    track.style.transform = `translateX(${nextPercentage}%)`;
  }
};
