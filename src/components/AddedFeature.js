import React from 'react';
import {connect} from 'react-redux'

import {removeAddFeature} from '../actions/carActions'

const AddedFeature = props => {
  return (
    <li>
      <button 
        className="button"
        onClick={(e) => {
          e.preventDefault();
          props.removeAddFeature(props.feature);
        }}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeAddFeature})(AddedFeature);
