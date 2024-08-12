const handleScroll = () => {
  var navbar = document.getElementById('navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition <= 20) {
    navbar.classList.remove('bg-blue-800');
    navbar.classList.add('transparent-bg');
  } else {
    navbar.classList.remove('transparent-bg');
    navbar.classList.add('bg-blue-800');
  }
};

export default handleScroll;
