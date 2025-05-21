// hamburger script-------
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });


    

// ---bar filling script-----
     document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.fill').forEach(fill => {
            fill.classList.add('animate');
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });

    const accuracySection = document.querySelector('.accuracy');
    if (accuracySection) {
      observer.observe(accuracySection);
    }
  });