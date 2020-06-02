const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

console.log(document.URL);
console.log(document.title);
console.log(document.body);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update nav items

let linkOne = document.getElementsByTagName('a')[0]
linkOne.textContent = siteContent.nav['nav-item-1']

let linkTwo = document.getElementsByTagName('a')[1]
linkTwo.textContent = siteContent.nav['nav-item-2']

let linkThree = document.getElementsByTagName('a')[2]
linkThree.textContent = siteContent.nav['nav-item-3']

let linkFour = document.getElementsByTagName('a')[3]
linkFour.textContent = siteContent.nav['nav-item-4']

let linkFive = document.getElementsByTagName('a')[4]
linkFive.textContent = siteContent.nav['nav-item-5']

let linkSix = document.getElementsByTagName('a')[5]
linkSix.textContent = siteContent.nav['nav-item-6']

// Update Dom Is Awesome and Img (aka cta section)
let ctaH1 = document.querySelector('.cta-text');
ctaH1.textContent = siteContent.cta.h1;
ctaH1.style.fontFamily = 'Bangers';
// try to break the lines?
let roundImg = document.querySelector('#cta-img')
roundImg.src = siteContent.cta['img-src']
console.log(roundImg);


//come back to BUTTON!!
// let ctaButton = document.getElementsByTagName('button')
// ctaButton.textContent = siteContent.cta-text.button;


//Update Main Content
// let featuresSection = document.querySelector('features-h4')
// featuresSection.textContent = siteContent.features.h4




//Update Contact Section
let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent.contact['contact-h4']

let contactItems = document.querySelectorAll('.contact p')
contactItems[0].textContent = siteContent.contact.address
contactItems[1].textContent = siteContent.contact.phone
contactItems[2].textContent = siteContent.contact.email

//Update footer
let cr = document.querySelector('footer')
cr.textContent = siteContent.footer.copyright



// make nav items green
let greenNav = document.querySelectorAll('a')
for(let i =0; i < greenNav.length; i++){
  greenNav[i].style.color = 'green';
}
