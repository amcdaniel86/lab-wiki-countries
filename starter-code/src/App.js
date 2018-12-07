import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import allTheCountries from './countries.json';
import CountryDetails from './CountryDetails';

class App extends Component {

  
  state = {
    listAllCountries : allTheCountries
  }




  }


  showAllTheCountries = () =>{

        return this.state.listOfCountries.map((eachCountry, i)=>{
          return(
              <Link key={i}
                className="list-group-item list-group-item-action"
                  to={    "/" + eachCountry.cca3    } 

          )
        })


  }
  
  
  
  
  
  
  
  
  
  
  render() {
      console.log(this.state);



    return (

        <div>
          <h1> Countries </h1>




      <div className="Container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
            
              {this.showAllTheCountries}




              <div className = "details">
                  <Switch>
                      <Route path="/:countryCode" component={CountryDetails}></Route>
                      {/*                       | */}
                      {/*                       ----------------------------------------------------- */}


                  </Switch>



            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
