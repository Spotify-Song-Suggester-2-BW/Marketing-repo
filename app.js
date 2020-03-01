const header = document.querySelector("#header");
const mobileMenu = document.querySelector(".burger-menu");
const mobileNav = document.querySelector(".mobile-nav");

let count = 1;

function changeImg() {
  header.style.backgroundImage = `url(./img/img${count}.jpg)`;
  setTimeout(() => {
    count++;
  }, 1000);
  if (count === 6) {
    count = 1;
  }
  console.log(count);
}

// setInterval(changeImg, 4000);

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("close");
  mobileNav.classList.toggle("show");
});
