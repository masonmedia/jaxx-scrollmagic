var controller = new ScrollMagic.Controller();

// Parallax background
new ScrollMagic.Scene({
        triggerElement: "#parallax",
        triggerHook: "onEnter",
    })
    .duration('200%')
    .setTween("#parallax", {
        backgroundPosition: "50% 100%",
        ease: Linear.easeNone
    })
    //.addIndicators() // for debugging purposes
    .addTo(controller);


//scene 2 set pin 1

new ScrollMagic.Scene({
        triggerElement: "#slidein",
        triggerHook: "onLeave",
    })
    .duration('200%')

    .setPin("#slidein")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#slidein",
        triggerHook: "onLeave",
    })
    .setPin("#slidein")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);


//scene 3 set pin 2

new ScrollMagic.Scene({
        triggerElement: "#slidein2",
        triggerHook: "onLeave",
    })
    .duration('100%')

    .setPin("#slidein2")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#slidein2",
        triggerHook: "onLeave",
    })
    .setPin("#slidein2")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);




//entrance animations

//slide left

var fromLeftTimeline = new TimelineMax();
var fromLeftFrom = TweenMax.from(".left", 1, {
    x: -500
});
var fromLeftTo = TweenMax.to(".left", 1, {
    x: 0
});
fromLeftTimeline
    .add(fromLeftFrom)
    .add(fromLeftTo);



//scene 3 slide in left

new ScrollMagic.Scene({
        triggerElement: "#slidein3",
        offset: 200,
    })
    .setTween(fromLeftTimeline)
    .duration(400)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);



// Fade in

var fadeInTimeline = new TimelineMax();
var fadeInFrom = TweenMax.from(".opacity", 1, {
    autoAlpha: 0
});
var fadeInTo = TweenMax.to(".opacity", 1, {
    autoAlpha: 1
});
fadeInTimeline
    .add(fadeInFrom)
    .add(fadeInTo);

//fade in scene 

new ScrollMagic.Scene({
        triggerElement: "#slidein3",
        offset: 200,
    })
    .setTween(fadeInTimeline)
    .duration(400)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

//Fly in from the left - animation

var fromBottomTimeline = new TimelineMax();
var fromBottomFrom = TweenMax.from(".bottom", 1, {
    y: 300
});
var fromBottomTo = TweenMax.to(".bottom", 1, {
    y: 0
});
fromBottomTimeline
    .add(fromBottomFrom)
    .add(fromBottomTo);

//scene 

new ScrollMagic.Scene({
        triggerElement: "#slidein3",
        offset: 200,
    })
    .setTween(fromBottomTimeline)
    .duration(400)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);



//staggering tween 

$(".stagger-tween").each(function() {
  
  var stagger = TweenMax.staggerFrom($(this).find(".stagger-tween-item"), 1, {
    y: 40,
    autoAlpha: 0,
    delay: 0,
    ease: Power2.easeOut
  },
  0.3);

	var scene2 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(stagger)
		.addTo(controller)
    .addIndicators()
		;
});


//about page

// SCENE 6 - pin the first section
// and update text
 
var pinScene01Tl = new TimelineMax();
 
pinScene01Tl
    .to($('#slide01 h1'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
    .to($('#slide01 section'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
    .set($('#slide01 h1'), {text: "Jaxx Liberty"})
    .set($('#slide01 p'), {text: "Our digital asset wallet, Jaxx, was created in 2014 by Ethereum co-founder Anthony Di Iorio. The newest version is called Jaxx Liberty. Think of it as Jaxx 2.0. We’ve spent the last year redesigning and re-engineering Jaxx from the ground up and we are so excited to finally share it with you.."})
    .fromTo($('#slide01 h1'), 0.7, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '+=0.4')
    .fromTo($('#slide01 section'), 0.6, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '-=0.6')
    .set($('#slide01 h1'), {autoAlpha: 1}, '+=2');
 
var pinScene01 = new ScrollMagic.Scene({
    triggerElement: '#slide01',
    triggerHook: 0,
    duration: "250%"
})
.setPin("#slide01")
.setTween(pinScene01Tl)
.addTo(controller);




// SCENE 7 - pin the second section
	    // and update text

	    var pinScene02Tl = new TimelineMax();

	    pinScene02Tl
	    	.to($('#slide02 h1'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
	    	.to($('#slide02 section'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
	    	.set($('#slide02 h1'), {text: "The Memories"})
	    	.set($('#slide02 p'), {text: "You never climb the same mountain twice, not even in memory. Memory rebuilds the mountain, changes the weather, retells the jokes, remakes all the moves."})
	    	.to($('#slide02 .bcg'), 0.6, {scale: 1.2, transformOrigin: '0% 0%', ease:Power0.easeNone})
	    	.fromTo($('#slide02 h1'), 0.7, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '+=0.4')
	    	.fromTo($('#slide02 section'), 0.6, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '-=0.6')
	    	.set($('#slide02 h1'), {autoAlpha: 1}, '+=2.5');

	    var pinScene02 = new ScrollMagic.Scene({
	        triggerElement: '#slide02', 
	        triggerHook: 0,
	        duration: "300%"
	    })
	    .setPin("#slide02")
	    .setTween(pinScene02Tl)
	    .addTo(controller);