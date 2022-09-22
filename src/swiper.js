const swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    waitForTransition: true,
    reverseDirection: true,
  },
  cssMode: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
});
