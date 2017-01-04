const API_KEY = '00d7b3ec2f14b1355a1d34eecc90fa08';
import axios from 'axios';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;
//q=London,us&mode=xml

export const FETCH_WEATHER = 'FETCH_WEATHER';

//if the payload is a promise then the redux promise stops the action entirely ,
// and then once the req finishes it dispatches the request of same type but with
//the payload with the resolved promise,on other words it unwraps the promise.
export function fetchWeather(city)
{
	const url = `${ROOT_URL}&q=${city},us`;
	//This below request is an asynchronious in nature .
	const request = axios.get(url);
	//request is promise.It is just a datasturcture and does not contains any data yet
	//console.log('Request:',request);
	return{

	type : FETCH_WEATHER,
	payload : request
	};

}
