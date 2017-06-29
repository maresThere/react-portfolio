import React, { Component } from 'react'
import wireframeIR from '../images/wireframeIR.jpg'
import DINE from '../images/DINE.jpg'
import Octocat from '../images/octocat.jpg'
class Work extends Component {
  render () {
    return <div className='workSamples'>
      <div className='workSample'>
        <div className='responsiveContainer'>
          <img src={wireframeIR} alt='ingredereader' />
        </div>
        <div className='sampleText'>
          <h2 className='xyz'>Ingredereader</h2>
          <p className='sampleDesc'>
            The Ingredereader was my final project at TIY. This  is ultimately a mobile only application. Users with food allergies can choose their allergen and then scan a food product barcode.  The app calls the Nutritionex Api and searches the ingredient label for the allergen.
          </p>
        </div>
      </div>
      <hr />
      <div className='workSample'>
        <div className='responsiveContainer'>
          <img src={DINE} alt='ingredereader' />
        </div>
        <div className='sampleText'>
          <h2 className='xyz'>DINE</h2>
          <p className='sampleDesc'>
            Dine is a component based fictional restaurant menu. Graphcool API was used to create menu categories, food items and prices.
          </p>
        </div>
      </div>
      <hr />
      <div className='workSample'>
        <div className='responsiveContainer'>
          <img src={Octocat} alt='ingredereader' />
        </div>
        <div className='sampleText'>
          <h2 className='xyz'>Octocats</h2>
          <p className='sampleDesc'>
            The Octocat project is a responsive reproduction of the Octodex collection page.
          </p>
        </div>
      </div>
    </div>
  }
}

export default Work
