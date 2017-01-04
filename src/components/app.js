import React, { Component } from 'react';
import Search_Bar from '../containers/search_bar';

import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
		<Search_Bar />
		<WeatherList />
	  </div>
    );
  }
}
