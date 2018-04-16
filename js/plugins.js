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
    navLinksDiv = document.createElement('div'),
    navLinksUl = document.createElement('ul'),
    navLinksLiHome = document.createElement('li'),
    navLinksHome = document.createElement('a'),
    navLinkHomeNode = document.createTextNode('Home'),
    navLinksLiAbout = document.createElement('li'),
    navLinksAbout = document.createElement('a'),
    navLinkAboutNode = document.createTextNode('About'),
    navLinksLiFaq = document.createElement('li'),
    navLinksFaq = document.createElement('a'),
    navLinkFaqNode = document.createTextNode('FAQ'),
    navLinksLiServices = document.createElement('li'),
    navLinksServices = document.createElement('a'),
    navLinksServicesNode = document.createTextNode('Services'),
    navLinksLiServicesUl = document.createElement('ul'),
    navLinksLiProg = document.createElement('li'),
    navLinksProg = document.createElement('a'),
    navLinksProgNode = document.createTextNode('Machine Programing'),
    navLinksLiWeb = document.createElement('li'),
    navLinksWeb = document.createElement('a'),
    navLinksWebNode = document.createTextNode('Web Developing'),
    navLinksLiDesktop = document.createElement('li'),
    navLinksDesktop = document.createElement('a'),
    navLinksDesktopNode = document.createTextNode('Desktop Software'),
    navLinksLiHost = document.createElement('li'),
    navLinksHost = document.createElement('a'),
    navLinksHostNode = document.createTextNode('Web Hosting'),
    navLinksLiContact = document.createElement('li'),
    navLinksContact = document.createElement('a'),
    navLinkContactNode = document.createTextNode('Contact');
    
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

navLinksDiv.setAttribute('class', 'collapse navbar-collapse');
navLinksDiv.setAttribute('id', 'mobile-navbar');

navLinksUl.setAttribute('class', 'nav navbar-nav navbar-right');
navLinksHome.setAttribute('href', 'index.html');
navLinksAbout.setAttribute('href', 'about.html');
navLinksFaq.setAttribute('href', 'faq.html');
navLinksContact.setAttribute('href', 'contact.html');

navLinksLiServices.setAttribute('class', 'dropdown');

navLinksServices.setAttribute('href', '#');
navLinksServices.setAttribute('class', 'dropdown-toggle');
navLinksServices.setAttribute('data-toggle', 'dropdown');
navLinksServices.setAttribute('role', 'button');
navLinksServices.setAttribute('aria-haspopup', 'true');
navLinksServices.setAttribute('aria-expanded', 'false');

navLinksLiServicesUl.setAttribute('class', 'dropdown-menu');

navLinksProg.setAttribute('href', 'proq.html');
navLinksWeb.setAttribute('href', 'web.html');
navLinksDesktop.setAttribute('href', 'desktop.html');
navLinksHost.setAttribute('href', 'host.html');

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

navLinksUl.appendChild(navLinksLiHome);
navLinksUl.appendChild(navLinksLiAbout);
navLinksUl.appendChild(navLinksLiFaq);
navLinksUl.appendChild(navLinksLiServices);
navLinksUl.appendChild(navLinksLiContact);

navLinksLiHome.appendChild(navLinksHome);
navLinksHome.appendChild(navLinkHomeNode);

navLinksLiAbout.appendChild(navLinksAbout);
navLinksAbout.appendChild(navLinkAboutNode);

navLinksLiFaq.appendChild(navLinksFaq);
navLinksFaq.appendChild(navLinkFaqNode);

navLinksLiServices.appendChild(navLinksServices);
navLinksServices.appendChild(navLinksServicesNode);
navLinksLiServices.appendChild(navLinksLiServicesUl);

navLinksLiServicesUl.appendChild(navLinksLiProg);
navLinksLiProg.appendChild(navLinksProg);
navLinksProg.appendChild(navLinksProgNode);

navLinksLiServicesUl.appendChild(navLinksLiWeb);
navLinksLiWeb.appendChild(navLinksWeb);
navLinksWeb.appendChild(navLinksWebNode);

navLinksLiServicesUl.appendChild(navLinksLiDesktop);
navLinksLiDesktop.appendChild(navLinksDesktop);
navLinksDesktop.appendChild(navLinksDesktopNode);

navLinksLiServicesUl.appendChild(navLinksLiHost);
navLinksLiHost.appendChild(navLinksHost);
navLinksHost.appendChild(navLinksHostNode);

navLinksLiContact.appendChild(navLinksContact);
navLinksContact.appendChild(navLinkContactNode);

















