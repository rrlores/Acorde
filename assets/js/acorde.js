(function($) {
    'use strict';
    $('.item').on('mouseenter', function() {
      $(this).find('h2').addClass('large');
    });
    $('.item').on('mouseleave', function() {
      $(this).find('h2').removeClass('large');
    });
  })(jQuery)

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
    }



      var isAnimating = false;

      function scrollLeftAnimate(elem, unit) {

          if (!elem || isAnimating) {
              //if element not found / if animating, do not execute slide
              return;
          }

          var time = 300; // animation duration in MS, the smaller the faster.
          var from = elem.scrollLeft; // to continue the frame posistion
          var aframe =
              10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)
          isAnimating = true; //if animating prevent double trigger animation

          var start = new Date().getTime(),
              timer = setInterval(function () {
                  var step = Math.min(1, (new Date().getTime() - start) / time);
                  elem.scrollLeft = ((step * unit) + from);
                  if (step === 1) {
                      clearInterval(timer);
                      isAnimating = false;
                  }
              }, aframe);
      }



      function initDealCarrousel(dealCarrouselID) {
          var target = document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox");
          var cardOutterWidth;
          var maxCarrouselScroll;

          function updateUpaCarrouselInfo() {
              cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .va-card").offsetWidth; //you can define how far the scroll
              maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .va-card").length *
                      cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .va-carrousel-flexbox")
                  .clientWidth;
          }

          document.querySelector("#" + dealCarrouselID + " .deals-scroll-left").addEventListener("click",
              function () {
                  updateUpaCarrouselInfo(); //in case window resized, will get new info
                  if (target.scrollLeft > 0) {
                      scrollLeftAnimate(target, -cardOutterWidth * 2);
                  }
              }
          );

          document.querySelector("#" + dealCarrouselID + " .deals-scroll-right").addEventListener("click",
              function () {
                  updateUpaCarrouselInfo(); //in case window resized, will get new info 
                  if (target.scrollLeft < maxCarrouselScroll) {
                      scrollLeftAnimate(target, cardOutterWidth * 2);
                  }
              }
          );
      }
     
      function onmika() {
        document.getElementById("overlay_mika").style.display = "block";
      }
      
      function offmika() {
        document.getElementById("overlay_mika").style.display = "none";
      }
      function ongui() {
        document.getElementById("overlay_gui").style.display = "block";
      }
      
      function offgui() {
        document.getElementById("overlay_gui").style.display = "none";
      }
      function onluiz() {
        document.getElementById("overlay_luiz").style.display = "block";
      }
      
      function offluiz() {
        document.getElementById("overlay_luiz").style.display = "none";
      }
      function onjulio() {
        document.getElementById("overlay_julio").style.display = "block";
      }
      
      function offjulio() {
        document.getElementById("overlay_julio").style.display = "none";
      }
      function ondiogo() {
        document.getElementById("overlay_diogo").style.display = "block";
      }
      
      function offdiogo() {
        document.getElementById("overlay_diogo").style.display = "none";
      }


      