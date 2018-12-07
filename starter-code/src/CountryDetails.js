import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import allTheCountries from './countries.json';
import { Link } from 'react-router-dom';



// CountryDetails component shouldn't render on screen unless a specific country is clicked on main page.

// constructor function runs when a new instance is created.
// in this case, it runs the very first time the component is shown.

class CountryDetails extends Component {

      state={
          code: this.props.match.params.countryCode,
          // params come from props from App.js.
          allCountries: allTheCountries


      }


        componentWillReceiveProps(theMagicalProps){
            this.setState({code: theMagicalProps.match.params.countryCode })

        }
        // this runs anytime the props change. 



      showBorders(whichCountry){
          return whichCountry.borders.map((oneBorder, i)=>{
              // for each border, const actual name of country.
              const theActualCountryObjectForThatBorder = this.state.allCountries.find((oneCountry)=>{
                  return oneCountry.cca3 === oneBorder
              })
            
              const theActualCountryName = theActualCountryObjectForThatBorder.name.common;
              const theFlag = theActualCountryObjectForThatBorder.flag;
            
            
            return(
                <li key={i}><Link to={'/'+oneBorder}> {theActualCountryName}</Link></li>


            )
          })
// map through an object's borders, also in the api information.

      }

      maybeShowCapital(whichCountry){
          if(whichCountry.capital){
            return(


                <tr>
                    <td style="width: 30%;">Capital</td>
                    <td>{theCountry.area}</td>
                </tr>


            )
          }



      }


      render(){
          const theCountry = this.state.allCountries.find(()=>{
            // !!!!!!!!!!!!!!!!!!!! used for ALL showing objects bottom of screen.
              // returns one single thing that matches criteria and returns the first one.
                return oneCountry.cca3 === this.state.code
//             cca3 is key from api. .cca3 is keys from data.
// this render function can be called up to 20 times a second. called over and over, anytime anything changes, try to keep render lightweight.
                
            })
            
            console.log(theCountry)
            
            if(!theCountry){
                return(
                    <div>
                        Sorry country could not be found
                    </div>
                )
            }
            
            
            // console.log('-=-=-=-=-=-=');
            return(
              
              <div>

                  <div class="col-7">
                    <h1>  {theCountry.name.common} </h1>
                    {/* is this {} because theCountry is const defined under render, and it comes from allCountries at top of component imported. tg */}
                    <table class="table">
                      <thead></thead>
                      <tbody>
                        

                        {this.maybeShowCountry(theCountry)}
{/* // when interpolating a function in a render section of a component, first design the function above the render function to reduce memory usage in the render section. after function is complete, find the part in the text area that you want to replace with a function/loop, to loop through, replace it with {this.functionName(argument)} */}



                          {/* {if(theCountry.capital)} */}
                              <
                                  {/* <td>{theCountry.capital[0]}</td> */}
                      
                        <tr>
                          
                        </tbody>
                          <td>Area</td>
                          <td>{theCountry.area}
                            <sup>2</sup>
                          </td>
                        </tr>
                        <tr>
                          <td>Borders</td>
                          {/* function for borders below */}
                          <td>
                            <ul>
                              
                                  {this.showBorders(theCountry)}
                      {/* function showBorders, attaches to the theCountry variable and maps through border key of a country and spits it out onto component on screen. */}


                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                
              </div>
       )
       
      }
      
// when I click on a link it shows component, when not clicked, it won't show component.



}



export default CountryDetails;


// .find example
// returns one single thing that matches criteria and returns the first one.

// let animals = ["dog", 'cat', 'hyena', 'moose', 'elephant', 'beetle']

// let longNameAnimal = animals.find((oneAnimal)=>{
//   return oneAnimal.length > 6
// })


// console.log(longNameAnimal)