import {size, frameEnd, init, v2, olg_logo} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("300x250")
	// return
	

	tl.from(".player2", 1, {x:"+=155"}, 0)
	player(.8)
	tl.from(".ball", .8, {x:"-=110"}, 0)
	tl.from(".t1a", .15, {x:"-=150",opacity:0}, .8)
	tl.from(".t1b", .01, {opacity:0}, `+=${v2.a}`)
	tl.add(frameEnd(), `+=${v2.b}`)


	tl.from(".legal", .2, {opacity:0}, "-=.5")

	tl.add(olg_logo())
}


start()


module.exports = {};

