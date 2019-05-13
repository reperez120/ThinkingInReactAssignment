import React from 'react';
import './Features.css'

export default class Features extends React.Component {
  render(){
      function displayFeatures(features, selected) {
          return Object.keys(features).map(key => {
            const options = features[key].map((item, index) => {
              const selectedClass = item.name === selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <li key={index} className="feature__item">
                <div className={featureClass}
                  onClick={e => this.props.updateFeature(key, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                      .format(item.cost) })
                </div>
              </li>
          });
          return <div className="feature" key={key}>
            <div className="feature__name">{key}</div>
            <ul className="feature__list">
              { options }
            </ul>
          </div>
        });    
      }  
  return (
      <div>
      { displayFeatures(this.props.features, this.props.selected) }
      </div>
  )
  }
}


