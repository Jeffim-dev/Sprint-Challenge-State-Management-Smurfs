import React from 'react';
import { connect } from 'react-redux';

import { getSmurf, addSmurf } from '../actions';

import SmurfForm from "./SmurfForm";

const SmurfList = props => {

 
  return (
    <>
      <SmurfForm addSmurf={props.addSmurf} />
      <div>
        {props.smurfs.map(smurf => (
          <div className="note" key={smurf.id}>{smurf.name}, {smurf.age}, {smurf.height}</div>
        ))}
      </div>
     </>
  );
}

const mapStateToProps = state => {
  return ({
    smurfs: state.smurfs,
    error: state.error
  })
}

export default connect(
  mapStateToProps,
  { getSmurf, addSmurf }
) (SmurfList);