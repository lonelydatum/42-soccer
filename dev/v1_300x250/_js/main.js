import {size, frameEnd, init, read} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("300x250")
	// return
	

	tl.from(".player2", 1, {x:"+=155"}, 0)
	player(.8)
	tl.from(".ball", .8, {x:"-=110"}, 0)
	tl.from(".t1a", .15, {x:"-=150",opacity:0}, .8)
	tl.from(".t1b", .01, {opacity:0}, `+=${read.a}`)
	tl.add(frameEnd(), `+=${read.b}`)

}


start()


module.exports = {};

