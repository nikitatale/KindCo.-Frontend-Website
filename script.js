const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconAnimation(){
   
var videocon = document.querySelector("#video-container");
var playBtn = document.querySelector("#play");

videocon.addEventListener("mouseenter" , function(){
     gsap.to(playBtn, {
          scale : 1,
          opacity : 1
     })
} )

videocon.addEventListener("mouseleave", function(){
    gsap.to(playBtn, {
        scale : 0,
        opacity : 0
   })
})

videocon.addEventListener("mouseleave", function(){
    gsap.to(playBtn, {
        scale : 0,
        opacity : 0
   })
})

videocon.addEventListener("mousemove", function(dets){
    gsap.to(playBtn, {
       left: dets.x-70,
       top: dets.y-80
   })
})

}

videoconAnimation();

function loadinganimation(){
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3
    })

    gsap.from("#page1 #video-container", {
         scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5,
    })
}

loadinganimation();



function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    document.querySelectorAll(".child").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
          gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(1)",
          });
        });
        elem.addEventListener("mouseleave", function () {
          gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(0)",
          });
        });
      });
    }
    cursorAnimation();
    








