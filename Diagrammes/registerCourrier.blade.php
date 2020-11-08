@extends('layouts.app')
@section('content')
    <div>
        <div class="row">
            <div class="col-md-4 mb-1 card">
                <div class="card-header text-center">
                    ENREGISTRER UN COURRIER
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label>Origine</label>
                            <input type="text"  class="form-control" placeholder="origine">
                        </div>
                        <div class="form-group">
                            <label>Nomero d'odre</label>
                            <input type="number" class="form-control"  placeholder="numero d'ordre">
                        </div>
                        <div class="form-group">
                            <label>Objet</label>
                            <input type="text" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label>Date arrivee</label>
                            <input type="text" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label>courrier scanne</label>
                            <input type="file" class="form-control-file" >
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Enregistrer</button>
            
                    </form>
                </div>
            </div>
            <div class="col-md-8">
                <iframe src="" frameborder="1" width="100%" height="100%">
                    <object data="animation.swf" type="application/x-shockwave-flash">
                        <param name="param11" value="valeurConf">
                    </object>
                </iframe>
            </div>
        </div>
    </div>
    
@endsection