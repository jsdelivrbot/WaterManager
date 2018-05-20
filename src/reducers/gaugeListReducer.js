export default function (state = [], action) {
	
	switch (action.type) {
		
		case "INIT_DATA": 
			const newstate = [
			 {id : 1, rate:3,comsuption: 387873, state: 0, building:"A", floor:0 , apartment: 1},
	 		 {id : 2, rate:3,comsuption: 75123 , state: 1, building:"A", floor:0 , apartment: 2},
	 		 {id : 3, rate:3,comsuption: 74635 , state: 1, building:"A", floor:0 , apartment: 3},
	 		 {id : 4, rate:3,comsuption: 42320, state: 1, building:"A", floor:0 , apartment: 4},
	 		 {id : 5, rate:3,comsuption: 862613, state: 1, building:"A", floor:1 , apartment: 1},
	 		 {id : 6, rate:3,comsuption: 298451, state: 1, building:"A", floor:1 , apartment: 2},
	 		 {id : 7, rate:3,comsuption: 364025, state: 0, building:"A", floor:1 , apartment: 3},
	 		 {id : 8, rate:3,comsuption: 201448, state: 1, building:"A", floor:1 , apartment: 4},
	 		 {id : 9, rate:3,comsuption: 201665, state: 1, building:"B", floor:0 , apartment: 1},
	 		 {id : 10, rate:3,comsuption: 423305, state: 0, building:"B", floor:0 , apartment: 2},
	 		 {id : 11, rate:3,comsuption: 489788, state: 1, building:"B", floor:0 , apartment: 3},
	 		 {id : 12, rate:3,comsuption: 221444, state: 1, building:"B", floor:0 , apartment: 4},
	 		 {id : 13, rate:3,comsuption: 236652, state: 1, building:"B", floor:1 , apartment: 1},
	 		 {id : 14, rate:3,comsuption: 499621, state: 1, building:"B", floor:1 , apartment: 2},
	 		 {id : 15, rate:3,comsuption: 362225, state: 1, building:"B", floor:1 , apartment: 3},
	 		 {id : 16, rate:3,comsuption: 135624, state: 1, building:"B", floor:1 , apartment: 4},
	 		 {id : 17, rate:3,comsuption: 120142, state: 1, building:"B", floor:2 , apartment: 1},
	 		 {id : 18, rate:3,comsuption: 125410, state: 1, building:"B", floor:2 , apartment: 2},
	 		 {id : 19, rate:3,comsuption: 223625, state: 1, building:"B", floor:2 , apartment: 3},
	 		 {id : 20, rate:3,comsuption: 754112, state: 1, building:"B", floor:2 , apartment: 4},
	 		 {id : 21, rate:7,comsuption: 468213, state: 1, building:"C", floor:0 , apartment: 1},
	 		 {id : 22, rate:7,comsuption: 414120, state: 1, building:"C", floor:0 , apartment: 2},
	 		 {id : 23, rate:7,comsuption: 336205, state: 1, building:"C", floor:1 , apartment: 1},
	 		 {id : 24, rate:7,comsuption: 452610, state: 1, building:"C", floor:1 , apartment: 2},
	 		 {id : 25, rate:7,comsuption: 493622, state: 1, building:"C", floor:2 , apartment: 1},
	 		 {id : 26, rate:7,comsuption: 388618, state: 1, building:"C", floor:2 , apartment: 2},
	 		 {id : 27, rate:7,comsuption: 130254, state: 1, building:"C", floor:3 , apartment: 1},
	 		 {id : 28, rate:7,comsuption: 198624, state: 1, building:"C", floor:3 , apartment: 2},
	 		 {id : 29, rate:7,comsuption: 741562, state: 1, building:"D", floor:0 , apartment: 1},
	 		 {id : 30, rate:7,comsuption: 471451, state: 1, building:"D", floor:0 , apartment: 2},
	 		 {id : 31, rate:7,comsuption: 846205, state: 1, building:"D", floor:1 , apartment: 1},
	 		 {id : 32, rate:7,comsuption: 412473, state: 1, building:"D", floor:1 , apartment: 2},
	 		 {id : 33, rate:7,comsuption: 417520, state: 1, building:"D", floor:2 , apartment: 1},
	 		 {id : 34, rate:7,comsuption: 692031, state: 1, building:"D", floor:2 , apartment: 2},
	 		 {id : 35, rate:7,comsuption: 451102, state: 1, building:"D", floor:3 , apartment: 1},
	 		 {id : 36, rate:7,comsuption: 145216, state: 1, building:"D", floor:3 , apartment: 2},
	 		 {id : 37, rate:7,comsuption: 412014, state: 1, building:"D", floor:4 , apartment: 1},
	 		 {id : 38, rate:7,comsuption: 145112, state: 1, building:"D", floor:4 , apartment: 2},
	 		]; 

			return newstate;  

		case "TOOGLE_GAUGE": 
			
			return state.map(ele => {
				return (ele.id == action.payload) ? {...ele, state: !ele.state } : {...ele};} );

		case "SET_GAUGE_RATE": 
			
			return state.map(ele => {
				console.log(action.payload.id);
				return (ele.id == action.payload.id) ? {...ele, rate: action.payload.rate } : {...ele};} );
		default:
			return state;  
	}

}