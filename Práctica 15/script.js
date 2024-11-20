const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')){
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }else{
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});