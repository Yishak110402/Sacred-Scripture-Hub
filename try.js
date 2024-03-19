const baseUrl = window.location.href.replace(window.location.pathname, '');

const langButtons = document.querySelectorAll('.lang-button');

langButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        const lang = this.getAttribute('data-lang');
        let newPath;

        if (lang === 'en') {
            newPath = 'EN/index.html';
        } else if (lang === 'am') {
            newPath = 'AM/AMindex.html';
        }

        if (newPath) {
            window.location.href = baseUrl + '/' + newPath;
        }
    });
});
