import React from 'react';
import { Button } from 'react-bootstrap';

export default function(props) {
  let latitude, longitude, plusCode;
  return (
    <form>
      <label>
        Latitude
        <input
          id="lat"
          type="text"
          placeholder="Enter Lat"
          ref={ el => latitude = el }
        />
      </label>

      <label>
        Longitute
        <input
          id="long"
          type="text"
          placeholder="Enter Long"
          ref={ el => longitude = el }
        />
      </label>

      <label>
        Plus code = 
        <span
          id="plusCode"
          ref={ el => plusCode = el }
        >
          {props.plusCode}
        </span>
      </label>

      <Button
        onClick={ () => props.onClick(latitude.value, longitude.value) }
      >
        Get Plus Code
      </Button>
    </form>
  );
}