const swiper = new Swiper('.swiper', {
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + ' .bullet">' + '<svg  width="60px" height="60px"><use  href="./images/svg/icons.svg#'+(index+1)+'"></use></svg></div>';
          },
      },
      loop:true,
      effect:'fade',
      fadeEffect:{
        crossFade:true
      },

});
