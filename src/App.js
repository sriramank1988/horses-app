import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';

const horses = [
  {
    name: 'maythehorsebewithu',
    active: true,
    country: 'AUS',
    yearOfBirth: 2000,
    hourlyRate: 30,
    numOfHoursWorked: 2000    
  },
  {
    name: 'my wife knows everthing',
    active: true,
    country: 'USA',
    yearOfBirth: 2007,
    hourlyRate: 50,
    numOfHoursWorked: 2500    
  },
  {
    name: 'arrrrr',
    active: true,
    country: 'USA',
    yearOfBirth: 2004,
    hourlyRate: 30,
    numOfHoursWorked: 2000        
  },
  {
    name: 'hoof hearted',
    active: false,
    country: 'AUS',
    yearOfBirth: 1981,
    hourlyRate: 88,
    numOfHoursWorked: 900    
  },
  {
    name: 'pony',
    active: false,
    country: 'AUS',
    yearOfBirth: 2003,
    hourlyRate: 12,
    numOfHoursWorked: 9000    
  },
  {
    name: 'sunny boy',
    active: true,
    country: 'AUS',
    yearOfBirth: 2003,   
    hourlyRate: 42,
    numOfHoursWorked: 6450    
  }  
]
function HorseDetail({horses}){

  const { name } = useParams() //Custom hooks from the react-router-dom library

  let result = horses.find(
    horse => horse.name === name
  )
  console.log(result)
  return(
    <section>
      <h1>!!Detail about the horse!!</h1>
      <h2>{result.name}</h2>
      <h2>{result.country}</h2>
      <h2>{result.yearOfBirth}</h2>
      <p>!!!Melbourne Cup Special!!!</p>
    </section>
  )
}

function Horses ({items}){
  return(
    <section>
      <h1>!!Horses!!</h1>
      <p>!!!Melbourne Cup Special!!!</p>
      {
        items.map(item =>  
          <Link to={`/horses/${item.name}`}>
            <p key={item.name}>{item.name}</p>
          </Link>
        )
      }
    </section>
  )
}

function Home (){
  return(
    <section>
      <h1>!!Home sweet Home!!</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio provident molestias vero, totam cum tenetur sequi minima rem neque, praesentium blanditiis reiciendis aut quam rerum? Sit cum numquam reprehenderit!</p>
    </section>
  )
}

function About (){
  return(
    <section>
      <h1>!!The About Page!!</h1>
      <p>The Legend himself</p>
    </section>
  )
}

function Donate (){
  return(
    <section>
      <h1>!!Donate!!</h1>
      <p>Please Donate</p>
    </section>
  )
}

class App extends React.Component {

  render(){
    return (
      <Router>
        <nav>
          <Link to ="/">Home</Link>
          <Link to ="/about">About</Link>
          <Link to ="/donate">Donate</Link>
          <Link to ="/horses">Horses</Link>
        </nav>
        <div className="App">
          <Switch>
          <Route path="/horses/:name">
              <HorseDetail horses={horses}/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/donate">
              <Donate />
            </Route>
            <Route path="/horses">
              <Horses items={horses}/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;