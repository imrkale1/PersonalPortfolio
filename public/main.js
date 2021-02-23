

(()=>{
    // document.querySelector(".inner").classList.add("animate__animated animate__zoomIn")
    const aboutSection=document.querySelector(".about-section")
    tabsContainer=document.querySelector(".about-tabs")
    tabsContainer.addEventListener("click",(event)=>{

        if(event.target.classList.contains("tab-items") &&
        !event.target.classList.contains("active"))
        {
            const target=event.target.getAttribute("data-target");
            console.log(target);
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            event.target.classList.add("active","outer-shadow");
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();
var textWrapper = document.querySelector('.profile_name');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// const resume=document.querySelector(".resume")
// resume.addEventListener("click",(event)=>{
// console.log("HHH")
//   var filename="resume.pdf";

// })


anime.timeline({loop: true})
  .add({
    targets: '.profile_name .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.profile_name',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  // document.querySelector(".btn-1").addEventListener("click",function(){
  //   TweenMax.to(".maininfo_aboutme",1,{opacity:1,scaleY:1})
  // })
  


// var tl = new TimelineMax({onUpdate:updatePercentage});
// const controller = new ScrollMagic.Controller();

// tl.to(".maininfo_aboutme", 1, {opacity: 1,scaleY:1});
// // // t1.from(".grid-item",.1,{x:200,opacity:0});
// // // tl.from('span', 1, { width: 0},"=-.5");
// // // tl.from('#office', 1, {x:-200, opacity: 0},"=-1");
// // // tl.from('#building', 1, {x:200, opacity: 0},"=-.7");
// const scene = new ScrollMagic.Scene({
//   triggerElement: ".about-section",
//             triggerHook: "onLeave",
//             duration: "100%",
// }).setPin(".about-section").setTween(t1).addTo(controller);
// function updatePercentage() {
//   // progress.style.width = `${(tl.progress() *100 ).toFixed()}`;
//   // inner.classList.add("animate__animated animate__zoomIn")
//   tl.progress();
//   console.log(tl.progress());
// }