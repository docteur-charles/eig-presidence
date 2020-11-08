@extends('layouts.app')
@section('content')
<div class="content">
    <div class="card bg-primary-bright border-0">
<div class="card-body">
<div class="row">
<div class="col-xl-2 col-md-3">
    <figure>
        <img class="img-fluid" src="../../assets/media/svg/upgrade.svg" alt="upgrade">
    </figure>
</div>
<div class="col-xl-10 col-md-9">
    <div class="d-md-flex align-items-center justify-content-between text-center text-md-left p-4 p-md-0">
        <div class="mr-3">
            <h4 class="mb-3">Get an Upgrade</h4>
            <p class="text-muted">Get additional 500 GB space for your documents and files. Expand
                your storage and enjoy your business. Change plan for more space.</p>
            <a href="dashboard.html#" class="small">Close</a>
        </div>
        <div class="flex-shrink-0 ml-3">
            <button class="btn btn-outline-primary btn-lg2">Upgrade Now</button>
        </div>
    </div>
</div>
</div>
</div>
</div>

<div class="row">
<div class="col-md-8">
<h4>Daily Usage</h4>
<div id="daily-usage"></div>
</div>
<div class="col-md-4">
<div class="card">
<div class="card-body text-center">
    <div class="row mb-4">
        <div class="col-md-8 offset-md-2">
            <img src="../../assets/media/svg/report.svg" class="img-fluid" alt="report">
        </div>
    </div>
    <h4 class="my-3">Create Report</h4>
    <p class="text-muted">Create reports to grow their business and serve their customers better. Use this tool to generate reports.</p>
    <button class="btn btn-outline-primary btn-lg2">Start Now</button>
</div>
</div>
</div>
</div>

<div class="content-title d-flex justify-content-between">
<h4>Favorite Folders</h4>
<a href="files.html">View All</a>
</div>

<div class="row">
<div class="col-md-3">
<div class="card">
<div class="card-body">
    <div class="d-flex justify-content-between mb-4">
        <div>
            <i class="font-size-22 ti-folder"></i>
        </div>
        <div>
            <div class="avatar-group">
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Baxie Roseblade">
                    <img src="../../assets/media/image/user/man_avatar5.jpg" class="rounded-circle"
                         alt="image">
                </figure>
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Mella Mixter">
                    <img src="../../assets/media/image/user/women_avatar1.jpg" class="rounded-circle"
                         alt="image">
                </figure>
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Jo Hugill">
                    <img src="../../assets/media/image/user/man_avatar1.jpg" class="rounded-circle"
                         alt="image">
                </figure>
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Cullie Philcott">
                    <span class="avatar-title bg-primary rounded-circle">+ 5</span>
                </figure>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-between">
        <h5>Facebook Videos</h5>
        <div class="dropdown">
            <a href="dashboard.html#" class="btn btn-floating" data-toggle="dropdown">
                <i class="ti-more-alt"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="dashboard.html#" class="dropdown-item" data-sidebar-target="#view-detail">View Details</a>
                <a href="dashboard.html#" class="dropdown-item">Share</a>
                <a href="dashboard.html#" class="dropdown-item">Download</a>
                <a href="dashboard.html#" class="dropdown-item">Copy to</a>
                <a href="dashboard.html#" class="dropdown-item">Move to</a>
                <a href="dashboard.html#" class="dropdown-item">Rename</a>
                <a href="dashboard.html#" class="dropdown-item">Delete</a>
            </div>
        </div>
    </div>
    <p class="small text-muted mb-0">1.754 Files</p>
