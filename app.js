$(function(){
  let mySwiper = new Swiper('.swiper-container',{
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  effect: 'coverflow',
  })
});