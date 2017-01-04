import React,{Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component
{
	
	constructor(props)
	{
		super(props);
		
		this.state = { term: ''};
		
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit  = this.onFormSubmit.bind(this);
	}
	
	onInputChange(event)
	{
		this.setState({term:event.target.value});

	}
	
	onFormSubmit(event)
	{
		event.preventDefault();
		
		//Fetch the data related to the city entered in the search bar.
		
		//Call the action creator from here.
		
		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
		
	}
	
	render()
	{
		return(
			
			<form onSubmit={this.onFormSubmit} className = "input-group">
				<input 
				placeholder ="Get A Five Day Forcast For A City"
				className = "form-control"
				value = {this.state.term}
				onChange = {this.onInputChange}
				/>
				<span className="input-group-btn">
				 <button type = "submit"  className = "btn btn-secondary" >Submit</button>
				</span>
			</form>
		
		);
		
	}
}

//hook up the action creator with our Search Bar container

function mapDispatchToProps(dispatch)
{
	//This will make sure that the action created will be bind together with dispatch and passed down to the middleware and to the reducers
	return bindActionCreators({fetchWeather},dispatch);
}


//WE do not need the states to be saved as the first argument so we are passing a null below
export default connect(null,mapDispatchToProps)(SearchBar);