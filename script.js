//let previousButton = document.getElementById('previous_service_button')
//let nextButton = document.getElementById('next_service_button')

// const IDsLength = 3;
const IDsLength = 2;
var actualService = 1;
let currentSlide = 1;
let lastSlide = 7;
let slideShowVar = document.getElementsByClassName('projects-pictures');
let path = '';
let extension = '';

function removeFade() {
    slideShowVar[0].classList.remove('fade');
}

function slideShow() {
    if(currentSlide == lastSlide) {
        currentSlide = 1;
        slideShowVar[0].src = path + currentSlide + extension;
        slideShowVar[0].classList.add('fade');
        setTimeout(removeFade,1500);
        setTimeout(slideShow,5000)
    } else {
        currentSlide++;
        slideShowVar[0].src = path + currentSlide + extension;
        slideShowVar[0].classList.add('fade');
        setTimeout(removeFade,1500);
        setTimeout(slideShow, 5000);
    }
}

function getServiceDOM(actualService) {
    return document.getElementById('service-'+actualService);
}

function nextButtonClick() {
    let service = getServiceDOM(actualService);
    service.classList.remove('enabled');
    service.classList.add('disabled');
    if(actualService == IDsLength){
        actualService = 1;
    } else {
        actualService += 1;
    }
    service = getServiceDOM(actualService);
    service.classList.remove('disabled');
    service.classList.add('enabled');
    if(actualService == 2) {
        path = 'files/vendas_';
        extension = '.png';
        slideShow()
    }
}

function previousButtonClick(){
    let service = getServiceDOM(actualService);
    service.classList.remove('enabled');
    service.classList.add('disabled');
    if(actualService == 1){
        actualService = IDsLength;
    } else {
        actualService -= 1;
    }
    service = getServiceDOM(actualService);
    service.classList.remove('disabled');
    service.classList.add('enabled');
    if(actualService == 2) {
        path = 'files/vendas_';
        extension = '.png';
        slideShow()
    }
}
