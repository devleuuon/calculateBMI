// variables

const alertError = document.querySelector('.alertError')
const wrapper = document.querySelector('.wrapper')
const title = document.querySelector('#title')
const close = document.querySelector('.modal button.close')

const weight = document.querySelector('#weight')
const height = document.querySelector('#height')

function handleClick(event) {
    event.preventDefault()

    // ALERT ERROR

    if(weight == isNaN || weight.value == "") {
        alertError.classList.add('open')
    } 
    
    if(height == isNaN || height.value == "") {
        alertError.classList.add('open')
        return;
    } else {
        alertError.classList.remove('open')
    }

    const result = (Number(weight.value) / Number((height.value * height.value)) * 10000).toFixed(2)
    console.log(result);

    title.innerText = `Seu IMC é ${result}`

    // MODAL

    wrapper.classList.add('open')

    weight.value  = "" //Esvaziar input
    height.value  = ""
}

// CLOSE BUTTON

close.onclick = () => {
    wrapper.classList.remove('open')
}



