import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '46526318c7ae9ef0406d8beb214494b2';

class App extends React.Component{

  state = {
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'',
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data)
    if(city && country){
      this.setState({
        temperature:data.main['temp'],
        country:data.sys.country,
        city:data.name,
        humidity:data.main['humidity'],
        description:data.weather[0].description,
        });
    }

    else{
      this.setState({
        temperature:undefined, 
        country:undefined,
        city:undefined,
        humidity:undefined,
        description:undefined,
        error:'Please Enter the value(s)',
        });
    }
    
  }

  render(){
    return(
      <div>
      <div className='wrapper'>
        <div className='main'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-5 title-container'>
                <Titles />
              </div>
              <div className = 'col-xs-7 form-container'>
              <Form getWeather={this.getWeather} />
              <Weather
              temperature={this.state.temperature}
              humidity = {this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}
              />
             
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


    );
  }
}

export default App;