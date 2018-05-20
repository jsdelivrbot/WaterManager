export default function (state = [], action) {
	console.log(action); 
	switch (action.type) {
		
		case "INIT_DATA": 
			const newstate = [
			 {id : 1, building:"A", floor:0 , apartment: 1 },
	 		 {id : 2, building:"A", floor:0 , apartment: 2 },
	 		 {id : 3, building:"A", floor:0 , apartment: 3 },
	 		 {id : 4, building:"A", floor:0 , apartment: 4 },
	 		 {id : 5, building:"A", floor:1 , apartment: 1 },
	 		 {id : 6, building:"A", floor:1 , apartment: 2 },
	 		 {id : 7, building:"A", floor:1 , apartment: 3 },
	 		 {id : 8, building:"A", floor:1 , apartment: 4 },
	 		 {id : 9, building:"B", floor:0 , apartment: 1 },
	 		 {id : 10, building:"B", floor:0 , apartment: 2 },
	 		 {id : 11, building:"B", floor:0 , apartment: 3 },
	 		 {id : 12, building:"B", floor:0 , apartment: 4 },
	 		 {id : 13, building:"B", floor:1 , apartment: 1 },
	 		 {id : 14, building:"B", floor:1 , apartment: 2 },
	 		 {id : 15, building:"B", floor:1 , apartment: 3 },
	 		 {id : 16, building:"B", floor:1 , apartment: 4 },
	 		 {id : 17, building:"B", floor:2 , apartment: 1 },
	 		 {id : 18, building:"B", floor:2 , apartment: 2 },
	 		 {id : 19, building:"B", floor:2 , apartment: 3 },
	 		 {id : 20, building:"B", floor:2 , apartment: 4 },
	 		 {id : 21, building:"C", floor:0 , apartment: 1 },
	 		 {id : 22, building:"C", floor:0 , apartment: 2 },
	 		 {id : 23, building:"C", floor:1 , apartment: 1 },
	 		 {id : 24, building:"C", floor:1 , apartment: 2 },
	 		 {id : 25, building:"C", floor:2 , apartment: 1 },
	 		 {id : 26, building:"C", floor:2 , apartment: 2 },
	 		 {id : 27, building:"C", floor:3 , apartment: 1 },
	 		 {id : 28, building:"C", floor:3 , apartment: 2 },
	 		 {id : 29, building:"D", floor:0 , apartment: 1 },
	 		 {id : 30, building:"D", floor:0 , apartment: 2 },
	 		 {id : 31, building:"D", floor:1 , apartment: 1 },
	 		 {id : 32, building:"D", floor:1 , apartment: 2 },
	 		 {id : 33, building:"D", floor:2 , apartment: 1 },
	 		 {id : 34, building:"D", floor:2 , apartment: 2 },
	 		 {id : 35, building:"D", floor:3 , apartment: 1 },
	 		 {id : 36, building:"D", floor:3 , apartment: 2 },
	 		 {id : 37, building:"D", floor:4 , apartment: 1 },
	 		 {id : 38, building:"D", floor:4 , apartment: 2 },
	 		]
		; 

			return newstate;  
		

		default:
			return state;  
	}

}