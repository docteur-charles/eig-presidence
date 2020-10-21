@include('layouts.htmlheader')
<body>
<!-- Preloader -->
<div class="preloader">
    <div class="preloader-icon"></div>
</div>
<!-- ./ Preloader -->

<!-- Layout wrapper -->
<div class="layout-wrapper">
    <!-- Header -->
    @include('layouts.header')
    <!-- ./ Header -->

    <!-- Content wrapper -->
    <div class="content-wrapper">
        <!-- begin::navigation -->
        @include('layouts.leftmenu')
        <!-- end::navigation -->

        <!-- Content body -->
        <div class="content-body">
            @yield('content')
       
            <!-- ./ Content -->

            <!-- Footer -->
            @include('layouts.footer')
           <!-- ./ Footer -->
        </div>
    </div>
    <!-- ./ Content wrapper -->
</div>
<!-- ./ Layout wrapper -->

<!-- Main scripts -->
@include('layouts.htmlfooter')
@stack('scripts')
<script src="{{asset('assets/js/app.min.js')}}"></script>
</body>
</html>
