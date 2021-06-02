const textDisplay = document.getElementById('text');
const phrase = ["Hello, i'm chathura" , "&lt I'm  a front-end developer. />",]

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    textDisplay.innerHTML = currentPhrase.join('')
    if(i < phrase.length){
  
        if( !isDeleting && j <= phrase[i].length){
            currentPhrase.push(phrase[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')

        }
        if(isDeleting && j <= phrase[i].length){
            currentPhrase.pop(phrase[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')

        }
        if(j == phrase[i].length){
            isEnd = true;
            isDeleting = true;
        }
        if( isDeleting && j === 0){
            currentPhrase = []
            isDeleting = false
            i++
            if(i == phrase.length){
                i = 0;
            }
        }
    }
    const spedUp = Math.random() * (80 - 50 + 50)
    const normalSpeed = Math.random() * (300 - 200 + 200)
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop,time)
}
loop();