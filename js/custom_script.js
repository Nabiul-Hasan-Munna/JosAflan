$(document).ready(function () {
  popUpButton();
  gotoTop();
  colorChanger();
  fixedMenu();
  progressBar();
  sliderPricing();
  sliderClients();
  filterPortfolio();
  venoBox();
  counterup();
  wowjsanimation();
});
function popUpButton(){
  $(window).on("scroll", function () {
    let scrolling = $(this).scrollTop();
    if (scrolling > 300) {
      $(".popup-UpDown").fadeIn();
    } else {
      $(".popup-UpDown").fadeOut();
    }
  });
}
function gotoTop(){
  $(".popup-UpDown").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
}
function colorChanger(){
  var colorSheets = [
    {
      color: "#3f88d2",
      title: "Default",
      href: "css/color__switcher/color__default.css",
    },
    {
      color: "#efef95",
      title: "Yellow",
      href: "css/color__switcher/color__yellow.css",
    },
    {
      color: "#ff5050",
      title: "Fade Red",
      href: "css/color__switcher/color__red.css",
    },
    {
      color: "#fffffff",
      title: "White",
      href: "css/color__switcher/color__white.css",
    },
    {
      color: "#ff7907",
      title: "Orange",
      href: "css/color__switcher/color__orange.css",
    },
    {
      color: "#18b1a3",
      title: "Fade Green",
      href: "css/color__switcher/color__green.css",
    },
  ];
  ColorSwitcher.init(colorSheets);
}
function fixedMenu(){
$(window).on("scroll", function () {
  var scrollWindow = $(window).scrollTop();
  if (scrollWindow >= 50) {
    $(".main-menu").addClass("fixed-menu");
  } else {
    $(".main-menu").removeClass("fixed-menu");
  }
});
}
function progressBar(){
$("#html-progress").circleDiagram({
  percent: "90%",
  size: "150",
  borderWidth: "10",
  bgFill: "#777777",
  frFill: "#3f88d2",
  textSize: "24",
  textColor: "#3f88d2",
});
$("#css-progress").circleDiagram({
  percent: "85%",
  size: "150",
  borderWidth: "10",
  bgFill: "#777777",
  frFill: "#3f88d2",
  textSize: "24",
  textColor: "#3f88d2",
});
$("#javascript-progress").circleDiagram({
  percent: "55%",
  size: "150",
  borderWidth: "10",
  bgFill: "#777777",
  frFill: "#3f88d2",
  textSize: "24",
  textColor: "#3f88d2",
});
$("#jquery-progress").circleDiagram({
  percent: "75%",
  size: "150",
  borderWidth: "10",
  bgFill: "#777777",
  frFill: "#3f88d2",
  textSize: "24",
  textColor: "#3f88d2",
});
$("#wordpress-progress").circleDiagram({
  percent: "60%",
  size: "150",
  borderWidth: "10",
  bgFill: "#777777",
  frFill: "#3f88d2",
  textSize: "24",
  textColor: "#3f88d2",
});
$("#development-progress").circleDiagram({
  percent: "85%",
  size: "150",
  borderWidth: "10",
  bgFill: "#777777",
  frFill: "#3f88d2",
  textSize: "24",
  textColor: "#3f88d2",
});
$("#uiux-progress").circleDiagram({
  percent: "45%",
  size: "150",
  borderWidth: "10",
  bgFill: "#777777",
  frFill: "#3f88d2",
  textSize: "24",
  textColor: "#3f88d2",
});
$("#dataentry-progress").circleDiagram({
  percent: "55%",
  size: "150",
  borderWidth: "10",
  bgFill: "#777777",
  frFill: "#3f88d2",
  textSize: "24",
  textColor: "#3f88d2",
});
}
function sliderPricing(){
$(".pricing-each-parent").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  nextArrow: '<i class="fas fa-arrow-right"></i>',
  prevArrow: '<i class="fas fa-arrow-left"></i>',
  vertical: true,
  verticalSwiping: true,
  centerMode: true,
  centerPadding: "0",
  asNavFor: ".pricing-details-parent",
  //         //
  //         // responsive: [
  //         //    {
  //         //      breakpoint: 576,
  //         //      settings: {
  //         //        slidesToShow: 2,
  //         //      }
  //         //    },
  //         //    {
  //         //      breakpoint: 481,
  //         //      settings: {
  //         //        slidesToShow: 1,
  //         //      }
  //         //    }
  //         //  ]
});

$(".pricing-details-parent").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  arrows: false,
  asNavFor: ".pricing-each-parent",

  //
  // responsive: [
  //    {
  //      breakpoint: 576,
  //      settings: {
  //        slidesToShow: 2,
  //      }
  //    },
  //    {
  //      breakpoint: 481,
  //      settings: {
  //        slidesToShow: 1,
  //      }
  //    }
  //  ]
});
}
function filterPortfolio(){
$(".portfolioExtend").isotope({
  itemSelector: ".portfolioCol",
  layoutMode: "fitRows",
});

$(".filter-ul li a").click(function () {
  $(".filter-ul li a").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");

  $(".portfolioExtend").isotope({
    filter: selector,
  });
  return false;
});
}
function sliderClients(){
$(".clients-item").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  fade: true,
  nextArrow: '<i class="fas fa-arrow-right right"></i>',
  prevArrow: '<i class="fas fa-arrow-left left"></i>',
  //
  // responsive: [
  //    {
  //      breakpoint: 576,
  //      settings: {
  //        slidesToShow: 2,
  //      }
  //    },
  //    {
  //      breakpoint: 481,
  //      settings: {
  //        slidesToShow: 1,
  //      }
  //    }
  //  ]
});
}
function venoBox(){
$(".venobox").venobox();
}
function counterup(){
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});
}
function wowjsanimation(){
  wow = new WOW();
  wow.init();
}