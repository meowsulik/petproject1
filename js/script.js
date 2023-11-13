// /////////////////////////////////////////////////////////////////////// HEADER
const outputHeaderNav = document.querySelector('.header__nav')

const headerData = ['Main', 'Contacts', 'Custom section', 'Favorite section']



headerData.forEach(el => {
    const headerNavDiv = document.createElement('div')

    const headerNavDivItem = document.createElement('a')

    
    headerNavDivItem.classList = 'headerNavDivItem'
    headerNavDiv.classList = 'headerNavDiv'

    headerNavDivItem.textContent = el

    headerNavDiv.append(headerNavDivItem)
    outputHeaderNav.append(headerNavDiv)
})




// /////////////////////////////////////////////////////////////////////// HEADER

// /////////////////////////////////////////////////////////////////////// MAIN


const outputMainBox = document.querySelector('.main__box')

const mainBoxMini1 = document.createElement('div')
const mainBoxMini1wrap1 = document.createElement('div')
const mainBoxMini1wrap1h1 = document.createElement('h1')
const mainBoxMini1wrap1p = document.createElement('p')


const mainBoxMini2 = document.createElement('div')
const mainBoxMini2p = document.createElement('p')
const mainBoxMini2a = document.createElement('a')
const mainBoxMini3 = document.createElement('div')
const mainBoxMini3a = document.createElement('a')


mainBoxMini1wrap1h1.textContent = ('Riptide')
mainBoxMini1wrap1p.textContent = ('The Internet was created to develop')



mainBoxMini2p.textContent = ('The Internet is free and accessible to everyone, so don’t waste your time')
mainBoxMini2a.text = ('Learn more...')
mainBoxMini3a.text = ('"Riptide GOLD" We will help you with everythink')



mainBoxMini1.classList = 'mainBoxMini1'
mainBoxMini1wrap1.classList = 'mainBoxMini1wrap1'
mainBoxMini1wrap1h1.classList = 'mainBoxMini1wrap1h1'
mainBoxMini1wrap1p.classList = 'mainBoxMini1wrap1p'



mainBoxMini2.classList = 'mainBoxMini2'
mainBoxMini2p.classList = 'mainBoxMini2p'
mainBoxMini2a.classList = 'mainBoxMini2a'
mainBoxMini3.classList = 'mainBoxMini3'
mainBoxMini3a.classList = 'mainBoxMini3a'


mainBoxMini1.append(mainBoxMini1wrap1)
mainBoxMini1wrap1.append(mainBoxMini1wrap1h1,mainBoxMini1wrap1p)
mainBoxMini2.append(mainBoxMini2p,mainBoxMini2a)
mainBoxMini3.append(mainBoxMini3a)
outputMainBox.append(mainBoxMini1,mainBoxMini2,mainBoxMini3)


// /////////////////////////////////////////////////////////////////////// MAIN

// /////////////////////////////////////////////////////////////////////// SWIPER1




const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



// /////////////////////////////////////////////////////////////////////// SWIPER1

// /////////////////////////////////////////////////////////////////////// SWIPER2

const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




// /////////////////////////////////////////////////////////////////////// SWIPER2

// /////////////////////////////////////////////////////////////////////// CATEGORIES





const categoriesData = [
    {
    name : 'Gods of Greece',
    img : 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category : 'art'
    },
    {
    name : 'canvas',
    img : 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category : 'art'
    },
    {
    name : 'bubbles on the water',
    img : 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category : 'abstract'
    },
    {
    name : 'void from hell',
    img : 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category : 'abstract'
    },
    {
    name : 'workplace',
    img : 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category : 'minimal'
    },
    {
    name : 'lamp',
    img : 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category : 'minimal'
    },
]

const outputCategories = document.querySelector('.categories__wrap')
let category

