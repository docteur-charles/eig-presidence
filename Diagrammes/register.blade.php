@extends('layouts.app')
@section('content')
<div class="row m-b-1 animated fadeInRight">
    <div class="col-md-4 card">
        <div class="card-header text-center">
            Ajouter un Utilisateur
        </div>
        <div class="card-body bg-white">
            <form class="m-b-2">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nom Prenom" required autofocus>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <select  class="form-control" name="" id="">
                        <option value="">Grade</option>
                        <option value="">Directeur</option>
                        <option value="">SGPA</option>
                        <option value="">SGP</option>
                        <option value="">DIRCABA 1</option>
                        <option value="">DIRCABA 2</option>
                        <option value="">DIRCAB</option>
                        <option value="">PRN</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Mot de Passe" required>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Confirmation Mot de passe" required>
                </div>
                <button class="btn btn-primary btn-block">Enregister</button>
            </form>
        </div>
    </div>
        <!-- form -->
    <div class="col-md-8">
        <div class="box box-block bg-white">
            <table class="table table-striped table-bordered dataTable" id="registerTable" style="width:100%;">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Email</th>          
                    <th>Fonction</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
            </table>
        </div>
    </div>
</div>
    
@endsection