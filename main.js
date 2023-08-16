var elHeader = document.querySelector('.site-header')
var elButton = document.querySelector('.site-header__menu')
var elSwitch = document.querySelector(".site-header__themebtn")


// elButton.addEventListener('click', () => {
//     elHeader.classlist.toggle('site-header--active');
// } );

elButton.addEventListener("click", function() {
    elHeader.classList.toggle("site-header--active")
})

elSwitch.addEventListener("click", function() {
    document.body.classList.toggle("dark")
})

$('.customer__list').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

