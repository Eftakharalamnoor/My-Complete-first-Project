
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {

    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click", () => toggleNavbar());





//Filter section

$(document).ready(function(){
    $(".button").click(function(){
        var name = $(this).attr('data-filter');
        if(name == "all"){
            $(".img-overlay").show('2000');
        }else{
            $(".img-overlay").not("."+name).hide('2000');
            $(".img-overlay").filter("."+name).show('2000');
        }
    })

    $(".navigation a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})


// Swiper Js Slider

    $(".carousel").owlCarousel({
          margin: 20,
          loop: true,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          responsive: {
            0:{
              items:1,
              nav: false
            },
            992:{
              items:2,
              nav: false
            },
            1000:{
              items:2,
              nav: false
            }
          }
        });
  





  