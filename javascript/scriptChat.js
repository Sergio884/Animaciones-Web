const abrirChat = document.querySelectorAll('[data-modal-target]')
const cerrarChat = document.querySelectorAll('[data-close-button]')

abrirChat.forEach(button => {
    button.addEventListener('click',() => {
        const chat = document.querySelector(button.dataset.modalTarget)
        abrir(chat)
    })
})

function abrir(chat){
    if(chat == null) return
    chat.classList.add('activo')
}

cerrarChat.forEach(button => {
    button.addEventListener('click', () => {
        const chat = button.closest('.chat')
        cerrar(chat)
    })
})

function cerrar(chat){
    if(chat == null) return
    chat.classList.remove('activo')
}