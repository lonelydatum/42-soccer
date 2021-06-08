import {v2, size, frameEnd, init} from '../../_common/js/common.js'
// import {player} from '../../_common/js/striker.js'


function player(speed=1){
	const tl = new TimelineMax()
	
	
	tl.add("start", 0)
	const total = 4
	// for(let i=total; i>0;i--){
	for(let i=1; i<=total;i++){
		const percent = i/total * .17
		
		let obj = {x:0, y:-70, ease:Power4.easeOut}
		if(i!==total){
			obj = {...obj, opacity:0}
		}
		
		tl.to(`#player${i}`, .8*speed, obj, `start+=${percent}`)	
	}
	
	
	
	// TweenLite.to(".ball", 1.2*speed, {x:0, y:0, ease:Power4.easeOut, delay:.17})
	return tl
}



function start(){
	
	const tl = init("160x600")
	// return
	

	tl.from(".player2", 1, {x:"+=60", y:"+=40"}, 0)
	player(1)
	
	tl.from(".t1a", .15, {x:"-=150",opacity:0}, .7)
	tl.from(".t1b", .01, {opacity:0}, `+=${v2.a}`)
	tl.add(frameEnd(), `+=${v2.b}`)

}


start()


module.exports = {};

