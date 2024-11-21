

var QuoteButton=document.getElementById("QuotesButton");
var QuotesDisplay=document.getElementById("QuoteDisplay");

var quotes = [
    "A friend is someone who knows all about you and still loves you.   - Elbert Hubbard",
    "So many books, so little time.   - Frank Zappa",
    "If you tell the truth, you don't have to remember anything.    - Mark Twain",
    "A room without books is like a body without a soul.   - Marcus Tullius Cicero",
    "You only live once, but if you do it right, once is enough.   - Mae West"
];




function displayQuotes(){
    var randomIndex = Math.floor(Math.random() * quotes.length);
            var quote = quotes[randomIndex];
            document.getElementById("QuoteDisplay").innerText = quote;
            // QuoteButton.classList.remove("bg-info"); 
            // QuoteButton.classList.add("bg-success");    
}
        