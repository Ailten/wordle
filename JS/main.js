
// load page.
window.addEventListener("load", () => {

    // load words from file.
    loadWords("JSON/words.txt");

    // pick a random word.
    let randomNumber = Math.random();
    randomNumber = randomNumber * words.length;
    randomNumber = Math.floor(randomNumber);
    let currentWord = words[randomNumber];

    // print a word.
    document.body.innerText = currentWord;

});

var words = undefined;

function loadWords(url){

    let words = [];

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log("reponse");
            console.log(response);
            return response;  
        })
        .then(data => {
            console.log("it's word !");
            words = data;
        })  
        .catch(error => console.error('Failed to fetch data:', error)); 

}