import React from 'react';
import { connect } from 'react-redux';

import { getSmurf, addSmurf } from '../actions';

import SmurfForm from "./SmurfForm";

const SmurfList = props => {

 
  return (
    <>
      <SmurfForm addSmurf={props.addSmurf} />
      <div>
        { props.error ? (
          <div className="error">{props.error}</div>
          ) :( 
          props.smurfs.map(smurf =>(
            <div className="note" key={smurf.id}>
              {smurf.name}, {smurf.age}years old, {smurf.height}cm
            </div>
          )
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