// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*Creating an array called quotes to store obects containing quote data.
This array's scope in globally accessible.
Storing data into the array objects to form complete quote data.
7 quote objects and 6 object properties.
*/
var quotes = [
{quote :,
 source :,
 citation :,
 year :,
 tag :,
 mood :,
},
{quote :,
 source :,
 citation :,
 year :,
 tag :,
 mood :,
},
{quote :,
 source :,
 citation :,
 year :,
 tag :,
 mood :,
},
{quote :,
 source :,
 citation :,
 year :,
 tag :,
 mood :,
},
{quote :,
 source :,
 citation :,
 year :,
 tag :,
 mood :,
},
{quote :,
 source :,
 citation :,
 year :,
 tag :,
 mood :,
},
{quote :,
 source :,
 citation :,
 year :,
 tag :,
 mood :,
},
]

/* Creating a function which uses the Math.Random function and
randomly selects a 'quote' object from the 'quotes' array.
*/

function getRandomQuote () {

};

/* Creating a function which calls the getRandomQuote function and
returns the quote object in a variable. Constructs a string using HTML
using the properties from the objects, taking into consideration
objects that don't have certain properties using conditional statements.
Finally, the function displays the concatonated string to the page.
*/

function printQuote (getRandomQuote) {
  <p class="quote"> [quote here] </p>
  <p class="source"> [source here]
    <span class="citation"> [citation here] </span>
    <span class="year"> [year here] </span>
    <span class="tag"> [tag here] </span>
    <span class="mood">[mood here] </span>
  </p>
document.getElementById('quote-box').innerHTML
};
