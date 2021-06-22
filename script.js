let selectCard = document.querySelectorAll(".cards");
// console.log(selectCard);

let hasFlipped = false;
let screenLock = false;
let firstCard, secondCard;

function flip() {
    if(screenLock){
        return;
    }

    this.classList.add('flip');
    // console.log(this);

    if (!hasFlipped) {
        //first time click
        hasFlipped = true;
        firstCard = this;
        // console.log(hasFlipped, firstCard);

        // console.log(firstCard.dataset.card);
    }
    else {
        //second time click
        hasFlipped = false
        secondCard = this;
        // console.log(firstCard, secondCard);

        // console.log(secondCard.dataset.card);
        if (firstCard.dataset.card == secondCard.dataset.card) {
            firstCard.removeEventListener('click', flip);
            secondCard.removeEventListener('click', flip);
        }
        else {
            screenLock = true;
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                screenLock = false;
            }, 750);
        }
    }
}

(function arrangeImg(){
    selectCard.forEach(card => {
        let num = Math.floor(Math.random()*30);
        card.style.order = num;
    })
})();

selectCard.forEach((elem) => elem.addEventListener('click', flip));