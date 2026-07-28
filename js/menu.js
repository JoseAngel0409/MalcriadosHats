document.addEventListener('DOMContentLoaded', function() {

    // =====================================================
    // 1. HEADER INTELIGENTE (scroll)
    // =====================================================
    const header = document.getElementById('main-header');

    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar

    // =====================================================
    // 2. BUSCADOR DESPLEGABLE
    // =====================================================
    const searchToggle = document.querySelector('.search-toggle');
    const searchBar = document.querySelector('.search-bar');

    if (searchToggle && searchBar) {
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            searchBar.classList.toggle('open');
            if (searchBar.classList.contains('open')) {
                const input = searchBar.querySelector('input');
                if (input) input.focus();
            }
        });

        // Cerrar con Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchBar.classList.contains('open')) {
                searchBar.classList.remove('open');
            }
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (searchBar.classList.contains('open') &&
                !searchBar.contains(e.target) &&
                e.target !== searchToggle &&
                !searchToggle.contains(e.target)) {
                searchBar.classList.remove('open');
            }
        });
    }
});