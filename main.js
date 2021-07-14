window.addEventListener('keydown' , (e) => {
    let enteredKey = `code-${e.keyCode}`
    // console.log(enteredKey) 

    const audio = document.querySelector(`audio[data-key="${enteredKey}"]`)
    const key = document.querySelector(`.${enteredKey}`)

    // console.log(audio)
    // console.log(key)

    if(!audio){ return };
    audio.currentTime = 0 ;
    audio.play();

    key.classList.add('key-box-animationOnClick')

    window.addEventListener('transitionend' , (e) => {
        key.classList.remove('key-box-animationOnClick');
    })
})
