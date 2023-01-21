/* let resultado = document.getElementById('resultado')

function insert(num) {
    resultado.innerHTML += num
}

function clean() {
    resultado.innerHTML = ''
}

function back() {
    resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length -1)
}

function calcular() {
    if(resultado.innerHTML) {
        resultado.innerHTML = eval(resultado.innerHTML)
    } else {
        resultado.innerHTML = ''
    }
}
 */

let resultado = document.querySelector('#tela')
let teclas = [...document.querySelectorAll('#teclas > button')]

teclas.forEach((item) => {
    item.addEventListener('click', (evt) => {
        let tecla = evt.target
        
        if(tecla.innerHTML == '=') {
            let calc = eval(resultado.innerHTML)

            resultado.innerHTML = calc
        }
        else if(tecla.innerHTML == 'C') {
            resultado.innerHTML = ''
        }
        else if(tecla.innerHTML == '&lt;') {
            resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length-1)
        }
        else {
            if(tecla.innerHTML == 'x') {
                resultado.innerHTML += '*'
            } else {
                resultado.innerHTML += tecla.innerHTML
            }
        }
    })
})
