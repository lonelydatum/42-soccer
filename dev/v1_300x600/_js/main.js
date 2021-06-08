import {read, size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("160x600")
	// return
	

	tl.from(".player2", 1, {x:"+=190"}, 0)
	player(.8)
	tl.from(".ball", 1.5, {x:"-=160", y:"+=25"}, 0)
	tl.from(".t1a", .15, {x:"-=150",opacity:0}, .8)
	tl.from(".t1b", .01, {opacity:0}, `+=${read.a}`)
	tl.add(frameEnd(), `+=${read.b}`)

}


start()


module.exports = {};

