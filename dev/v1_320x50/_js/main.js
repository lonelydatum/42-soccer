import {read, size, frameEnd, init} from '../../_common/js/common.js'



function start(){
	
	const tl = new TimelineMax()
	tl.set(".frame2", {opacity:1})

	tl.from(".phone", .4, {y:50})
	tl.from(".ill", .3, {scale:0})
	tl.from(".cta1", .2, {opacity:0}, "+=.4")

	tl.from([".legal"], .2, {opacity:0}, "+=.3")

}


start()


module.exports = {};

