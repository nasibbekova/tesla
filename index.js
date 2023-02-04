let spanIncrease = document.querySelectorAll('span[data-increase]')
let spanDecrease =  document.querySelectorAll('span[data-decrease]')
let modalBg = document.querySelector('.modal-bg')
let modalWin = document.querySelector('.modal-window')

function func() {
    let count = 60
    for (let i = 0; i = 10 ; i++){
        if (spanIncrease.onclick = spanIncrease){
            count +=i
        } else {
            count -=i
        }
    }
}


function open() {
    modalWin.style.display = "block"
    setTimeout(() => {
        modalBg.style.opacity = "0.7"
        modalWindow.style.opacity = "1"
    }, 200);
}


close.onclick = () => {
    modalBg.style.opacity = "1"
    modalWin.style.opacity = "0"
    setTimeout(() => {
        modalWin.style.display = "none"
    }, 200);
}



