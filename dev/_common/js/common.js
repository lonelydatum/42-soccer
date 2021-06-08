const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}
const read = {
	a:.5,
	b:2
}

TweenLite.defaultEase = Power2.easeInOut

function frameEnd(nudge){
	const tl = new TimelineMax()

	tl.set(".frame2", {opacity:1})
	tl.from(".bg2", .2, {opacity:0})

	
	tl.from(".phone", .3, {y:"+=200", opacity:0}, "+=.3")	
	tl.from(".ill", .3, {scale:0})

	tl.from(".t2", .01, { opacity:0}, "+=.3")
	tl.from(".cta1", .01, {opacity:0}, "+=2")
	tl.to(".cta1", .01, {opacity:0}, "+=2.5")
	tl.from(".cta2", .2, {opacity:0}, "+=.2")
	

	return tl
}



function init(id){
	console.log(id);
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	const {w, h} = size
	
	return tl
}

export {size, frameEnd, init, read}
// export {init}