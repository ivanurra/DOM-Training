
// **************************** getElementById

let theCatDiv = document.getElementById('cat');
console.log(theCatDiv); // <== what can you see in browser's console



// **************************** element.innerHTML
// TO ADD TEXT TO DOM USE "innerHTML"

theCatDiv.innerHTML = "I'm a cat";



// **************************** element.style

theCatDiv.style.backgroundColor = 'red';
theCatDiv.style.border = '2px green solid';
theCatDiv.style.fontSize = '50px';
theCatDiv.style.marginTop = '30px';
theCatDiv.style.paddingBottom = '30px';




// **************************** .getElementsByClassName ()
// let elements = document.getElementsByClassName(names);

let mice = document.getElementsByClassName('mouse');
console.log(mice); // <== HTMLCollection(3) [div.mouse, div.mouse, div.mouse]



// **************************** Iterate over an HTML Collection
// The HTMLCollection is an array-like object but is not an array. 
// So we can’t use the array methods like forEach, map, push, etc.
// To iterate over an HTMLCollection, we should use a for loop.
// Another option we have is to turn our HTML collection into an array, using spread operator

let miceArray = [...mice];

console.log(miceArray); // <== [div.mouse, div.mouse, div.mouse]



// **************************** Accessing by Tag Name
// .getElementsByTagName()
// let elements = document.getElementsByTagName(name);

let divs = document.getElementsByTagName('div');
console.log(divs); // <== [div#cat, div.mouse, div.mouse, div.mouse]



// **************************** querySelector Accessing First Found Selector
// let theFirstFoundElem = document.querySelector(selectors)

let firstMouse = document.querySelector('.mouse');
let firstDiv = document.querySelector('div');

console.log(firstMouse); // <== <div class="mouse"></div>
console.log(firstDiv);
// <== <div id="cat" style="background-color: red; border: 2px solid green; font-size: 50px; margin-top: 30px; padding-bottom: 30px;">I'm a cat</div>



// **************************** querySelectorAll Accessing an Array of Selectors

let allDivs = document.querySelectorAll('.mouse, #cat');

console.log(allDivs); // <== NodeList(4) [div#cat, div.mouse, div.mouse, div.mouse]



// **************************** .className Getting and Setting the Class Name

let mouse1 = document.querySelector('.mouse');
console.log(mouse1.className); // <== mouse

// Example
/*
let el = document.getElementById('item');

if (el.className === 'active') {
  el.className = 'inactive';
} else {
  el.className = 'active';
}
*/

