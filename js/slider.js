const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints:  {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
        //   spaceBetween: 
        },

        350: {
            slidesPerView: 1,
            spaceBetween: 0
        },

        780: {
            slidesPerView: 2,
            spaceBetween:20
        },

        920 : {
            slidesPerView: 2,
            spaceBetween: 0
        },

        // when window width is >= 480px
        1187: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1700: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
  });