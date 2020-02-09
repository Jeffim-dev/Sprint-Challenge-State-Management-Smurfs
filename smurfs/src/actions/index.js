import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';

export const getSmurf = () => dispatch => {
  dispatch ({ type: FETCH_SMURF_START });
  axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: err })
     })
}

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: POST_SMURF_START });
  axios
       .post("http://localhost:3333/smurfs", newSmurf)
       .then(res=> {
          console.log("Post", res);
          dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
       })
       .catch(err => {
          console.log(err);
          dispatch({ type: POST_SMURF_FAILURE, payload: err });
       });
};