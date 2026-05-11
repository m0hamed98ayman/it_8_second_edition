const darkModeBtn = document.getElementById('dark-mode-button');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    darkModeBtn.innerHTML = '☀️';
}

darkModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    let theme = 'light';
    if (document.body.classList.contains('dark-theme')) {
        theme = 'dark';
        darkModeBtn.innerHTML = '☀️';
    } else {
        darkModeBtn.innerHTML = '🌙';
    }
    
    localStorage.setItem('theme', theme);
});