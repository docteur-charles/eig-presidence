import React, { useState } from 'react';

export default function FileInput({ _id = 0, onLoaded }) {

  

  return (
    <div className="row flex-column align-items-center">
      <div className={`input_${_id} d-flex flex-column col-12 p-2 p-xl-3 align-items-center justify-content-center shadow-sm rounded-pill`} style={{ cursor: 'pointer', border: '2px solid #ffa50080' }} onClick={onClick} onMouseOver={onFocus} onMouseOut={onBlur}>
        <input type="search" />
      </div>
    </div>
  );

}