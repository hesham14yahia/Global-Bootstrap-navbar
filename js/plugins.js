/*jslint plusplus: true, evil: true*/
/*global document*/

/*
    This is a pure js code, which give you a bootstrap global navbar.
        * to find replacement nodes just search with 'replace' word and closed class name like - 'replace navbar-brand' to change navbar brand name - and comments will leads you to replacement node code.
*/

// define variables
var i,
    mainNav = document.getElementById('main-nav'),
    containerNav = document.createElement('div'),
    brandAndToggleComment = document.createComment('Brand and toggle get grouped for better mobile display'),
    navHeader = document.createElement('div'),
    navToggleBtn = document.createElement('button'),
    navToggleSpan = document.createElement('span'),
    navToggleSpanNode = document.createTextNode('Toggle navigation'),
    navBrandLink = document.createElement('a'), // replace navbar-brand tag
    navBrandLinkNode = document.createTextNode('Brand Name');
    
// set attributes
mainNav.setAttribute('class', 'navbar navbar-inverse navbar-fixed-top');
containerNav.setAttribute('class', 'container');
navHeader.setAttribute('class', 'navbar-header');
navToggleBtn.setAttribute('class', 'navbar-toggle collapsed');
navToggleBtn.setAttribute('type', 'button');
navToggleBtn.setAttribute('data-toggle', 'collapse');
navToggleBtn.setAttribute('data-target', '#mobile-navbar');
navToggleBtn.setAttribute('aria-expanded', 'false');
navToggleSpan.setAttribute('class', 'sr-only');
navBrandLink.setAttribute('class', 'navbar-brand');
navBrandLink.setAttribute('href', '#'); // replace navbar-brand '#' with the actualy link

// locate elements & nodes and comments
mainNav.appendChild(containerNav);
containerNav.appendChild(brandAndToggleComment);
containerNav.appendChild(navHeader);
navHeader.appendChild(navToggleBtn);
navToggleBtn.appendChild(navToggleSpan);
navToggleSpan.appendChild(navToggleSpanNode);
for (i = 0; i < 3; i += 1) {
    var navToggleSpanSiblings = document.createElement('span');
    navToggleSpanSiblings.setAttribute('class', 'icon-bar');
    navToggleBtn.appendChild(navToggleSpanSiblings);
}
navHeader.appendChild(navBrandLink); // replace navbar-brand location
navBrandLink.appendChild(navBrandLinkNode);