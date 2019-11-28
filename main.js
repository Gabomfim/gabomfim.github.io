const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.wordIndex = 0;
    this.txt = '';
    this.isDeleting = false;
    this.type();
}

// Type Method

// Init on DOM Load
document.addEventListener("DOMContentLoad", init);

// Init App
function init(){
    const txtElement = document.querySelector(".typewriter");
    const words = JSON.parse(txtElement.getAttribute("data-sentence"));
    const wait = txtElement.getAttribute("data-wait");
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}