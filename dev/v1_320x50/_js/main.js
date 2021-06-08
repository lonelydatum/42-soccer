import {read, size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = new TimelineMax()
	tl.set(".frame2", {opacity:1})

	tl.from(".phone", .5, {y:50})
	tl.from(".ill", .3, {scale:0})
	tl.from(".cta1", .3, {opacity:0})

}


start()


module.exports = {};

