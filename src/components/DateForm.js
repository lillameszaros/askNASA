import React from 'react';
import PastPhoto from './PastPhoto';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const DateForm = () => {
    const dateRef = useRef(undefined)
    const [dateValue, setDateValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const date = dateRef.current.value;
        setDateValue(date)
    }


    return (
        <div>
        <div className="card w-50 mx-auto mt-4 p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label mt-4">See a photo from the past:</label>
            <input className="form-control" type="date" ref={dateRef} choosenDate={dateValue} required />
            <button className="btn btn-primary mt-4">Submit</button>
          </div>
        </form>
      </div>
      <PastPhoto date={dateValue}/>
      </div>
    );
}

export default DateForm;
