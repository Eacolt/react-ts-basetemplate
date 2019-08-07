 export interface IinitialState{
	sayword?:string,
	count:0
}


const initialState:IinitialState = {
	sayword:'Hi hacker!',
	count:0
}
function reducer(state = initialState, action:any) {
	if(typeof state === 'undefined'){
		return initialState;
	}
  
	switch(action.type) {
	  case 'INCREMENT':
		return Object.assign({},state,{count:state.count+1})
	  case 'DECREMENT':
		return Object.assign({},state,{count:state.count-1})
	  case 'RESET':
		return Object.assign({},state,{count:0})
	  default:
		return state;
	}
  }
  export default reducer;
  