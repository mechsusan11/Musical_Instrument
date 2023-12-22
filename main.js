var buttons = document.querySelectorAll('.drum');

buttons.forEach((btn)=>{
        var className = btn.classList[0];
        var key = className;
        btn.style.backgroundImage = `url(./images/${key}.png)`;
        btn.style.backgroundSize = "cover";

    //click functionality
    btn.addEventListener('click',(event)=>{

        console.log(event.target.classList[0]);
            const classChar = event.target.classList[0]; // Get the class name of the button
            const audio = document.querySelector(`audio[data-key="${classChar}"]`);
            const button = document.querySelector(`.${classChar}`);
            audio.play();

            //add styling dynamically
            button.classList.add('styling');
            setTimeout(()=>{
                button.classList.remove('styling');
            },400)
    })
})

//keydown functionality
window.addEventListener('keydown', function(eventKey) {
    const key = eventKey.key;
    const button = document.querySelector(`.${key}`);
    if (button) {
        button.click(); //click functionality works
    }
});