import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

export default function Resultat({ isLoading = false }) {

  return (
    <div className="row" style={{minHeight: '150px'}}>

      {isLoading ? (
        <Loader padding={50} />
      ) : (
          <>
            <div className="col-12 mt-5 d-flex align-items-center justify-content-center">
              <div className="form-group mx-3">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="_cour_internes" defaultChecked />
                  <label className="custom-control-label" htmlFor="_cour_internes">Courriers internes</label>
                </div>
              </div>
              <div className="form-group mx-3">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="_cour_sortants" defaultChecked />
                  <label className="custom-control-label" htmlFor="_cour_sortants">Courriers sortants</label>
                </div>
              </div>
              <div className="form-group mx-3">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="_cour_entrants" defaultChecked />
                  <label className="custom-control-label" htmlFor="_cour_entrants">Courriers entrants</label>
                </div>
              </div>
            </div>


            <div className="page-header d-flex justify-content-between">
              <h1 className="border-bottom border-warning">Résultats de la recherche</h1>
              <a href="files.html#" className="files-toggler">
                <i className="ti-menu" />
              </a>
            </div>
            <div className="row" style={{ margin: 'auto' }}>
              <div className="col-12">
                <div className="table-responsive pr-4">
                  <table id="table-files" className="table table-borderless table-hover">
                    <thead>
                      <tr>
                        <th>
                          N° d'ordre
                        </th>
                        <th>Objet</th>
                        <th>Date d'arrivée</th>
                        <th>Mention</th>
                        <th>Annotations</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>120938/2020</b>
                        </td>
                        <td>
                          <Link to="/archives" className="d-flex align-items-center">
                            <figure className="avatar avatar-sm mr-3">
                              <span className="avatar-title bg-warning text-black-50 rounded-pill">
                                <i className="ti-folder" />
                              </span>
                            </figure>
                            <span className="d-flex flex-column">
                              <span className="text-primary">Demande d'obtention de la nationalité nigérienne</span>
                              <span className="small font-italic">Ministère des affaires étrangères</span>
                            </span>
                          </Link>
                        </td>
                        <td>20/10/2020, 09:43</td>
                        <td>
                          <div className="badge bg-info-bright text-warning">Urgent</div>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <figure className="avatar avatar-sm" title="Lisle Essam" data-toggle="tooltip">
                              <img src="../../assets/media/image/user/women_avatar2.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <figure className="avatar avatar-sm" title="Baxie Roseblade" data-toggle="tooltip">
                              <img src="../../assets/media/image/user/man_avatar5.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <figure className="avatar avatar-sm" title="Jo Hugill" data-toggle="tooltip">
                              <img src="../../assets/media/image/user/man_avatar1.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <figure className="avatar avatar-sm" title="Cullie Philcott" data-toggle="tooltip">
                              <img src="../../assets/media/image/user/women_avatar5.jpg" className="rounded-circle" alt="image" />
                            </figure>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a href="files.html#" className="btn btn-floating" data-toggle="dropdown">
                              <i className="ti-more-alt" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="files.html#" className="dropdown-item" data-sidebar-target="#view-detail">Consulter</a>
                              <a href="files.html#" className="dropdown-item">Télécharger</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>120988/2020</b>
                        </td>
                        <td>
                          <a href="files.html#" className="d-flex align-items-center">
                            <figure className="avatar avatar-sm mr-3">
                              <span className="avatar-title bg-warning text-black-50 rounded-pill">
                                <i className="ti-folder" />
                              </span>
                            </figure>
                            <span className="d-flex flex-column">
                              <span className="text-primary">Demande de titre de séjour </span>
                              <span className="small font-italic">Ministère des affaires étrangères</span>
                            </span>
                          </a>
                        </td>
                        <td>25/11/2020, 16:21</td>
                        <td>
                          <div className="badge bg-info-bright text-danger">Très Urgent</div>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <figure className="avatar avatar-sm" title="Lisle Essam" data-toggle="tooltip">
                              <img src="../../assets/media/image/user/women_avatar2.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <figure className="avatar avatar-sm" title="Baxie Roseblade" data-toggle="tooltip">
                              <img src="../../assets/media/image/user/man_avatar5.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <figure className="avatar avatar-sm" title="Jo Hugill" data-toggle="tooltip">
                              <img src="../../assets/media/image/user/man_avatar1.jpg" className="rounded-circle" alt="image" />
                            </figure>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a href="files.html#" className="btn btn-floating" data-toggle="dropdown">
                              <i className="ti-more-alt" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="files.html#" className="dropdown-item" data-sidebar-target="#view-detail">Consulter</a>
                              <a href="files.html#" className="dropdown-item">Télécharger</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}
    </div>
  )


}