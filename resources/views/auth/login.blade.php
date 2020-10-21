<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GecPRN - Login</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{asset('assets/media/image/favicon.png')}}"/>

    <!-- Plugin styles -->
    <link rel="stylesheet" href="{{asset('vendors/bundle.css')}}" type="text/css">

    <!-- App styles -->
    <link rel="stylesheet" href="{{asset('assets/css/app.min.css')}}" type="text/css">
</head>
<body class="form-membership" style="background: url(../../assets/images/palais.jpg) no-repeat center center; background-size: cover">

<!-- begin::preloader-->
<div class="preloader">
    <div class="preloader-icon"></div>
</div>
<!-- end::preloader -->

        <div class="form-wrapper">

            <!-- logo -->
            <div id="logo">
                <img src="{{asset('assets/media/image/logo-dark.png')}}" alt="image">
            </div>
            <!-- ./ logo -->

            <h5>Authentification</h5>
            @if (session('status'))
                <div class="mb-4 font-medium text-sm text-green-600">
                    {{ session('status') }}
                </div>
            @endif

            <!-- form -->
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="form-group">
                    <input type="text" class="form-control" name="email" placeholder="Utilisateur" required autofocus>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Mot de passe" required>
                </div>
                <div class="form-group d-flex justify-content-between">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" checked="" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Rester connecté</label>
                    </div>
                </div>
                <button class="btn btn-primary btn-block">Se connecter</button>
            </form>
            <!-- ./ form -->


        </div>
<!-- Plugin scripts -->
<script src="{{asset('vendors/bundle.js')}}"></script>

<!-- App scripts -->
<script src="{{asset('assets/js/app.min.js')}}"></script>
</body>
</html>
