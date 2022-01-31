
    /*Script para que la página empiece ya en dark mode*/
    <script>
    document.addEventListener('DOMContentLoaded', (event) => {
        ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList
            .add('dark'): document.querySelector('body').classList.remove('dark')
    })
</script>