</div>
</div>
</div>
<div class="col-md-3">
<div class="card">
<div class="card-body">
    <div class="d-flex justify-content-between mb-4">
        <div>
            <i class="font-size-22 ti-folder"></i>
        </div>
        <div>
            <div class="avatar-group">
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Baxie Roseblade">
                    <img src="../../assets/media/image/user/man_avatar5.jpg" class="rounded-circle"
                         alt="image">
                </figure>
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Mella Mixter">
                    <img src="../../assets/media/image/user/women_avatar1.jpg" class="rounded-circle"
                         alt="image">
                </figure>
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Jo Hugill">
                    <img src="../../assets/media/image/user/man_avatar1.jpg" class="rounded-circle"
                         alt="image">
                </figure>
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Cullie Philcott">
                    <span class="avatar-title bg-primary rounded-circle">+ 5</span>
                </figure>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-between">
        <h5>YouTube Videos</h5>
        <div class="dropdown">
            <a href="dashboard.html#" class="btn btn-floating" data-toggle="dropdown">
                <i class="ti-more-alt"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="dashboard.html#" class="dropdown-item" data-sidebar-target="#view-detail">View Details</a>
                <a href="dashboard.html#" class="dropdown-item">Share</a>
                <a href="dashboard.html#" class="dropdown-item">Download</a>
                <a href="dashboard.html#" class="dropdown-item">Copy to</a>
                <a href="dashboard.html#" class="dropdown-item">Move to</a>
                <a href="dashboard.html#" class="dropdown-item">Rename</a>
                <a href="dashboard.html#" class="dropdown-item">Delete</a>
            </div>
        </div>
    </div>
    <p class="small text-muted mb-0">3.512 Files</p>
</div>
</div>
</div>
<div class="col-md-3">
<div class="card">
<div class="card-body">
    <div class="d-flex justify-content-between mb-4">
        <div>
            <i class="font-size-22 ti-folder"></i>
        </div>
        <div>
            <div class="avatar-group">
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Baxie Roseblade">
                    <img src="../../assets/media/image/user/man_avatar5.jpg" class="rounded-circle"
                         alt="image">
                </figure>
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Mella Mixter">
                    <img src="../../assets/media/image/user/women_avatar1.jpg" class="rounded-circle"
                         alt="image">
                </figure>
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Jo Hugill">
                    <img src="../../assets/media/image/user/man_avatar1.jpg" class="rounded-circle"
                         alt="image">
                </figure>
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Cullie Philcott">
                    <span class="avatar-title bg-primary rounded-circle">+ 5</span>
                </figure>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-between">
        <h5>Instagram Videos</h5>
        <div class="dropdown">
            <a href="dashboard.html#" class="btn btn-floating" data-toggle="dropdown">
                <i class="ti-more-alt"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="dashboard.html#" class="dropdown-item" data-sidebar-target="#view-detail">View Details</a>
                <a href="dashboard.html#" class="dropdown-item">Share</a>
                <a href="dashboard.html#" class="dropdown-item">Download</a>
                <a href="dashboard.html#" class="dropdown-item">Copy to</a>
                <a href="dashboard.html#" class="dropdown-item">Move to</a>
                <a href="dashboard.html#" class="dropdown-item">Rename</a>
                <a href="dashboard.html#" class="dropdown-item">Delete</a>
            </div>
        </div>
    </div>
    <p class="small text-muted mb-0">1.908 Files</p>
</div>
</div>
</div>
<div class="col-md-3">
<div class="card">
<div class="card-body">
    <div class="d-flex justify-content-between mb-4">
        <div>
            <i class="font-size-22 ti-folder"></i>
        </div>
        <div>
            <div class="avatar-group">
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Baxie Roseblade">
                    <img src="../../assets/media/image/user/man_avatar5.jpg" class="rounded-circle"
                         alt="image">
                </figure>
                <figure class="avatar avatar-sm" data-toggle="tooltip" title="Mella Mixter">
                    <img src="../../assets/media/image/user/women_avatar1.jpg" class="rounded-circle"
                         alt="image">
                </figure>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-between">
        <h5>My Downloads</h5>
        <div class="dropdown">
            <a href="dashboard.html#" class="btn btn-floating" data-toggle="dropdown">
                <i class="ti-more-alt"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="dashboard.html#" class="dropdown-item" data-sidebar-target="#view-detail">View Details</a>
                <a href="dashboard.html#" class="dropdown-item">Share</a>
                <a href="dashboard.html#" class="dropdown-item">Download</a>
                <a href="dashboard.html#" class="dropdown-item">Copy to</a>
                <a href="dashboard.html#" class="dropdown-item">Move to</a>
                <a href="dashboard.html#" class="dropdown-item">Rename</a>
                <a href="dashboard.html#" class="dropdown-item">Delete</a>
            </div>
        </div>
    </div>
    <p class="small text-muted mb-0">218 Files</p>
