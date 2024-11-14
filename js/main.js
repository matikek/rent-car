const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
  nav.classList.toggle("nav--active");
  allNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav--active");
    });
  });
  handleNavItemsAnimation();
};
const handleNavItemsAnimation = () => {
  let delayTime = 0;

  allNavItems.forEach((item) => {
    item.classList.toggle("nav-items-animation");
    item.style.animationDelay = "." + delayTime + "s";
    delayTime++;
  });
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener("click", handleNav);


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('left')) {
        entry.target.classList.add('slide-in-left');
      }
      else if (entry.target.classList.contains('right')) {
        entry.target.classList.add('slide-in-right');
      } else if (entry.target.classList.contains('how_to_rent')) {
        entry.target.classList.add('slide-in-top');
      }
      else if (entry.target.classList.contains('header__animation')) {
        entry.target.classList.add('tracking-in-contract-bck');
      }
      else if (entry.target.classList.contains('how_to_rent2')) {
        entry.target.classList.add('slide-in-bottom');
      }
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 
});

document.querySelectorAll('.left, .right, .how_to_rent,.how_to_rent2, .header__animation').forEach(element => {
  observer.observe(element);
});

//okno modal logowania / rejestracji
document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('toRegisterForm').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none'; 
    document.getElementById('registerForm').style.display = 'block'; 
    document.getElementById('clientPanelModalLabel').textContent = 'Rejestracja'; 
  });

  var modal = document.getElementById('clientPanelModal');
  modal.addEventListener('hidden.bs.modal', function () {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('clientPanelModalLabel').textContent = 'Logowanie';
  });
});