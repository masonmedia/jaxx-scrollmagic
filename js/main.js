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




//slide right


var fromTopTimeline = new TimelineMax();
var fromTopFrom = TweenMax.from(".top", 1, {
    y: -800
});
var fromTopTo = TweenMax.to(".top", 1, {
    y: 0
});
fromTopTimeline
    .add(fromTopFrom)
    .add(fromTopTo);



//scene slide in right

new ScrollMagic.Scene({
        triggerElement: "#slideRight",
        offset: 200,
    })
    .setTween(fromTopTimeline)
    .duration(400)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);




//Fly in from the bottom - animation

var fromBottomTimeline = new TimelineMax();
var fromBottomFrom = TweenMax.from(".bottom", 1, {
    y: 800
});
var fromBottomTo = TweenMax.to(".bottom", 1, {
    y: 0
});
fromBottomTimeline
    .add(fromBottomFrom)
    .add(fromBottomTo);

//scene 

new ScrollMagic.Scene({
        triggerElement: "#slideInBottom",
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
//    .addIndicators()
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
	    	.to($('#slide03 h1'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
	    	.to($('#slide03 section'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
	    	.set($('#slide03 h1'), {text: "The Memories"})
	    	.set($('#slide03 p'), {text: "You never climb the same mountain twice, not even in memory. Memory rebuilds the mountain, changes the weather, retells the jokes, remakes all the moves."})
	    	.to($('#slide03 .bcg'), 0.6, {scale: 1.2, transformOrigin: '0% 0%', ease:Power0.easeNone})
	    	.fromTo($('#slide03 h1'), 0.7, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '+=0.4')
	    	.fromTo($('#slide03 section'), 0.6, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '-=0.6')
	    	.set($('#slide03 h1'), {autoAlpha: 1}, '+=2.5');

	    var pinScene02 = new ScrollMagic.Scene({
	        triggerElement: '#slide03', 
	        triggerHook: 0,
	        duration: "300%"
	    })
	    .setPin("#slide03")
	    .setTween(pinScene02Tl)
	    .addTo(controller);




//features page animations



//left tween - slide2 tweens

var fromLeftTimeline = new TimelineMax();
var fromLeftFrom = TweenMax.from("#left", 1, {
    x: -500,
    opacity: 0
});
var fromLeftTo = TweenMax.to("#left", 1, {
    x: 0,
    opacity: 1
});
fromLeftTimeline
    .add(fromLeftFrom)
    .add(fromLeftTo);

//left tween scene

new ScrollMagic.Scene({
        triggerElement: "#slide2",
        offset: 200,
    })
    .setTween(fromLeftTimeline)
    .duration(800)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);


//top tween

var fromLeftTimeline = new TimelineMax();
var fromLeftFrom = TweenMax.from("#top", 1, {
    y: -500
});
var fromLeftTo = TweenMax.to("#top", 1, {
    y: 0
});
fromLeftTimeline
    .add(fromLeftFrom)
    .add(fromLeftTo);

//top tween scene

new ScrollMagic.Scene({
        triggerElement: "#slide2",
        offset: 200,
    })
    .setTween(fromLeftTimeline)
    .duration(800)
    //    .reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);






// ============frideay examples

// Single item fade in and slide up...

$(".single-tween-item").each(function() {

 	var tween = TweenMax.fromTo(this, .6, {
	        y: 40,
	        autoAlpha: 0,
	        delay: 0,
	        ease: Power2.easeOut
	    }, .1);

	var scene1 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(tween)
		.addTo(controller)
    .addIndicators()
		;
});





// LH Content fade and slide in from right, RH Content fade and slide up...

$(".content-tween").each(function() {
  
  var contentTweenTL = new TimelineMax({
    repeat:0,
  });
  
  var contentTween = contentTweenTL.from($(this).find(".content-tween-left"), .6, {
    x: -40,
    autoAlpha: 0,
    delay: 0,
    ease: Power2.easeOut
  }, .1)
  .from($(this).find(".content-tween-right"), .6, {
    y: 40,
    autoAlpha: 0,
    delay: 0,
    ease: Power2.easeOut
  }, .1);

	var scene3 = new ScrollMagic.Scene({
	        triggerElement: this,
	        offset: -100,
	        reverse:true
	    })
		.setTween(contentTween)
		.addTo(controller)
    .addIndicators()
		;
});





//individual tweens on page load

//slide 1

//var fadein_slide_1 = TweenLite.from( '#slide-1', 2, {autoAlpha:0, y: 100} );
TweenLite.from( '#slide-1', 2, {autoAlpha:0, y: 100} );
TweenLite.from( '#slide-1 h1', 1, {autoAlpha:0, x: 100} );







//canvas

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