</div>
</div>
</div>
</div>

<div class="content-title d-flex justify-content-between">
<h4>Quick Access</h4>
<a href="dashboard.html#">View All</a>
</div>

<div class="row mb-4">
<div class="col-md-2 text-center">
<div class="card mb-3">
<div class="card-body">
    <a href="dashboard.html#" class="avatar avatar-lg">
        <span class="avatar-title bg-primary rounded-pill">
            <i class="ti-image"></i>
        </span>
    </a>
</div>
</div>
<h6>Images</h6>
</div>
<div class="col-md-2 text-center">
<div class="card mb-3">
<div class="card-body">
    <a href="dashboard.html#" class="avatar avatar-lg">
        <span class="avatar-title bg-secondary rounded-pill">
            <i class="ti-video-camera"></i>
        </span>
    </a>
</div>
</div>
<h6>Videos</h6>
</div>
<div class="col-md-2 text-center">
<div class="card mb-3">
<div class="card-body">
    <a href="dashboard.html#" class="avatar avatar-lg">
        <span class="avatar-title bg-success rounded-pill">
            <i class="ti-music"></i>
        </span>
    </a>
</div>
</div>
<h6>Music</h6>
</div>
<div class="col-md-2 text-center">
<div class="card mb-3">
<div class="card-body">
    <a href="dashboard.html#" class="avatar avatar-lg">
        <span class="avatar-title bg-warning rounded-pill">
            <i class="ti-files"></i>
        </span>
    </a>
</div>
</div>
<h6>Documents</h6>
</div>
<div class="col-md-2 text-center">
<div class="card mb-3">
<div class="card-body">
    <a href="dashboard.html#" class="avatar avatar-lg">
        <span class="avatar-title bg-info rounded-pill">
            <i class="ti-download"></i>
        </span>
    </a>
</div>
</div>
<h6>Downloads</h6>
</div>
<div class="col-md-2 text-center">
<div class="card mb-3">
<div class="card-body">
    <a href="dashboard.html#" class="avatar avatar-lg">
        <span class="avatar-title rounded-pill">
            <i class="ti-plus"></i>
        </span>
    </a>
</div>
</div>
<h6>Add</h6>
</div>
</div>

<div class="content-title d-flex justify-content-between">
<h4>Recent Files</h4>
<a href="dashboard.html#">View All</a>
</div>

<div class="mb-4">
<div class="table-responsive">
<table class="table table-borderless table-hover mb-0">
<thead>
<tr>
    <th>Name</th>
    <th>Size</th>
    <th>Modified</th>
    <th>Label</th>
    <th>Members</th>
    <th></th>
</tr>
</thead>
<tbody>
<tr>
    <td>
        <a href="dashboard.html#">
            <figure class="avatar avatar-sm mr-2">
                <span class="avatar-title bg-warning text-black-50 rounded-pill">
                    <i class="ti-folder"></i>
                </span>
            </figure>
            User Research
        </a>
    </td>
    <td>2MB</td>
    <td>3/9/19, 2:40PM</td>
    <td>
        <div class="badge bg-warning-bright text-warning">Project</div>
    </td>
    <td>
        <div class="avatar-group">
            <figure class="avatar avatar-sm" title="Lisle Essam"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/women_avatar2.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
            <figure class="avatar avatar-sm" title="Baxie Roseblade"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/man_avatar5.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
        </div>
    </td>
    <td class="text-right">
        <div class="dropdown">
            <a href="dashboard.html#" class="btn btn-floating" data-toggle="dropdown">
                <i class="ti-more-alt"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="dashboard.html#" class="dropdown-item" data-sidebar-target="#view-detail">View Details</a>
                <a href="dashboard.html#" class="dropdown-item">Share</a>
                <a href="dashboard.html#" class="dropdown-item">Download</a>
                <a href="dashboard.html#" class="dropdown-item">Copy to</a>
                <a href="dashboard.html#" class="dropdown-item">Move to</a>
                <a href="dashboard.html#" class="dropdown-item">Rename</a>
                <a href="dashboard.html#" class="dropdown-item">Delete</a>
            </div>
        </div>
    </td>
