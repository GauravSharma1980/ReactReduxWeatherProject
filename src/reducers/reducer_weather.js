import {FETCH_WEATHER} from '../actions/index';

export default function(state = [],action){
	
	//console.log('Action received',action);
	
	switch(action.type)
	{
		
		case FETCH_WEATHER:
		//mutating the array with the another city data.(overrite sort of)
		//return state.push(action.payload.data);
		//This below will be adding into the existing one and not overriting 
		return state.concat([action.payload.data]);
		//same way to say like above is as follows
		// return [action.payload.data,...state];
		
	}
	return state;
	
}