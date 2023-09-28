const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y : '-10',
        opacity : 0,
        duration : 1,
        ease : Expo.easeInOut
    })
    .to(".boundingElem", {
        y : 0,
        ease : Expo.easeInOut,
        delay : -1,
        duration : 2,
        stagger : 0.2
    })
    .to("#landingPageFooter", {
        opacity : 1,
        duration : 1,
        delay : -1,
        ease : Expo.easeInOut
    })
}

// function circleSqueeze(){
//     var xScale = 1;
//     var yScale = 1;

//     var xDiff = 0;
//     var yDiff = 0;
//     var xPrev = 0;
//     var yPrev = 0;

//     window.addEventListener("mousemove", (dets) => {
//         xScale = gsap.util.clamp(0.8,1.2,dets.clientX - xPrev);
//         yScale = gsap.util.clamp(0.8,1.2,dets.clientY - yPrev);


//         xPrev = dets.clientX;
//         yPrev = dets.clientY;


//         circleMouseFollower(xScale,yScale)
//     })
// }
// circleSqueeze();
function circleMouseFollower(xScale,yScale) {
    window.addEventListener("mousemove", (dets) => {
        miniCircle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
circleMouseFollower();

firstPageAnim();

document.querySelectorAll(".elem").forEach((elem) => {
    var rotate = 0;
    var diffRot = 0;
    elem.addEventListener("mousemove", (dets) => {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffRot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity : 1,
            ease : Power3,
            top : diff,
            left : dets.clientX,
            rotate : gsap.utils.clamp(-20,20,diffRot)
        })
    })
    elem.addEventListener("mouseleave", (dets) => {
        
        gsap.to(elem.querySelector("img"), {
            opacity : 0,
            ease : Power3,
            
        })
    })
})
