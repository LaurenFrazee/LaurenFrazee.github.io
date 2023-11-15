const navLinks = document.querySelectorAll('#hobbyNav a');
const sections = document.querySelectorAll('.content-section');
const homesection =document.getElementById('home');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSectionId = link.getAttribute('href').slice(1);
    sections.forEach((section) => {
      section.style.display = 'none';
      homesection.style.display='none'
    });
    document.getElementById(targetSectionId).style.display = 'block';

  });
});

var listItems = document.querySelectorAll('ul li a');

listItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    listItems.forEach(function(li) {
      li.classList.remove('active');
    });
    event.target.classList.add('active');
  });
});