</tr>
<tr>
    <td>
        <a href="dashboard.html#">
            <figure class="avatar avatar-sm mr-2">
                <span class="avatar-title bg-warning text-black-50 rounded-pill">
                    <i class="ti-folder"></i>
                </span>
            </figure>
            Design Thinking Project
        </a>
    </td>
    <td>10MB</td>
    <td>3/9/19, 2:40PM</td>
    <td>
        <div class="badge bg-secondary-bright text-secondary">Software</div>
    </td>
    <td>
    </td>
    <td class="text-right">
        <div class="dropdown">
            <a href="dashboard.html#" class="btn btn-floating" data-toggle="dropdown">
                <i class="ti-more-alt"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="dashboard.html#" class="dropdown-item" data-sidebar-target="#view-detail">View Details</a>
                <a href="dashboard.html#" class="dropdown-item">Share</a>
                <a href="dashboard.html#" class="dropdown-item">Download</a>
                <a href="dashboard.html#" class="dropdown-item">Copy to</a>
                <a href="dashboard.html#" class="dropdown-item">Move to</a>
                <a href="dashboard.html#" class="dropdown-item">Rename</a>
                <a href="dashboard.html#" class="dropdown-item">Delete</a>
            </div>
        </div>
    </td>
</tr>
<tr>
    <td>
        <a href="dashboard.html#">
            <figure class="avatar avatar-sm mr-2">
                <span class="avatar-title rounded-pill">
                    <i class="ti-file"></i>
                </span>
            </figure>
            Meeting-notes.doc
        </a>
    </td>
    <td>139KB</td>
    <td>3/9/19, 2:40PM</td>
    <td>
        <div class="badge bg-primary-bright text-primary">Public</div>
    </td>
    <td>
        <div class="avatar-group">
            <figure class="avatar avatar-sm" title="Lisle Essam"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/women_avatar2.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
            <figure class="avatar avatar-sm" title="Baxie Roseblade"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/man_avatar5.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
            <figure class="avatar avatar-sm" title="Mella Mixter"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/women_avatar1.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
            <figure class="avatar avatar-sm" title="Jo Hugill"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/man_avatar1.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
            <figure class="avatar avatar-sm" title="Cullie Philcott"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/women_avatar5.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
            <figure class="avatar avatar-sm" title="" data-toggle="tooltip"
                    data-original-title="Cullie Philcott">
                <span class="avatar-title bg-primary rounded-circle">+ 5</span>
            </figure>
        </div>
    </td>
    <td class="text-right">
        <div class="dropdown">
            <a href="dashboard.html#" class="btn btn-floating" data-toggle="dropdown">
                <i class="ti-more-alt"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="dashboard.html#" class="dropdown-item" data-sidebar-target="#view-detail">View Details</a>
                <a href="dashboard.html#" class="dropdown-item">Share</a>
                <a href="dashboard.html#" class="dropdown-item">Download</a>
                <a href="dashboard.html#" class="dropdown-item">Copy to</a>
                <a href="dashboard.html#" class="dropdown-item">Move to</a>
                <a href="dashboard.html#" class="dropdown-item">Rename</a>
                <a href="dashboard.html#" class="dropdown-item">Delete</a>
            </div>
        </div>
    </td>
