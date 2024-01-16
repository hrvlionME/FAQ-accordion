const toggles = document.querySelectorAll('.toggle')
const answers = document.querySelectorAll('.answer')
const host = window.location.host; 

toggles.forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
       if(toggle.src == "http://" + host + "/assets/images/icon-plus.svg"){
        toggle.src = "assets/images/icon-minus.svg"
        answers[index].classList.toggle('answer-hidden');
    }
        else{
        toggle.src = "assets/images/icon-plus.svg"
        answers[index].classList.toggle('answer-hidden');
        }
    })
})