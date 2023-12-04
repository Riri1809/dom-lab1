// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
//Part 1: Getting Started
//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
console.log('mainEl');
//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//const mainBgColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg');
//Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';
//Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
//Add a class of flex-ctr to mainEl.
//Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');

//Part 2: Creating a Menu Bar
//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu');
//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

//Part 3: Adding Menu Buttons
// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach(function(link) {
    // Create an <a> element
    var anchor = document.createElement('a');
    
    // Set href attribute
    anchor.href = link.href;
    
    // Set content
    anchor.textContent = link.text;
    
    // Append to topMenuEl
    topMenuEl.appendChild(anchor);
  });

