<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<link rel="shortcut icon" href="/assets/images/logo_transparent.png" />

	<title>GEC-PRN</title>

	<!-- Fonts -->
	<link rel="stylesheet" href="/vendors/bundle.css">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap" rel="stylesheet">

	<!-- Styles -->
	<link rel="stylesheet" href="/vendors/prism/prism.css">
	<link rel="stylesheet" href="/vendors/enjoyhint/enjoyhint.css">
	<link rel="stylesheet" href="/vendors/form-wizard/jquery.steps.css">
	<link rel="stylesheet" href="/vendors/dropzone/dropzone.css">
	<link rel="stylesheet" href="/vendors/select2/css/select2.min.css">
	<link rel="stylesheet" href="/assets/css/app.min.css">

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

	<script defer src="/vendors/bundle.js"></script>
	<script defer src="/assets/js/jquery.min.js"></script>
	<script defer src="/js/raphael-min.js"></script>
	<script defer src="/js/justgage.min.js"></script>
	<script defer src="/vendors/prism/prism.js"></script>
	<script defer src="/vendors/form-wizard/jquery.steps.min.js"></script>
	<script defer src="/js/jquery.scrollTo.min.js"></script>
	<script defer src="/js/kinetic.js"></script>
	<script defer src="/vendors/enjoyhint/jquery.enjoyhint.js"></script>
	<script defer src="/vendors/enjoyhint/enjoyhint.min.js"></script>
	<script defer src="/vendors/dropzone/dropzone.js"></script>
	<script defer src="/vendors/select2/js/select2.min.js"></script>
	<script defer src="/assets/js/app.min.js"></script>
	<script defer src="/js/app.js"></script>
	<script defer id="apex" src="/vendors/charts/apex/apexcharts.min.js"></script>
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