const categoriesRender = (data) => {
    outputCategories.innerHTML = ''
    data.forEach(el => {
        const categoriesWrap = document.createElement('div')
        const categoriesImg = document.createElement('img')
        const categoriesWrapMiniwrap = document.createElement('div')
        const categoriesName = document.createElement('p')
        const categoriesCategory = document.createElement('p')
        const categoriesInfoButton = document.createElement('button')
        const categoriesCategoryWrap = document.createElement('div')

        categoriesWrap.classList = 'categoriesWrap'
        categoriesImg.classList = 'categoriesImg'
        categoriesWrapMiniwrap.classList = 'categoriesWrapMiniwrap'
        categoriesName.classList = 'categoriesName'
        categoriesCategory.classList = 'categoriesCategory'
        categoriesInfoButton.classList = 'categoriesInfoButton'
        categoriesCategoryWrap.classList = 'categoriesCategoryWrap'

        categoriesImg.src = el.img
        categoriesName.textContent = el.name
        categoriesInfoButton.textContent = 'info'

        categoriesInfoButton.addEventListener('click', () => {
            const isVisible = categoriesInfoButton.classList.toggle('info')
            if (isVisible) {
                categoriesCategory.textContent = `Category: ${el.category}`
            } else {
                categoriesCategory.textContent = ''
            }
        })

        categoriesCategoryWrap.append(categoriesCategory)
        categoriesWrapMiniwrap.append(categoriesName,categoriesInfoButton)
        categoriesWrap.append(categoriesImg,categoriesWrapMiniwrap,categoriesCategoryWrap)
        outputCategories.append(categoriesWrap)
    })
}

categoriesRender(categoriesData)


// /////////////////////////////////////////////////////////////////////// CATEGORIES

// /////////////////////////////////////////////////////////////////////// ACCORDION
const accordionData = [
    {
        title: 'Pinterest:',
        text: `Pinterest is an American image sharing and social media service designed to enable saving and discovery of information (specifically "ideas") like recipes, home, style, motivation, and inspiration on the internet using images and, on a smaller scale, animated GIFs and videos, in the form of pinboards. The site was created by Ben Silbermann, Paul Sciarra, and Evan Sharp and it is operated by now Pinterest, Inc., and headquartered in San Francisco.`
    },
    {
        title: 'Unsplash:',
        text: `Unsplash is a website dedicated to proprietary stock photography. Since 2021, it has been owned by Getty Images. The website claims over 330,000 contributing photographers and generates more than 13 billion photo impressions per month on their growing library of over 5 million photos (as of April 2023). Unsplash has been cited as one of the world's leading photography websites by Forbes, Design Hub, CNET, Medium and The Next Web.`,
    },
    {
        title: 'Pexels:',
        text: `Pexels is a provider of stock photography and stock footage. It was founded in Germany in 2014 and maintains a library with over 3.2 million free stock photos and videos..`
    },
    {
        title: 'Freepik: ',
        text: `Freepik is an image bank website. Content produced and distributed by the online platform includes photographs, illustrations and vector images. The platform distributes its content under a freemium model, which means that users can access much of the content for free, but it is also possible to purchase a subscription with advantages such as access to more exclusive resources, the option of not attributing the content used or a higher number of daily downloads.`
    },

]

const outputAccordion = document.querySelector('.accordion__wrap')

accordionData.forEach(el => {
    const wrap = document.createElement('div')
    const accordionName = document.createElement('div')
    const accordionTitle = document.createElement('p')
    const plus = document.createElement('img')
    const accordionContent = document.createElement('div')
    const accordionContentInfo = document.createElement('p')


    wrap.classList = 'accordion__wrap'
    accordionName.classList = 'accordion__name'
    plus.classList = 'plus'
    accordionContent.classList = 'accordion__content'


    accordionTitle.textContent = el.title
    plus.src = './image/icon/wave.png'
    accordionContentInfo.textContent = el.text

    wrap.addEventListener('click', ()=> {
        wrap.classList.toggle('accordion__active')
    })


    accordionContent.append(accordionContentInfo)
    accordionName.append(accordionTitle, plus)
    wrap.append(accordionName, accordionContent)
    outputAccordion.append(wrap)
})


// /////////////////////////////////////////////////////////////////////// ACCORDION


// /////////////////////////////////////////////////////////////////////// CUSTOM


const outputCustomWrap = document.querySelector('.custom__wrap')



function handleScroll() {

    const sectionRect = outputCustomWrap.getBoundingClientRect();
    const windowHeight = window.innerHeight;


    if (sectionRect.top < windowHeight && sectionRect.bottom >= 0) {
    
    outputCustomWrap.classList.add('visible');
    } else {
    
    outputCustomWrap.classList.remove('visible');
    }
}


