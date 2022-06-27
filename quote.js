const quoteText = document.querySelector(".quote-text");
const autherName = document.querySelector(".auther-name");
const nextBtn = document.querySelector("button");
const sound = document.querySelector(".sound");
const copy = document.querySelector(".copy");

function randomQuote(){
    nextBtn.classList.add("loading")
    nextBtn.innerText = "Loading..."
    fetch("https://free-quotes-api.herokuapp.com/").then(res => res.json()).then(result => {
        quoteText.innerText = result.quote;
        autherName.innerText = result.author;
        nextBtn.innerText = "Next Quote";
        nextBtn.classList.remove("loading")
     })
}

randomQuote()

sound.addEventListener('click', ()=>{
    let uttrance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${autherName.innerText}`)
    speechSynthesis.speak(uttrance);
})

copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(quoteText.innerText)
})

nextBtn.addEventListener('click', randomQuote);