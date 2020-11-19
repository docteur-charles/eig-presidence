import React from 'react';
import Courrier from '../Components/Courrier';

export default function Courriers(props) {

  return (
    <div className="timeline">
      <div className="timeline-container h-100p ml-3 position-relative">

        <h4 className="text-uppercase">Liste des courriers</h4>
        
        <div className="timeline-data d-flex flex-column pt-4">

          <div style={{ marginLeft: '-30px', fontWeight: 'bold' }} className="shadow timeline-date p-2 align-self-start rounded-circle border-warning border">
            <span>24 Déc</span>
          </div>

          <div className="timeline-contents border-left p-4 p-l-0 m-l-4 m-r-4">

            <div className="timeline-content d-flex align-items-start position-relative">

              <div className="content-hr border-bottom border-warning" style={{ width: '150px', paddingTop: '30px', paddingLeft: '30px' }}>
                <small style={{ fontSize: '15px' }}>12<h4 className="d-inline">H</h4>14</small>
              </div>

              <Courrier />

            </div>

            <div className="timeline-content d-flex align-items-start position-relative">

              <div className="content-hr border-bottom border-warning" style={{ width: '150px', paddingTop: '30px', paddingLeft: '30px' }}>
                <small style={{ fontSize: '15px' }}>12<h4 className="d-inline">H</h4>14</small>
              </div>

              <Courrier />

            </div>

          </div>

        </div>
        <div className="timeline-data d-flex flex-column">

          <div style={{ marginLeft: '-30px', fontWeight: 'bold' }} className="shadow stimeline-date p-2 align-self-start rounded-circle border-warning border">
            <span>23 Déc</span>
          </div>

          <div className="timeline-contents border-left p-4 p-l-0 m-l-4 m-r-4">

            <div className="timeline-content d-flex align-items-start position-relative">

              <div className="content-hr border-bottom border-warning" style={{ width: '150px', paddingTop: '30px', paddingLeft: '30px' }}>
                <small style={{ fontSize: '15px' }}>12<h4 className="d-inline">H</h4>14</small>
              </div>

              <Courrier />

            </div>

            <div className="timeline-content d-flex align-items-start position-relative">

              <div className="content-hr border-bottom border-warning" style={{ width: '150px', paddingTop: '30px', paddingLeft: '30px' }}>
                <small style={{ fontSize: '15px' }}>12<h4 className="d-inline">H</h4>14</small>
              </div>

              <Courrier />

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
