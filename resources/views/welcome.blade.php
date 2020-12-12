<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<link rel="shortcut icon" href="/assets/images/logo_transparent.png" />

	<title>GEC-PRN</title>

	<!-- Fonts -->
	<link rel="stylesheet" href="{{asset('vendors/bundle.css')}}">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap" rel="stylesheet">

	<!-- Styles -->
	<link rel="stylesheet" href="{{asset('vendors/prism/prism.css')}}">
	<link rel="stylesheet" href="{{asset('vendors/enjoyhint/enjoyhint.css')}}">
	<link rel="stylesheet" href="{{asset('vendors/form-wizard/jquery.steps.css')}}">
	<link rel="stylesheet" href="{{asset('vendors/dropzone/dropzone.css')}}">
	<link rel="stylesheet" href="{{asset('vendors/select2/css/select2.min.css')}}">
	<link rel="stylesheet" href="{{asset('assets/css/app.min.css')}}">

	<!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

	<marquee behavior="scroll" direction="left">
		Ceci est une version de démonstration,
		veuillez noter qu'aucune transaction ne sera traitée
	</marquee>

</head>

<body>



	<div id="app">
		<div class="preloader">
			<div class="preloader-icon" />
		</div>
	</div>

	<script src="{{asset('vendors/bundle.js')}}"></script>
	<script src="{{asset('assets/js/jquery.min.js')}}"></script>
	<script src="{{asset('js/raphael-min.js')}}"></script>
	<script src="{{asset('js/justgage.min.js')}}"></script>
	<script src="{{asset('vendors/prism/prism.js')}}"></script>
	<script src="{{asset('vendors/form-wizard/jquery.steps.min.js')}}"></script>
	<script src="{{asset('js/jquery.scrollTo.min.js')}}"></script>
	<script src="{{asset('js/kinetic.js')}}"></script>
	<script src="{{asset('vendors/enjoyhint/jquery.enjoyhint.js')}}"></script>
	<script src="{{asset('vendors/enjoyhint/enjoyhint.min.js')}}"></script>
	<script src="{{asset('vendors/dropzone/dropzone.js')}}"></script>
	<script src="{{asset('vendors/select2/js/select2.min.js')}}"></script>
	<script src="{{asset('assets/js/app.min.js')}}"></script>
	<script src="/js/app.js"></script>
	<script id="apex" src="{{asset('vendors/charts/apex/apexcharts.min.js')}}"></script>
	<script>
		toastr.options = {
			timeOut: 3000,
			progressBar: true,
			showMethod: "slideDown",
			hideMethod: "slideUp",
			showDuration: 200,
			hideDuration: 200
		};
	</script>
</body>

</html>