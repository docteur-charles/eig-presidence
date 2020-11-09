import React, { useState } from 'react';

export default function FileInput({ _id = 0, onChange }) {

  return (
    <div className="col-12 p-r-40">
      <input type="search" placeholder="votre recherche..." required onChange={onChange} className="col shadow-sm rounded-pill p-2 p-xl-2 text-center font-size-30" style={{ cursor: 'pointer', border: '2px solid #ffa50080', lineHeight: '25px' }} />
    </div>
  );

}