window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    document.querySelector('#navbar').style.background = "#333";
    document.querySelector('#navbar').style.borderBottom = "none";
  } else {
    document.querySelector('#navbar').style.background = "transparent";
    document.querySelector('#navbar').style.borderBottom = "solid 0.5px #F8F8FF";
    
  }
});