</tr>
<tr>
    <td>
        <a href="dashboard.html#">
            <figure class="avatar avatar-sm mr-2">
                <span class="avatar-title rounded-pill">
                    <i class="ti-image"></i>
                </span>
            </figure>
            Sitemap.png
        </a>
    </td>
    <td>810KB</td>
    <td>3/9/19, 2:40PM</td>
    <td>
        <div class="badge bg-success-bright text-success">Social Media</div>
    </td>
    <td>
        <div class="avatar-group">
            <figure class="avatar avatar-sm" title="Lisle Essam"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/women_avatar2.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
            <figure class="avatar avatar-sm" title="Baxie Roseblade"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/man_avatar5.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
            <figure class="avatar avatar-sm" title="Mella Mixter"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/women_avatar1.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
        </div>
    </td>
    <td class="text-right">
        <div class="dropdown">
            <a href="dashboard.html#" class="btn btn-floating" data-toggle="dropdown">
                <i class="ti-more-alt"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="dashboard.html#" class="dropdown-item" data-sidebar-target="#view-detail">View Details</a>
                <a href="dashboard.html#" class="dropdown-item">Share</a>
                <a href="dashboard.html#" class="dropdown-item">Download</a>
                <a href="dashboard.html#" class="dropdown-item">Copy to</a>
                <a href="dashboard.html#" class="dropdown-item">Move to</a>
                <a href="dashboard.html#" class="dropdown-item">Rename</a>
                <a href="dashboard.html#" class="dropdown-item">Delete</a>
            </div>
        </div>
    </td>
</tr>
<tr>
    <td>
        <a href="dashboard.html#">
            <figure class="avatar avatar-sm mr-2">
                <span class="avatar-title rounded-pill">
                    <i class="ti-file"></i>
                </span>
            </figure>
            Analytics.pdf
        </a>
    </td>
    <td>10KB</td>
    <td>3/9/19, 2:40PM</td>
    <td>
        <div class="badge bg-info-bright text-info">Design</div>
    </td>
    <td>
        <div class="avatar-group">
            <figure class="avatar avatar-sm" title="Lisle Essam"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/women_avatar2.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
            <figure class="avatar avatar-sm" title="Baxie Roseblade"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/man_avatar5.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
            <figure class="avatar avatar-sm" title="Mella Mixter"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/women_avatar1.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
            <figure class="avatar avatar-sm" title="Mella Mixter"
                    data-toggle="tooltip">
                <img src="../../assets/media/image/user/women_avatar4.jpg"
                     class="rounded-circle"
                     alt="image">
            </figure>
        </div>
    </td>
    <td class="text-right">
        <div class="dropdown">
            <a href="dashboard.html#" class="btn btn-floating" data-toggle="dropdown">
                <i class="ti-more-alt"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="dashboard.html#" class="dropdown-item" data-sidebar-target="#view-detail">View Details</a>
                <a href="dashboard.html#" class="dropdown-item">Share</a>
                <a href="dashboard.html#" class="dropdown-item">Download</a>
                <a href="dashboard.html#" class="dropdown-item">Copy to</a>
                <a href="dashboard.html#" class="dropdown-item">Move to</a>
                <a href="dashboard.html#" class="dropdown-item">Rename</a>
                <a href="dashboard.html#" class="dropdown-item">Delete</a>
            </div>
        </div>
    </td>
</tr>
</tbody>
</table>
</div>
</div>

<div class="content-title d-flex justify-content-between">
<h4>Last Activities</h4>
</div>

<div class="timeline">
<div class="timeline-item">
<div>
<figure class="avatar mr-3">
    <span class="avatar-title bg-success rounded-circle">j</span>
</figure>
</div>
<div>
<h6 class="d-md-flex justify-content-between mb-3">
    <span class="d-block">
        A file of <a href="dashboard.html#" class="link-1">Jonny Richie</a> has been shared.
    </span>
    <span class="text-muted font-weight-normal">4h</span>
