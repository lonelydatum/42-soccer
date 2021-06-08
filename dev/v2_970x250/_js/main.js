import {v2, size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("160x600")
	// return
	

	tl.from(".player2", .9, {x:"+=150", y:"0"}, 0)
	player(1.3)
	tl.from(".ball", 1.5, {x:"+=180", y:"+=25"}, 0)
	tl.from(".t1a", .15, {x:"-=150",opacity:0}, .8)
	tl.from(".t1b", .01, {opacity:0}, `+=${v2.a}`)
	tl.add(frameEnd(), `+=${v2.b}`)

}


start()


module.exports = {};

