import React from 'react'
import './Weather.css'

const Weather = props => (
	<div className={`info ${props.Mode}`}>
	 {	
	 	props.city && props.country && <p className={`key ${props.Mode}`}> Location: 
	 		<span className={`value ${props.Mode}`}> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className={`key ${props.Mode}`}> Temperature: 
	 		<span className={`value ${props.Mode}`}> { props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className={`key ${props.Mode}`}> Humidity: 
	 		<span className={`value ${props.Mode}`}> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className={`key ${props.Mode}`}> Conditions: 
	 		<span className={`value ${props.Mode}`}> { props.description } </span>
	 </p> 
	 }
	</div>
);

export default Weather