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

// Footer wave animates on scroll
function isWaveInViewport(el) {
  var rect     = el.getBoundingClientRect(),
      vWidth   = window.innerWidth || document.documentElement.clientWidth,
      vHeight  = window.innerHeight || document.documentElement.clientHeight,
      efp      = function (x, y) { return document.elementFromPoint(x, y) };     

  // Return false if it's not in the viewport
  if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight)
    return false;

  return (
    el.contains(efp(rect.left,  rect.top)) || el.contains(efp(rect.right, rect.top)) ||
    el.contains(efp(rect.right, rect.bottom)) || el.contains(efp(rect.left,  rect.bottom))
  );
}

// Lightbox JS
let pages = document.querySelectorAll(".page-gallery .page");
let lightbox = document.querySelector(".lightbox");
let selectedPage = lightbox.querySelector(".page");
let close = lightbox.querySelector(".close");

pages.forEach(page => {
  page.addEventListener('click', function() {
    lightbox.setAttribute('aria-hidden', 'false');

    let clickedSrc = page.getAttribute('src');
    selectedPage.setAttribute('src', clickedSrc);
  });
});

close.addEventListener('click', function() {
  lightbox.setAttribute('aria-hidden', 'true');
});

window.addEventListener('click', function(event) {
  if (event.target.classList.contains('lightbox')) {
    lightbox.setAttribute('aria-hidden', 'true');
  }
});