window.addEventListener('scroll', handleScroll);


handleScroll();

const customMainWrap = document.createElement('div')

const customBlock1 = document.createElement('div')
const customBlock1wrapP1 = document.createElement('div')
const customBlock1wrapPItem1 = document.createElement('p')
const customBlock1wrapImg1 = document.createElement('div')
const customBlock1wrapImgItem1 = document.createElement('img')

const customBlock2 = document.createElement('div')
const customBlock2wrapP2 = document.createElement('div')
const customBlock2wrapPItem2 = document.createElement('p')
const customBlock2wrapImg2 = document.createElement('div')
const customBlock2wrapImgItem2 = document.createElement('img')

customMainWrap.classList = 'customMainWrap'

customBlock1.classList = 'customBlock1'
customBlock1wrapP1.classList = 'customBlock1wrapP1'
customBlock1wrapPItem1.classList = 'customBlock1wrapPItem1'
customBlock1wrapImg1.classList = 'customBlock1wrapImg1'
customBlock1wrapImgItem1.classList = 'customBlock1wrapImgItem1'

customBlock2.classList = 'customBlock2'
customBlock2wrapP2.classList = 'customBlock2wrapP2'
customBlock2wrapPItem2.classList = 'customBlock2wrapPItem2'
customBlock2wrapImg2.classList = 'customBlock2wrapImg2'
customBlock2wrapImgItem2.classList = 'customBlock2wrapImgItem2'

customBlock1wrapPItem1.textContent = 'Any pictures for any projects! Here you will find everything you need for your inspiration!'
customBlock1wrapImgItem1.src = 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

customBlock2wrapPItem2.textContent = 'Write to us in support and we will try to help you with your creativity. All in your hands!'
customBlock2wrapImgItem2.src = 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'



customBlock1wrapImg1.append(customBlock1wrapImgItem1)
customBlock1wrapP1.append(customBlock1wrapPItem1)
customBlock1.append(customBlock1wrapImg1,customBlock1wrapP1)

customBlock2wrapImg2.append(customBlock2wrapImgItem2)
customBlock2wrapP2.append(customBlock2wrapPItem2)
customBlock2.append(customBlock2wrapP2,customBlock2wrapImg2)

customMainWrap.append(customBlock1,customBlock2)
outputCustomWrap.append(customMainWrap)



// /////////////////////////////////////////////////////////////////////// BASKET


