document.querySelector('.dropdown-button').addEventListener('click', function () {
    var navbarRight = document.querySelector('.navbar-right');
    if (navbarRight.style.display === 'flex') {
        navbarRight.style.display = 'none';
    } else {
        navbarRight.style.display = 'flex';
    }
});
