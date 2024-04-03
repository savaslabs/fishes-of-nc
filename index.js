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