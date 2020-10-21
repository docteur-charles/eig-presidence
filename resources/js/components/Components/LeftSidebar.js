import React from 'react';
import { Link } from 'react-router-dom';


export default function () {

  return (
    <div className="navigation">
      <div className="logo mb-4">
        <Link to="/">
          <img src="/assets/images/logo.png" width="100px" alt="logo" />
        </Link>
      </div>
      <ul style={{overflow: 'auto'}}>
        <li className="gec-dashboard">
          <Link to="/dashboard">
            <i className="nav-link-icon ti-pie-chart" />
            <span className="nav-link-label">T. de bord</span>
            <span className="badge badge-danger badge-small">2</span>
          </Link>
        </li>
        <li className="gec-enreg-courriers">
          <Link to="/enregistrements" className="text-center">
            <i className="nav-link-icon ti-file" />
            <span className="nav-link-label">Enreg. courriers</span>
          </Link>
        </li>
        <li className="gec-courriers">
          <Link to="/courriers">
            <i className="nav-link-icon ti-file" />
            <span className="nav-link-label">Courriers</span>
          </Link>
        </li>
        <li className="gec-statistiques">
          <Link to="/statistiques">
            <i className="nav-link-icon ti-pulse" />
            <span className="nav-link-label">Statistiques</span>
          </Link>
        </li>
        <li className="gec-utilisateurs">
          <Link to="/utilisateurs">
            <i className="nav-link-icon ti-user" />
            <span className="nav-link-label">Utilisateurs</span>
          </Link>
        </li>
        <li className="gec-archives">
          <Link to="/archives">
            <i className="nav-link-icon ti-layers" />
            <span className="nav-link-label">Archives</span>
          </Link>
        </li>
        <li className="flex-grow-1 gec-params">
          <Link to="/params">
            <i className="nav-link-icon ti-settings" />
            <span className="nav-link-label">Paramètres</span>
          </Link>
        </li>
        <li className="gec-disconnect">
          <Link to="/auth/logout">
            <i className="nav-link-icon ti-power-off" />
            <span className="nav-link-label">Déconnexion</span>
          </Link>
        </li>
      </ul>
    </div>
  );

}