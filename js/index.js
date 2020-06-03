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
//other way showed in Support Hours Below commented out
//const navs = document.querySelectorAll("nav a")
//navs[0].textContent = siteContent["nav"]["nav-item-1"]
//navs[1].textContent = siteContent["nav"]["nav-item-2"]
//and so on for the rest


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
let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent.cta.h1;
ctaH1.style.fontFamily = 'Bangers';

let ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent.cta.button

// try to break the lines?
let roundImg = document.querySelector('#cta-img')
roundImg.src = siteContent.cta['img-src']
console.log(roundImg);


//Update Main Content, Top Content
let featuresHeading = document.querySelectorAll('.text-content h4')[0]
console.log(featuresHeading[0], "here")
featuresHeading.textContent = siteContent["main-content"]['features-h4']

let featuresText = document.querySelectorAll('.text-content p')[0]
featuresText.textContent = siteContent["main-content"]['features-content']

let aboutHeading = document.querySelectorAll('.text-content h4')[1]
aboutHeading.textContent = siteContent["main-content"]['about-h4']

let aboutText = document.querySelectorAll('.text-content p')[1]
aboutText.textContent = siteContent["main-content"]["about-content"]

let servicesHeading = document.querySelectorAll('.text-content h4')[2]
servicesHeading.textContent = siteContent["main-content"]['services-h4']

let servicesText = document.querySelectorAll('.text-content p')[2]
servicesText.textContent = siteContent["main-content"]["services-content"]

let productHeading = document.querySelectorAll('.text-content h4')[3]
productHeading.textContent = siteContent["main-content"]['product-h4']

let productText = document.querySelectorAll('.text-content p')[3]
productText.textContent = siteContent["main-content"]["product-content"]

let visionHeading = document.querySelectorAll('.text-content h4')[4]
visionHeading.textContent = siteContent["main-content"]['vision-h4']

let visionText = document.querySelectorAll('.text-content p')[4]
visionText.textContent = siteContent["main-content"]["vision-content"]

// Update Middle Image //have also tried with # instead of . why doesnt it work?
let middlePhoto = document.querySelector('#middle-img')
middlePhoto.src = siteContent["main-content"]["middle-img-src"]
// console.log(middlePhoto);


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

//appendChild and prepend
// ex: parentElement.appendChild(childElement)
// ex: parentElement.prepend(childElement)
let node = document.createElement('a')
let textnode = document.createTextNode("Blog")
node.appendChild(textnode)
document.getElementById

nav.appendChild(a)

//another way to do Main Content during Support Hours
// const textContentH4 = document.querySelectorAll('.text-content h4')
// textContentH4[0].textContent = siteContent["main-content"]["features-h4"]
// textContentH4[1].textContent = siteContent["main-content"]["about-h4"]
// textContentH4[2].textContent = siteContent["main-content"]["services-h4"]
// textContentH4[3].textContent = siteContent["main-content"]["product-h4"]
// textContentH4[4].textContent = siteContent["main-content"]["vision-h4"]


// const textContentP = document.querySelectorAll('.text-content p')
// textContentP[0].textContent = siteContent["main-content"]["features-content"]
// textContentP[1].textContent = siteContent["main-content"]["about-content"]
// textContentP[2].textContent = siteContent["main-content"]["services-content"]
// textContentP[3].textContent = siteContent["main-content"]["product-content"]
// textContentP[4].textContent = siteContent["main-content"]["vision-content"]
