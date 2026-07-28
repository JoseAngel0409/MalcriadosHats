document.addEventListener('DOMContentLoaded', () => {

    // Elementos
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const searchToggle = document.querySelector('.search-toggle');
    const searchBar = document.querySelector('.search-bar');
    const header = document.getElementById('main-header');

    // Verificar si el botón existe
    if (!menuToggle) {
        console.error('Botón hamburguesa no encontrado');
        return;
    }

    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    // 1. Menú hamburguesa
    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    // Evento click en el botón
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Cerrar al hacer clic en overlay
    overlay.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Cerrar al hacer clic en un enlace del menú
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // 2. Header scroll
    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // 3. Buscador
    if (searchToggle && searchBar) {
        searchToggle.addEventListener('click', (e) => {
            e.preventDefault();
            searchBar.classList.toggle('open');
            if (searchBar.classList.contains('open')) {
                const input = searchBar.querySelector('input');
                if (input) input.focus();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchBar.classList.contains('open')) {
                searchBar.classList.remove('open');
            }
        });

        document.addEventListener('click', (e) => {
            if (searchBar.classList.contains('open') &&
                !searchBar.contains(e.target) &&
                e.target !== searchToggle &&
                !searchToggle.contains(e.target)) {
                searchBar.classList.remove('open');
            }
        });
    }
});