import React, { useEffect } from 'react';


export default function RightSidebar() {

  return (
    <div className="sidebar-group d-print-none mt-5">
      {/* Sidebar - Storage */}
      <div className="sidebar primary-sidebar show" id="storage">
        <div className="sidebar-header">
          <h4>Courriers en attente</h4>
        </div>
        <div className="sidebar-content">
          <div id="justgage_five" className="mb-3" />
          <div>
            <div className="list-group list-group-flush mb-3">
              <a href="index.html#" className="list-group-item px-0 d-flex align-items-center">
                <div className="mr-3">
                  <figure className="avatar">
                    <span className="avatar-title bg-primary-bright text-primary rounded">
                      <i className="fa fa-download" style={{ fontSize: 40 }} />
                    </span>
                  </figure>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0" style={{ fontSize: 20 }}>Entrants</p>
                  {/* <span className="small text-muted">259 Files</span> */}
                </div>
                <div className=" d-flex align-items-center">
                  <h3 className="text-primary m-0 p-0">20</h3>
                </div>
              </a>
              <a href="index.html#" className="list-group-item px-0 d-flex align-items-center">
                <div className="mr-3">
                  <figure className="avatar">
                    <span className="avatar-title bg-primary-bright text-primary rounded">
                      <i className="fa fa-window-minimize" style={{ fontSize: 40, marginTop: -17 }} />
                    </span>
                  </figure>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0" style={{ fontSize: 20 }}>Internes</p>
                  {/* <span className="small text-muted">259 Files</span> */}
                </div>
                <div className=" d-flex align-items-center">
                  <h3 className="text-primary m-0 p-0">5</h3>
                </div>
              </a>
              <a href="index.html#" className="list-group-item px-0 d-flex align-items-center">
                <div className="mr-3">
                  <figure className="avatar">
                    <span className="avatar-title bg-primary-bright text-primary rounded">
                      <i className="fa fa-upload" style={{ fontSize: 40 }} />
                    </span>
                  </figure>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0" style={{ fontSize: 20 }}>Sortants</p>
                  {/* <span className="small text-muted">259 Files</span> */}
                </div>
                <div className=" d-flex align-items-center">
                  <h3 className="text-primary m-0 p-0">12</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar-footer">
          <button className="btn btn-lg btn-block btn-outline-primary">
            <i className="fa fa-cloud-upload mr-3" /> Nouveau courrier
          </button>
        </div>
      </div>
    </div>
  );
}
