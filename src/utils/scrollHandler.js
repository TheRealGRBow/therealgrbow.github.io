const handleScroll = () => {
  var navbar = document.getElementById('navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition <= 20) {
    navbar.classList.remove('bg-indigo-700');
    navbar.classList.add('transparent-bg');
  } else {
    navbar.classList.remove('transparent-bg');
    navbar.classList.add('bg-indigo-700');
  }
};

export default handleScroll;
