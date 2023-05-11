<header id="header">
    @include('layouts.navbar')
    @if($_SERVER['REQUEST_URI'] !== "/politics")
        @include('layouts.first-screen')
    @endif
</header>