const basketData = [
    {name : 'grapefruit',
    img : 'https://images.unsplash.com/photo-1699117900546-bf2e36687e9d?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price : '50$'},
    {name : 'pink flower',
    img : 'https://images.unsplash.com/photo-1682101517859-7162f8372365?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price : '50$'},
    {name : 'A green car',
    img : 'https://images.unsplash.com/photo-1699355746758-9f9572a3e40e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price : '70$'},
    {name : 'A small house',
    img : 'https://images.unsplash.com/photo-1699356426894-6cf94459b827?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price : '65$'},
    {name : 'a red brick building',
    img : 'https://images.unsplash.com/photo-1699354510909-6e5c4bbf2b60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price : '85$'},
    {name : 'A person is riding a bike',
    img : 'https://images.unsplash.com/photo-1699469809368-4107cb7e9cbf?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price : '55$'},
    {name : 'A group of antelope',
    img : 'https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price : '100$'},
    {name : 'Nike Air Force 1',
    img : 'https://images.unsplash.com/photo-1699594165148-0eb85ec79666?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price : '75$'},
    {name : 'Touching a tree in the misty Fanal forest.',
    img : 'https://images.unsplash.com/photo-1699393393003-e9fbf1596d88?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price : '60$'},
    // {name : 'squirrel',
    // img : 'https://images.unsplash.com/photo-1699111259952-47e5c8e8727f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // price : '40$'},
]


const outputBasket = document.querySelector('.basket__wrap');

const basketWrap1 = document.createElement('div');
const basketWrap2 = document.createElement('div');

basketWrap1.classList = 'basketWrap1';
basketWrap2.classList = 'basketWrap2';



basketData.forEach(el => {
    const basketItemWrap = document.createElement('div');
    const basketItemName = document.createElement('p');
    const basketitemImg = document.createElement('img');
    const basketItemPrice = document.createElement('p');

    basketItemWrap.classList = 'basketItemWrap';
    basketItemName.classList = 'basketItemName';
    basketitemImg.classList = 'basketitemImg';
    basketItemPrice.classList = 'basketItemPrice';

    basketItemName.textContent = el.name;
    basketitemImg.src = el.img;
    basketItemPrice.textContent = `Price: ${el.price}`;

    basketItemWrap.append(basketItemName, basketitemImg, basketItemPrice);

    
    basketItemWrap.addEventListener('click', () => {
        
        if (basketWrap1.contains(basketItemWrap)) {
        basketWrap2.append(basketItemWrap);
        } else if (basketWrap2.contains(basketItemWrap)) {
        basketWrap1.append(basketItemWrap);
        }
    });

    basketWrap1.append(basketItemWrap);
});

outputBasket.append(basketWrap1, basketWrap2);


// /////////////////////////////////////////////////////////////////////// BASKET


// /////////////////////////////////////////////////////////////////////// CONTACTS

const outputContacts = document.querySelector('.contacts__wrap');

const contactsBox1 = document.createElement('div');
const contactsMiniBoxMap = document.createElement('div');

const contactsBox2 = document.createElement('div');

const contactsMiniBox = document.createElement('div');
const contactsMiniBoxInput1 = document.createElement('input');
const contactsMiniBoxInput2 = document.createElement('input');
const contactsMiniBoxTextarea = document.createElement('textarea');
const contactsMiniBoxButton = document.createElement('button');

contactsBox1.classList = 'contactsBox1';
contactsBox2.classList = 'contactsBox2';

contactsMiniBoxMap.id = 'map';
contactsMiniBoxMap.style.height = '400px';

contactsMiniBox.classList = 'contactsMiniBox';
contactsMiniBoxInput1.classList = 'contactsMiniBoxInput1';
contactsMiniBoxInput2.classList = 'contactsMiniBoxInput2';
contactsMiniBoxTextarea.classList = 'contactsMiniBoxTextarea';
contactsMiniBoxButton.classList = 'contactsMiniBoxButton';

contactsMiniBoxButton.textContent = 'SEND';
contactsMiniBoxInput1.placeholder = 'name';
contactsMiniBoxInput2.placeholder = 'mail';
contactsMiniBoxTextarea.placeholder = 'write to us and we will contact you';

contactsMiniBox.append(contactsMiniBoxInput1, contactsMiniBoxInput2, contactsMiniBoxTextarea, contactsMiniBoxButton);
contactsBox2.append(contactsMiniBox);
contactsBox1.append(contactsMiniBoxMap);
outputContacts.append(contactsBox1, contactsBox2);


function initMap() {
    const center = { lat: 40.7128, lng: -74.006 };
    const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: center,
});


    const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: 'Our Location',
    });
}


// /////////////////////////////////////////////////////////////////////// CONTACTS

// /////////////////////////////////////////////////////////////////////// FOOTER


const outputFooter = document.querySelector('.footer__wrap')


const footerWrap1 = document.createElement('div')
const footerName = document.createElement('p')

const footerWrap2 = document.createElement('div')
const footerImg1 = document.createElement('img')
const footerImg2 = document.createElement('img')
const footerImg3 = document.createElement('img')

footerWrap1.classList = 'footerWrap1'
footerName.classList = 'footerName'

footerWrap2.classList = 'footerWrap2'
footerImg1.classList = 'footerImg1'
footerImg2.classList = 'footerImg2'
footerImg3.classList = 'footerImg3'

footerName.textContent = '(c) Riptide'

footerImg1.src = '/image/icon/instagram.svg'
footerImg2.src = '/image/icon/facebook.svg'
footerImg3.src = '/image/icon/telegram.svg'


footerWrap1.append(footerName)
footerWrap2.append(footerImg1,footerImg2,footerImg3)
outputFooter.append(footerWrap1,footerWrap2)





// /////////////////////////////////////////////////////////////////////// FOOTER



