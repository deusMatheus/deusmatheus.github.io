//let previousButton = document.getElementById('previous_service_button')
//let nextButton = document.getElementById('next_service_button')

const IDsLength = 4;
var actualService = 1;
var currentSlide = 0;
var lastSlide = 0;
let slideShowVar = ''
let path = '';
let extension = '';

// let sources = '' -> Criar uma lista com as imagens anexadas no google drive. Realizar solicitações para cada imagem e só carregar efetivamente depois que a primeira for carregada. Enquanto isso, colocar timeout para mudar para a próxima imagem. 

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
    if(document.querySelector('body').dataset.theme == 'enus'){
        return document.getElementById('en-service-'+actualService);
    }
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
        slideShowVar = document.getElementsByClassName('projects-pictures');
        path = 'files/vendas_';
        extension = '.png';
        currentSlide = 1;
        lastSlide = 7;
        slideShow()
    }
    if(actualService == 3) {
        slideShowVar = document.getElementsByClassName('projects-pictures-gestao');
        path = 'files/gestao_pedidos_';
        extension = '.png';
        currentSlide = 1;
        lastSlide = 10;
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
        slideShowVar = document.getElementsByClassName('projects-pictures');
        path = 'files/vendas_';
        extension = '.png';
        currentSlide = 1;
        lastSlide = 7;
        slideShow()
    }
    if(actualService == 3) {
        slideShowVar = document.getElementsByClassName('projects-pictures-gestao');
        path = 'files/gestao_pedidos_';
        extension = '.png';
        currentSlide = 1;
        lastSlide = 10;
        slideShow()
    }
}


function setPTBR(){
    const ptbr = document.getElementsByClassName('ptbr')
    const enus = document.getElementsByClassName('enus')
    document.querySelector('body').dataset.theme = 'ptbr';
    actualService = 1;    
    for (i=0; i < ptbr.length; i++){
        ptbr[i].classList.remove('disabled');
    }

    for (i=0; i < enus.length; i++){
        enus[i].classList.add('disabled');
    }
}

function setENUS(){
    const ptbr = document.getElementsByClassName('ptbr')
    const enus = document.getElementsByClassName('enus')
    document.querySelector('body').dataset.theme = 'enus';
    actualService = 1;
    for (i=0; i < ptbr.length; i++){
        ptbr[i].classList.add('disabled');
    }

    for (i=0; i < enus.length; i++){
        enus[i].classList.remove('disabled');
    }
}