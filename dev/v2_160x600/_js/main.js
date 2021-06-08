import {v2, read, size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("160x600")
	// return
	

	tl.from(".player2", 1, {x:"+=50"}, 0)
	player(1)
	
	tl.from(".t1a", .15, {x:"-=150",opacity:0}, .8)
	tl.from(".t1b", .01, {opacity:0}, `+=${v2.a}`)
	tl.add(frameEnd(), `+=${v2.b}`)

}


start()


module.exports = {};

