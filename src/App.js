import React, {useState} from "react";

import Title from "./components/Title";
import Weather from "./components/Weather";

const API_KEY = "7a151e2b62bde7ceca44bc5605a8ba95";


function App() {
  const [state, setState] = useState({
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  })

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [darkMode, setDarkMode] = useState(false);
  let Mode = darkMode ? "darkMode" : "lightMode";

  async function getWeather(e) {
    e.preventDefault();
    try{
      let api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      let data = await api_call.json();

      if (data) {
        setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } 
      }
    catch(err){
      alert("Please enter a valid city and country");
      console.log(err)
    }
  }

  return (
    <div className={`wrapper ${Mode}`}>
      <div className={`main ${Mode}`}>
        <div className="container">
          <div className="row">
            
            <div className={`col-xs-5 title-container ${Mode}`}>
              <Title Mode = {Mode}/>
            </div>

            <div className={`col-xs-7 form-container ${Mode}`} >
              <form onSubmit={getWeather}>
                <input onChange = {e => setCity(e.currentTarget.value)} className={`inputField ${Mode}`} type="text" name="city" placeholder="City"/>
                <input onChange = {e => setCountry(e.currentTarget.value)} className={`inputField ${Mode}`} type="text" name="country" placeholder="Country"/>
                <button className={`submitButton ${Mode}`} type = "submit">Get Weather</button>
              </form>

              <Weather 
                temperature={state.temperature} 
                humidity={state.humidity}
                city={state.city}
                country={state.country}
                description={state.description}
                Mode = {Mode}
              />


                      
              <div className = {`darkSwitch ${Mode}`}>
                <label className="switch">
                  <input type="checkbox" className={`inputField ${Mode}`} onChange={() => setDarkMode(!darkMode)}/>
                  <span className="slider round"> 
                  </span> 
                </label>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
















































// import React, { useState } from 'react';

// const API_key = "7dd3aa13b924bb746bbad213b865bab5";




// function App (){
//   const [name, setName] = useState("");


//   async function getMinifigs() {
//     let reqLink = `https://rebrickable.com/api/v3/lego/minifigs/?key=7dd3aa13b924bb746bbad213b865bab5`;
  
//     const response = await fetch(reqLink);
  
//     let data = await response.json();

//     // when there is a response, fill in the location type information
//     if (data) {
//       for(let i = 0; i < data.results.length; i++){
//         if(data.results[i].name === name){
//           console.log(data.results[i].set_num);
//         }
//       }



//       console.log(data.results[0].set_num);
//     }
//   }

  // function handleChange(e){
  //   setName(e.target.value);
  //   console.log(name);
  // }

//   return (
//     <div>
//       <button onClick = {getMinifigs}> fetch </button>
//       <input id = "Name" onChange = {handleChange} value = {name}/>
//     </div>
//   );
// }

// export default App;






































/*
export class NewApp extends React.Component() {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&units=metric`);
    const data = await api_call.json();
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  }
  render() {
    return (
        <div className="row">
          <div className="col-xs-5 title-container">
            <Title />
          </div>
          <div className="col-xs-7 form-container">
            <Form getWeather={this.getWeather} />
            <Weather 
              temperature={this.state.temperature} 
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
    );
  }
};

export default App;
*/
