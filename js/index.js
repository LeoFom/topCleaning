document.getElementById("menu-close").addEventListener('click', () => {
    document.getElementById("menu-open").classList.add('close')
    // Добавить класс close
})
document.getElementById("menu").addEventListener('click', () => {
    document.getElementById("menu-open").classList.remove('close')
    // Добавить класс close
})