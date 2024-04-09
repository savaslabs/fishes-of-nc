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

// Page gallery slick slider
$(document).ready(function() {
  $('.page-gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
