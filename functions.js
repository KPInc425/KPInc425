function underConstruction() {
    var x = document.getElementById("underConstructSB");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function lightMode() {
    var elementB = document.body;
    elementB.classList.toggle("light-mode");
}

function randomQuotes() {

        var quotes = new Array();
        quotes[0] = "\"This too shall pass.\"";
        quotes[1] = "\"Think of how stupid the average person is, and realize half of them are stupider than that!\" - George Carlin";
        quotes[2] = "\"Inside every cynical person, there is a disappointed idealist.\" - George Carlin";
        quotes[3] = "\"The greatest glory in living, lies not in never falling, but in rising every time we fall.\" - Nelson Mandela";
        quotes[4] = "\"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\" - Oprah Windfrey";
        quotes[5] = "\"Be who you are and say what you feel. Because those who mind, don't matter and those who matter, don't mind.\" - Dr. Seuss ";
        var rand = quotes[Math.floor(Math.random()*quotes.length)];
        document.querySelector('#randomQuote').innerHTML = rand;

}