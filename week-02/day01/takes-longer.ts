'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

// egyik megoldás, de nem ez a legjobb
//quote = quote.replace('It', 'It always takes longer than');

quote = quote.substring(0, quote.indexOf('y')) + 'always takes longer than ' + quote.substring(quote.indexOf('y'));

console.log(quote);