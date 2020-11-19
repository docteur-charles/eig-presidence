import React from 'react';

export default function ({full = false}) {

  return (
    <div className="header d-print-none" style={{
      transition: '0.2s all',
      zIndex: 99999,
      ...(full ? ({ right: 0 }) : ({}))
    }} >
      <div className="header-container col-12">
        <div className="header-body">
          <div className="header-body-left">
            <ul className="navbar-nav">
              <li className="nav-item navigation-toggler">
                <a href="index.html#" className="nav-link">
                  <i className="ti-menu" />
                </a>
              </li>
              {/* <li className="nav-item">
                <div className="header-search-form">
                  <form>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button className="btn">
                          <i className="ti-search" />
                        </button>
                      </div>
                      <input type="text" className="form-control" placeholder="Rechercher..." />
                      <div className="input-group-append">
                        <button className="btn header-search-close-btn">
                          <i data-feather="x" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li> */}
            </ul>
          </div>
          <div className="header-body-right">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a href="index.html#" className="nav-link nav-link-notify" title="Notifications" data-toggle="dropdown">
                  <i className="ti-bell" />
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                  <div className="bg-primary px-3 py-3">
                    <h6 className="mb-0">Notifications</h6>
                  </div>
                  <div className="dropdown-scroll">
                    <ul className="list-group list-group-flush">
                      <li>
                        <a href="index.html#" className="list-group-item d-flex hide-show-toggler">
                          <div>
                            <figure className="avatar mr-3">
                              <span className="avatar-title bg-secondary-bright text-secondary rounded-circle">
                                <i className="ti-server" />
                              </span>
                            </figure>
                          </div>
                          <div className="flex-grow-1">
                            <p className="mb-0">
                              Your storage space is running low!
                          <i title="Mark as unread" data-toggle="tooltip" className="hide-show-toggler-item fa fa-check font-size-11 position-absolute right-0 top-0 mr-3 mt-3" />
                            </p>
                            <span className="text-muted small">4 sec ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="index.html#" className="list-group-item d-flex hide-show-toggler">
                          <div>
                            <figure className="avatar mr-3">
                              <img src="/assets/images/user.jpeg" className="rounded-circle" alt="avatar" />
                            </figure>
                          </div>
                          <div>
                            <p className="mb-0">
                              <span className="text-primary">Jonny Richie</span> uploaded new
                          files
                          <i title="Mark as read" data-toggle="tooltip" className="hide-show-toggler-item fa fa-circle-o font-size-11 position-absolute right-0 top-0 mr-3 mt-3" />
                            </p>
                            <span className="text-muted small">20 min ago</span>
                          </div>
                        </a>
                      </li>
                      <li className="text-divider text-center small pb-2 px-3">
                        <span>Old notifications</span>
                      </li>
                      <li>
                        <a href="index.html#" className="list-group-item d-flex hide-show-toggler">
                          <div>
                            <figure className="avatar mr-3">
                              <span className="avatar-title bg-info-bright text-info rounded-circle">
                                <i className="fa fa-cloud-upload" />
                              </span>
                            </figure>
                          </div>
                          <div className="flex-grow-1">
                            <p className="mb-0">
                              Upgrade plan
                          <i title="Mark as unread" data-toggle="tooltip" className="hide-show-toggler-item fa fa-check font-size-11 position-absolute right-0 top-0 mr-3 mt-3" />
                            </p>
                            <span className="text-muted small">45 sec ago</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="index.html#" className="list-group-item d-flex hide-show-toggler">
                          <div>
                            <figure className="avatar mr-3">
                              <span className="avatar-title bg-success-bright text-success rounded-circle">
                                <i className="ti-share" />
                              </span>
                            </figure>
                          </div>
                          <div className="flex-grow-1">
                            <p className="mb-0">
                              A file has been shared
                          <i title="Mark as unread" data-toggle="tooltip" className="hide-show-toggler-item fa fa-check font-size-11 position-absolute right-0 top-0 mr-3 mt-3" />
                            </p>
                            <span className="text-muted small">58 sec ago</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="px-3 py-2 text-right border-top">
                    <ul className="list-inline small">
                      <li className="list-inline-item mb-0">
                        <a href="index.html#">Mark All Read</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a href="index.html#" className="nav-link profile-nav-link dropdown-toggle" title="User menu" data-toggle="dropdown">
                  <span className="mr-2 d-sm-inline d-none">Team MOUSSA</span>
                  <figure className="avatar avatar-sm">
                    <img src="/assets/images/user.jpeg" className="rounded-circle" alt="avatar" />
                  </figure>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                  <div className="list-group list-group-flush">
                    <a href="/params/profil" className="list-group-item" data-sidebar-target="">Profil</a>
                    <a href="/auth/logout" className="list-group-item text-danger" data-sidebar-target="">Déconnexion</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item sidebar-toggler">
            <a href="index.html#" className="nav-link">
              <i className="fa fa-cloud-upload" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

}