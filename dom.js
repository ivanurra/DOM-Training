// dom.js

// let paragraph = document.getElementById('paragraph');
// let title = document.getElementById('title');

// console.log(paragraph); // <== <p id="paragraph">What is your name?</p>
// console.log(title);

// let links = document.getElementsByClassName('link');

// console.log(links); // <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
// 0: a#google-link.link
// length: 1
// google-link: a#google-link.link
// __proto__: HTMLCollection

// let divs = document.getElementsByTagName('div');


// console.log(divs);


// let paragraph = document.getElementById('paragraph');
// let paragraphId = paragraph.getAttribute('id');
// console.log(paragraphId); // <== paragraph


// let paragraph = document.getElementById('paragraph');
// paragraph.setAttribute('id', 'info-paragraph');


let link = document.getElementById('google-link')
link.setAttribute('href','www.google.es')

link.setAttribute('target','_blank')

// ...

let paragraph = document.getElementById('paragraph');
paragraph.removeAttribute('id');
paragraph.setAttribute('class', 'paragraph');
paragraph.removeAttribute('class');

// ...

let h2Tag = document.createElement('h2');
console.log(h2Tag); // <== <h2></h2>

h2Tag.innerHTML = 'Elephant';


let parent = document.getElementsByTagName('body')[0]; // Only do one time
parent.appendChild(h2Tag);

// let text = document.createTextNode(data);

let text = document.createTextNode('This text is created dynamically  ');

parent.appendChild(text);

let pTag = document.createElement('p');
pTag.innerHTML = 'Hi there! I am using JavaScript'
parent.appendChild(pTag)

// index.js
// ...

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Heading 1 - comes before Heading 2';
parent.insertBefore(h1Tag, h2Tag);

// Insert a input node before the the button with the id=“add-item-button”.

let buttonTag = document.getElementById('add-item-button');
let inputTag = document.createElement('input')

parent.insertBefore(inputTag, buttonTag)

// index.js
// ...
let theParagraph = document.getElementById('paragraph');
parent.removeChild(theParagraph);

let contentDiv = document.getElementById('content');
contentDiv.innerHTML = ''; // clears the whole element

let byeUl = document.getElementById('.super-list')
parent.removeChild(byeUl);

