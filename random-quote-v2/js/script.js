// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*Creating an array called quotes to store obects containing quote data.
This array's scope in globally accessible.
Storing data into the array objects to form complete quote data.
5 quote objects and 6 object properties.
*/
var quotes = [
{quote : "I don't know half of you half as well as I should like; " +
"and I like less than half of you half as well as you deserve.",
 source : "Bilbo Baggins",
 citation : "The Fellowship Of The Ring",
 year : 3001,
 tag : "Fantasy",
 mood : "Sarcastic"
},
{quote : "Only those who are asleep make no mistakes.",
 source : "Ingvar Kamprad",
 citation : "The IKEA Story",
 year : 2011,
 tag : "Business",
 mood : "Inspirational"
},
{quote : "Sing and dance together and be joyous, " +
"but let each one of you be alone, " +
"Even as the strings of a lute are alone " +
"though they quiver with the same music.",
 source : "Kahlil Gibran",
 citation : "The Prophet",
 year : 1923,
 tag : "Poetry",
 mood : "Philosophical"
},
{quote :"Thinking is impossible if you are not going to judge. " +
"If you are not going to judge, then you can just remain aware" +
"-but you cannot think.",
 source : "Osho",
 citation : "Awareness",
 year : 2001,
 tag : "Philosophy",
 mood : "Enigmatic"
},
{quote :"Our mistake would lie in supposing that what is radiant " +
"no longer exists because it has been explined from the shadow-side",
 source : "Carl Jung",
 citation : "Modern Man in Search of a Soul",
 year : 1933,
 tag : "Psychology",
 mood : "Cognizant"
},
];

/* Creating a function which uses the Math.Random function and
randomly selects a 'quote' object from the 'quotes' array.
*/

function getRandomQuote () {
  var randomArrayNum = Math.floor(Math.random() * quotes.length);
  var actualQuote = quotes[randomArrayNum];
    return actualQuote;
}

/* Creating a function which calls the getRandomQuote function and
returns the quote object in a variable. Constructs a string using HTML
using the properties from the objects, taking into consideration
objects that don't have certain properties using conditional statements.
Finally, the function displays the concatonated string to the page.
*/

function printQuote () {
var randomQuote = getRandomQuote ();
html =  '<p class="quote">' + randomQuote.quote + '</p>';
html += '<p class="source">' + randomQuote.source;
if (randomQuote.citation) {
html += '<span class="citation">' + randomQuote.citation + '</span>';
}
if (randomQuote.year) {
html += '<span class="year">' + randomQuote.year + '</span>';
}
html += '<span class="tag">' + randomQuote.tag + '</span>';
html += '<span class="mood">' + randomQuote.mood + '</span></p>';
document.getElementById('quote-box').innerHTML = html;
};

printQuote();
