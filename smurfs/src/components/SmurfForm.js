import React, { useState } from 'react';

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

     const SubmitForm = e => {
        e.preventDefault();
        props.addSmurf(newSmurf);
        setNewSmurf({ name: '', age: '', height: ''})
    };

    const handleChanges = e => {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={SubmitForm}>
            <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChanges}
                value={newSmurf.name} 
              />
               <label htmlFor="age">Age</label>
              <input
                type="text"
                name="age"
                onChange={handleChanges}
                value={newSmurf.age} 
              />
               <label htmlFor="height">Height</label>
              <input
                type="text"
                name="height"
                onChange={handleChanges}
                value={newSmurf.height} 
              />
                <button type='submit'>Add Smurf</button>
            </form>
        </div>
    );
};

export default SmurfForm;