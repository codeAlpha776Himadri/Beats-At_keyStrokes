const btn = document.querySelector('.screen>button');
const screen = document.querySelector('.screen');

btn.style.cursor='pointer';

btn.addEventListener('click',() => {
    screen.classList.add('screen-animation');


    window.addEventListener('keydown' , (e) => {
        let enteredKey = `code-${e.keyCode}`
    
        const audio = document.querySelector(`audio[data-key="${enteredKey}"]`) ;
        const key = document.querySelector(`.${enteredKey}`) ;
    
        if(!audio){ return };
        audio.currentTime = 0 ; // to rewind with each click
        audio.play();
    
        key.classList.add('key-box-animationOnClick') ;
    
        window.addEventListener('transitionend' , () => {
            key.classList.remove('key-box-animationOnClick');
        });
    });


});

// window.addEventListener('keydown' , (e) => {
//     let enteredKey = `code-${e.keyCode}`

//     const audio = document.querySelector(`audio[data-key="${enteredKey}"]`) ;
//     const key = document.querySelector(`.${enteredKey}`) ;

//     if(!audio){ return };
//     audio.currentTime = 0 ; // to rewind with each click
//     audio.play();

//     key.classList.add('key-box-animationOnClick') ;

//     window.addEventListener('transitionend' , () => {
//         key.classList.remove('key-box-animationOnClick');
//     });
// });

