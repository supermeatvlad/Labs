bear = {
	name: 'Bear Greals',
	weight: 228,
	height: 1.98,
	type: 'Angry Evil Bear from Tailand',
	head: {
		nose: {
			working: true,
			breath: 'clear',
			breathe: function(air){
				console.log('bear breaths');
			}
		},
		eyes: {
			leftEye: {
				working: true
			},
			rightEye: {
				working: true
			},
			sleepy: false,
			color: 'brown',
			lookAt: function(thing){
				console.log('bear looking at:');
				console.log(thing);
			}
		},
		ears: {
			move: function(side){
				console.log('bear move ears to ' + side);
			},
			leftEar: {
				working: true
			},
			rightEar: {
				working: true
			}
		},
		moveTo: function(side){
			console.log('bear move hear to ' + side);
		}
	}
}

console.log(bear);
bear.head.moveTo('right');