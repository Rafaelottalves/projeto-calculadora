let tela = document.querySelector('#tela-calc')
let teclaIgual = document.querySelector('#resultado')

let deleteBtn = document.querySelector('#delete')
deleteBtn.addEventListener('click', () => {
    tela.innerHTML = ''
})

let listaTeclas = [...document.querySelectorAll('#teclas-calc > button')]
let contaStr = ''

listaTeclas.forEach((item) => {
    item.addEventListener('click', (evt) => {
        let tecla = evt.target
        
        if(tecla.innerHTML == '=') {
            console.log(contaStr)
        } else if(tecla.id != 'delete' && tecla.innerHTML != '=') {
            contaStr += tecla.innerHTML
            tela.innerHTML += tecla.innerHTML
        }
    })
})
