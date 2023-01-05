import './Title.css'

// import { AiFillCloud } from 'react-icons/ai'; //cloudy icon
// import { BsFillCloudLightningRainFill } from 'react-icons/bs' //rainy icon
// import { IoIosSunny } from 'react-icons/io' //sunny icon
// import { BsSnow2 } from 'react-icons/bs' //snowy icon



const Title = (props) => (
	<div className='title'>
		<div className={`waviy ${props.Mode}`}>
			<span style={{animationDelay:"0.2s"}}>W</span>
			<span style={{animationDelay:"0.4s"}}>e</span>
			<span style={{animationDelay:"0.8s"}}>a</span>
			<span style={{animationDelay:"1s"}}>t</span>
			<span style={{animationDelay:"1.2s"}}>h</span>
			<span style={{animationDelay:"1.4s"}}>e</span>
			<span style={{animationDelay:"1.6s"}}>r</span>
		</div>
		


		<div className={`waviy ${props.Mode}`}>
			<span style={{animationDelay:"2.0s"}}>F</span>
			<span style={{animationDelay:"2.2s"}}>i</span>
			<span style={{animationDelay:"2.4s"}}>n</span>
			<span style={{animationDelay:"2.6s"}}>d</span>
			<span style={{animationDelay:"2.8s"}}>e</span>
			<span style={{animationDelay:"3.0s"}}>r</span>
		</div>

	</div>
);

export default Title

