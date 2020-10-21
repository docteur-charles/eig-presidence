<div class="navigation">
    <div class="logo">
        <a href="index.html">
            <img src="../../assets/media/image/logo.png" alt="logo">
        </a>
    </div>
    <ul>
        <li>
        <a  href="{{route('dashboard')}}">
                <i class="nav-link-icon ti-pie-chart"></i>
                <span class="nav-link-label">Dashboard</span>
                <span class="badge badge-danger badge-small">2</span>
            </a>
        </li>
        <li>
            <a  href="files.html">
                <i class="nav-link-icon ti-file"></i>
                <span class="nav-link-label">Files</span>
            </a>
        </li>
        <li>
            <a  href="activities.html">
                <i class="nav-link-icon ti-pulse"></i>
                <span class="nav-link-label">Activities</span>
                <span class="badge badge-warning">New</span>
            </a>
        </li>
        <li>
            <a  href="users.html">
                <i class="nav-link-icon ti-user"></i>
                <span class="nav-link-label">Users</span>
            </a>
        </li>
        <li class="flex-grow-1">
            <a href="alert.html">
                <i class="nav-link-icon ti-layers"></i>
                <span class="nav-link-label">Components</span>
            </a>
        </li>
        <li class="nav-item" id="accordionSidebar">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="fas fa-fw fa-cog"></i>
              <span>Parametres</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Gestion utilisateurs</h6>
              <a class="collapse-item" href="">Ajouter un utilisateur</a>
              <a class="collapse-item" href="">Ajouter un Role</a>
              <a class="collapse-item" href="">Bloquer un utilisateur</a>
              </div>
            </div>
        </li>
    </ul>
    
</div>