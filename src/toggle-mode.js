let darkMode = true
const toggleMode = document.getElementById('toggle-mode')


toggleMode.addEventListener('click', (event) =>{
  document.documentElement.classList.toggle('light')

  const mode = darkMode ? 'light' : 'dark'

  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

  darkMode + !darkMode
})