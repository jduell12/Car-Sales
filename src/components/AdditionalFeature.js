import React from 'react';
import {connect} from 'react-redux'

import {addFeature} from '../actions/carActions'

const AdditionalFeature = props => {
  return (
    <li >
      <button className="button"
        onClick={(e) => {
          e.preventDefault();
          props.addFeature(props.feature);
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect(null, {addFeature})(AdditionalFeature);
