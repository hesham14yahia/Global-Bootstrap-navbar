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
    navBrandLinkNode = document.createTextNode('Brand Name'), // replace navbar-brand name
    navLinksDivComment = document.createComment('Collect the nav links and other content for toggling'),
    
    navLinksDiv = document.createElement('div'), // dropdown main div
    
    navLinksUl = document.createElement('ul'), // master links ul
    
    // Links
    navLinksLiHome = document.createElement('li'),
    navLinksHome = document.createElement('a'),
    navLinkHomeNode = document.createTextNode('Home'), // replace Home
    
    navLinksLiAbout = document.createElement('li'),
    navLinksAbout = document.createElement('a'),
    navLinkAboutNode = document.createTextNode('About'), // replace About
    
    navLinksLiFaq = document.createElement('li'),
    navLinksFaq = document.createElement('a'),
    navLinkFaqNode = document.createTextNode('FAQ'), // replace FAQ
    
    navLinksLiServices = document.createElement('li'),
    navLinksServices = document.createElement('a'),
    navLinksServicesNode = document.createTextNode('Services'), // replace Services
    
    navLinksServicesSpan = document.createElement('span'), // down arrow
    navLinksLiServicesUl = document.createElement('ul'), // dropdown ul
    
    navLinksLiProg = document.createElement('li'),
    navLinksProg = document.createElement('a'),
    navLinksProgNode = document.createTextNode('Machine Programing'), // replace Machine Programing
    
    navLinksLiWeb = document.createElement('li'),
    navLinksWeb = document.createElement('a'),
    navLinksWebNode = document.createTextNode('Web Developing'), // replace Web Developing
    
    navLinksLiDesktop = document.createElement('li'),
    navLinksDesktop = document.createElement('a'),
    navLinksDesktopNode = document.createTextNode('Desktop Software'), // replace Desktop Software
    
    navLinkaLiSeparator = document.createElement('li'),
    navLinksLiHost = document.createElement('li'),
    navLinksHost = document.createElement('a'),
    navLinksHostNode = document.createTextNode('Web Hosting'), // replace Web Hosting
    
    navLinksLiContact = document.createElement('li'),
    navLinksContact = document.createElement('a'),
    navLinkContactNode = document.createTextNode('Contact'); // replace Contact
    
// set attributes
mainNav.setAttribute('class', 'navbar navbar-inverse navbar-fixed-top');
containerNav.setAttribute('class', 'container');
navHeader.setAttribute('class', 'navbar-header');

// mobile toggle navbar btn
navToggleBtn.setAttribute('class', 'navbar-toggle collapsed');
navToggleBtn.setAttribute('type', 'button');
navToggleBtn.setAttribute('data-toggle', 'collapse');
navToggleBtn.setAttribute('data-target', '#mobile-navbar');
navToggleBtn.setAttribute('aria-expanded', 'false');

navToggleSpan.setAttribute('class', 'sr-only');

// navbar brand
navBrandLink.setAttribute('class', 'navbar-brand');
navBrandLink.setAttribute('href', '#'); // replace navbar-brand '#' with the actualy link

// dropdown main div
navLinksDiv.setAttribute('class', 'collapse navbar-collapse');
navLinksDiv.setAttribute('id', 'mobile-navbar');

// master links ul
navLinksUl.setAttribute('class', 'nav navbar-nav navbar-right');

// links
navLinksHome.setAttribute('href', 'index.html'); // replace Home link
navLinksAbout.setAttribute('href', 'about.html'); // replace About link
navLinksFaq.setAttribute('href', 'faq.html'); // replace FAQ link
navLinksContact.setAttribute('href', 'contact.html'); // replace Contact link

navLinksLiServices.setAttribute('class', 'dropdown');

navLinksServices.setAttribute('href', '#'); // replace Services link
navLinksServices.setAttribute('class', 'dropdown-toggle');
navLinksServices.setAttribute('data-toggle', 'dropdown');
navLinksServices.setAttribute('role', 'button');
navLinksServices.setAttribute('aria-haspopup', 'true');
navLinksServices.setAttribute('aria-expanded', 'false');

navLinksServicesSpan.setAttribute('class', 'caret');

navLinksLiServicesUl.setAttribute('class', 'dropdown-menu');

navLinkaLiSeparator.setAttribute('role', 'separator');
navLinkaLiSeparator.setAttribute('class', 'divider');

navLinksProg.setAttribute('href', 'proq.html'); // replace Machine Programming link
navLinksWeb.setAttribute('href', 'web.html'); // replace Web Developing link
navLinksDesktop.setAttribute('href', 'desktop.html'); // replace Desktop Software link
navLinksHost.setAttribute('href', 'host.html'); // replace Web Hosting link

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

containerNav.appendChild(navLinksDivComment);
containerNav.appendChild(navLinksDiv);

navLinksDiv.appendChild(navLinksUl);

// Home
navLinksUl.appendChild(navLinksLiHome);
navLinksLiHome.appendChild(navLinksHome);
navLinksHome.appendChild(navLinkHomeNode);

// About
navLinksUl.appendChild(navLinksLiAbout);
navLinksLiAbout.appendChild(navLinksAbout);
navLinksAbout.appendChild(navLinkAboutNode);

// FAQ
navLinksUl.appendChild(navLinksLiFaq);
navLinksLiFaq.appendChild(navLinksFaq);
navLinksFaq.appendChild(navLinkFaqNode);

// Services
navLinksUl.appendChild(navLinksLiServices);
navLinksLiServices.appendChild(navLinksServices);
navLinksServices.appendChild(navLinksServicesNode);
navLinksServices.appendChild(navLinksServicesSpan);

// Services dropdown
navLinksLiServices.appendChild(navLinksLiServicesUl);

// Machine Programing
navLinksLiServicesUl.appendChild(navLinksLiProg);
navLinksLiProg.appendChild(navLinksProg);
navLinksProg.appendChild(navLinksProgNode);

// Web Developing
navLinksLiServicesUl.appendChild(navLinksLiWeb);
navLinksLiWeb.appendChild(navLinksWeb);
navLinksWeb.appendChild(navLinksWebNode);

// Desktop Software
navLinksLiServicesUl.appendChild(navLinksLiDesktop);
navLinksLiDesktop.appendChild(navLinksDesktop);
navLinksDesktop.appendChild(navLinksDesktopNode);

// Dropdown Separator
navLinksLiServicesUl.appendChild(navLinkaLiSeparator);

// Web Hosting
navLinksLiServicesUl.appendChild(navLinksLiHost);
navLinksLiHost.appendChild(navLinksHost);
navLinksHost.appendChild(navLinksHostNode);

// Contact
navLinksUl.appendChild(navLinksLiContact);
navLinksLiContact.appendChild(navLinksContact);
navLinksContact.appendChild(navLinkContactNode);