"use strict";
let modal = document.querySelector(".video__modal");
let btn = document.querySelector(".video__prev");
let video = document.querySelector(".video__modal iframe");
let videoSrc = video.getAttribute("src");
let callbackBtn = document.querySelector(".promo__button");
let callback = document.querySelector(".callback");
let callbackClose = document.querySelector(".callback__close");
let anchors = document.querySelectorAll(".promo__nav a");
btn.onclick = () => {
  modal.style.display = "block";
  video.setAttribute("src", videoSrc);
}

callbackBtn.onclick = () => {
  callback.style.display = "block";
}

callbackClose.onclick = () => {
  callback.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    video.removeAttribute("src");
  }
  if (event.target == callback) {
    callback.style.display = "none";
  }
}

function makeActive() {
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].classList.remove("active");
  }
  this.classList.add("active");
};

for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", makeActive);
}


$(document).ready(function() {
  $(".promo__nav a").click(function(e) {
  	e.preventDefault();
  	let blockId = $(this).attr("href");
  	 $("html, body").animate({
          scrollTop: $(blockId).offset().top }, 1000);
  });

  if ($(window).width()<768) {
    $(".about__opinions").addClass("slick");
    $(".reviews__items").addClass("slick-reviews");
  }

    if ($(window).width()<500) {
  	   $(".video__content iframe").attr("width", "320px").attr("height", "180px");
    }




  $(".slick").slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $(".about__controls--left").click(function() {
    $(".slick").slick("slickPrev");
  });
  $(".about__controls--right").click(function() {
    $(".slick").slick("slickNext");
  });


  $(".slick-reviews").slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $(".reviews__controls--left").click(function() {
    $(".slick-reviews").slick("slickPrev");
  });
  $(".reviews__controls--right").click(function() {
    $(".slick-reviews").slick("slickNext");
  });
});
