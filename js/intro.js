const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.7 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

var a=1;
function myDarkmode(){
    const darkmode = new Darkmode();
    console.log(darkmode.isActivated())
    a+=1;
    if(a%2==0){
    alert("Dark Mode may not work properly it is on beta stage");
    }
}