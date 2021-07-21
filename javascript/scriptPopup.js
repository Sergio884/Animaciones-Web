const abrirCuadro = document.querySelectorAll('[data-modal-target]')
const cerrarCuadro = document.querySelectorAll('[data-close-button]')
const cubrir = document.getElementById('cubrir')

abrirCuadro.forEach(button => {
    button.addEventListener('click',() => {
        const cuadro = document.querySelector(button.dataset.modalTarget)
        abrir(cuadro)
    })
})

function abrir(cuadro){
    if(cuadro == null) return
    cuadro.classList.add('activo')
    cubrir.classList.add('activo')
}

cerrarCuadro.forEach(button => {
    button.addEventListener('click', () => {
        const cuadro = button.closest('.cuadro')
        cerrar(cuadro)
    })
})

function cerrar(cuadro){
    if(cuadro == null) return
    cuadro.classList.remove('activo')
    cubrir.classList.remove('activo')
}