// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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
//continuing
//Part 3: Creating the Submenu
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");
//Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";
//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');
//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';
//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';
//Part 4: Adding Menu Interaction
//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");
//Attach a delegated 'click' event listener to topMenuEl.
//The first line of code of the event listener function should 
//call object's preventDefault() method.
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();// call preventDefautl method
//The second line of code of the function should immediately 
//return if the element clicked was not an <a> element.
if(!event.target.matches("a")) {
  return;
}

console.log(topMenuLinks);
// add the active class to the <a> element that was clicked, unless 
//it was already active, in which case it should remove it.
// Remove 'active' class from other links
topMenuLinks.forEach(link => {
  if (link !== event.target) {
    link.classList.remove('active');
  }
});

// Toggle 'active' class on the clicked link
event.target.classList.toggle('active');
//Part 5: Adding Submenu Interaction
// Logic for submenu interaction
const linkObject = menuLinks.find(link => link.text === event.target.textContent);
const subLinks = linkObject ? linkObject.subLinks : null;

// Show or hide submenu based on the 'active' state
if (event.target.classList.contains('active') && subLinks) {
  subMenuEl.style.top = '100%';
  buildSubmenu(subLinks);
} else {
  subMenuEl.style.top = '0';
  subMenuEl.innerHTML = ''; // Clear current contents of subMenuEl
}
});

function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = ''; // Clear current contents of subMenuEl
// create a helper function called buildSubmenu
  subLinks.forEach(link => {
    const newLink = document.createElement('a');
    newLink.setAttribute('href', link.href);
    newLink.textContent = link.text;
    subMenuEl.appendChild(newLink);
  });
}


