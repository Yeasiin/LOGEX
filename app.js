const faqHeading = document.querySelectorAll(".faq-card");

faqHeading.forEach((el) => {
  return el.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("open");
  });
});

$(".carousel").owlCarousel({
  loop: true,
  margin: 10,
  // nav: true,
  responsive: {
    0: {
      items: 1,
    },
    550: {
      items: 2,
    },
    800: { items: 3 },
  },
});

const burgerIcon = document.querySelector(".hamburger");
const navigation = document.querySelector("nav ul");

burgerIcon.addEventListener("click", () => {
  navigation.classList.toggle("open");
  burgerIcon.classList.toggle("open");
});

//
window.onscroll = function () {
  myFunction();
};

const navbar = document.querySelector(".fixedNav");
const sticky = navbar.offsetTop;
console.log(window.pageYOffset, sticky);

function myFunction() {
  if (window.pageYOffset >= 150) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
