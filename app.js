const header = document.querySelector("#header");
const mobileMenu = document.querySelector(".burger-menu");
const mobileNav = document.querySelector(".mobile-nav");
const navlinks = document.querySelector(".logo-n-links");

let count = 1;
const width = window.matchMedia("(max-width: 870px)");

function changeImg() {
  header.style.backgroundImage = `url(./img/img${count}.jpg)`;
  count++;

  //   header.style.backgroundImage = `url(./img/img${count}.jpg)`;

  //   setTimeout(() => {
  //    //  header.style.backgroundImage = `url(./img/img${count}.jpg)`;
  //     //   count++;
  //   }, 1);
  if (count === 5) {
    count = 1;
  }
  console.log(count);
}

function mobile() {
  if (width.matches) {
    header.style.backgroundImage = `url(./img/img5.jpg)`;
  } else {
    setInterval(changeImg, 5000);
  }
}

mobile();
width.addListener(mobile);

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("close");
  mobileNav.classList.toggle("show");
});

window.addEventListener("scroll", e => {
  e.preventDefault();

  if (window.scrollY <= 5000) {
    navlinks.style.backgroundColor = "rgba(115, 195, 40, 0.8)";
  } else {
    navlinks.style.backgroundColor = "transparent";
  }

  if (window.scrollY === 0) {
    navlinks.style.backgroundColor = "transparent";
  }
});
