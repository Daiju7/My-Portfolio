'use strict';
const body = document.querySelector('body');



gsap
.timeline()
    .from(".js_opening-txt", {
        //1.2秒かけて
        duration: 1.2,
        //透明度0から
        autoAlpha: 0,
        //y軸40px下から
        y: 40,
    })
    .to(".js_opening", {
        //透明度0
        autoAlpha: 0,
        //時間0.6秒かけて
        duration: 1.0,
        
    })
    .to(".opening", {
        onComplete: () => {
            document.querySelector(".opening").classList.add("is-active");
            document.body.style.overflow = 'auto';
            window.scrollTo(0, 0);  // スクロール位置をトップにリセット
        }
        
    })

    .from(".main-visual", {
        duration: 1.5,
        opacity: 0,
        y:50,
        // delay: 3.0 // openingアニメの後に発動させるため少し遅らせてます
    })
    .from(".main-visual p", {
        x:40,
        duration:1.2,
        autoAlpha:0
    });
    
    


const fadeInTargets = document.querySelectorAll('.fadein');

window.addEventListener('scroll', () => {
    fadeInTargets.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (rect < windowHeight - 100) {
            el.classList.add('show');
        }
    });
});