</h6>
<div class="avatar-group">
    <figure class="avatar" title="Lisle Essam"
            data-toggle="tooltip">
        <img src="../../assets/media/image/user/women_avatar2.jpg"
             class="rounded-circle"
             alt="image">
    </figure>
    <figure class="avatar" title="Baxie Roseblade"
            data-toggle="tooltip">
        <img src="../../assets/media/image/user/man_avatar5.jpg"
             class="rounded-circle"
             alt="image">
    </figure>
    <figure class="avatar" title="Baxie Roseblade"
            data-toggle="tooltip">
        <span class="avatar-title bg-secondary rounded-pill">A</span>
    </figure>
    <figure class="avatar" title="Jo Hugill"
            data-toggle="tooltip">
        <img src="../../assets/media/image/user/man_avatar1.jpg"
             class="rounded-circle"
             alt="image">
    </figure>
    <figure class="avatar" title="Cullie Philcott"
            data-toggle="tooltip">
        <img src="../../assets/media/image/user/women_avatar5.jpg"
             class="rounded-circle"
             alt="image">
    </figure>
    <figure class="avatar" title="Cullie Philcott"
            data-toggle="tooltip">
        <span class="avatar-title bg-warning rounded-pill">Z</span>
    </figure>
</div>
</div>
</div>
<div class="timeline-item">
<div>
<figure class="avatar mr-3">
    <span class="avatar-title bg-warning rounded-circle">M</span>
</figure>
</div>
<div>
<h6 class="d-md-flex justify-content-between mb-3">
    <span class="d-block">
        <a href="dashboard.html#" class="link-1">Marc Hugill</a> uploaded new files
    </span>
    <span class="text-muted font-weight-normal">Tue 8:17pm</span>
</h6>
<div class="card card-body mb-3 d-flex justify-content-between flex-row">
    <div>
        <a href="dashboard.html#">
            <i class="fa fa-file-pdf-o mr-2"></i> test-file-1.pdf
        </a>
        <span class="ml-3 small">70 KB</span>
    </div>
    <div>
        <a href="dashboard.html#" title="View file">
            <i class="ti-eye"></i>
        </a>
    </div>
</div>
<div class="card card-body mb-3 d-flex justify-content-between flex-row">
    <div>
        <a href="dashboard.html#">
            <i class="fa fa-file-excel-o mr-2"></i> test-file-2.xlsx
        </a>
        <span class="ml-3 small">17 KB</span>
    </div>
    <div>
        <a href="dashboard.html#" title="View file">
            <i class="ti-eye"></i>
        </a>
    </div>
</div>
<div class="card card-body mb-3 d-flex justify-content-between flex-row">
    <div>
        <a href="dashboard.html#">
            <i class="fa fa-file-text-o mr-2"></i> test-file-3.txt
        </a>
        <span class="ml-3 small">152 KB</span>
    </div>
    <div>
        <a href="dashboard.html#" title="View file">
            <i class="ti-eye"></i>
        </a>
    </div>
</div>
</div>
</div>
<div class="timeline-item">
<div>
<figure class="avatar mr-3">
    <img src="../../assets/media/image/user/women_avatar5.jpg" class="rounded-circle" alt="avatar">
</figure>
</div>
<div>
<h6 class="d-md-flex justify-content-between mb-3">
    <span class="d-block">
        <a href="dashboard.html#" class="link-1">Cullie Philcott</a> uploaded a picture
    </span>
    <span class="text-muted font-weight-normal">Tue 8:17pm</span>
</h6>
<div class="row row-xs">
    <div class="col-xl-2 col-lg-3 col-md-4 col-sx-6">
        <figure>
            <img src="../../assets/media/image/portfolio-five.jpg"
                 class="w-100 border-radius-1" alt="image">
        </figure>
    </div>
    <div class="col-xl-2 col-lg-3 col-md-4 col-sx-6">
        <figure>
            <img src="../../assets/media/image/portfolio-one.jpg"
                 class="w-100 border-radius-1" alt="image">
        </figure>
    </div>
    <div class="col-xl-2 col-lg-3 col-md-4 col-sx-6">
        <figure>
            <img src="../../assets/media/image/portfolio-three.jpg"
                 class="w-100 border-radius-1" alt="image">
        </figure>
    </div>
</div>
</div>
</div>
</div>
</div>
@endsection
@push('scripts')
   <!-- Apex chart -->
<script src="https://apexcharts.com/samples/assets/irregular-data-series.js"></script>
<script src="{{asset('vendors/charts/apex/apexcharts.min.js')}}"></script>

<!-- Dashboard scripts -->
<script src="{{ asset('assets/js/examples/pages/file-dashboard.js')}}"></script>

@endpush