//let previousButton = document.getElementById('previous_service_button')
//let nextButton = document.getElementById('next_service_button')

const IDsLength = 4;
const plotsLength = 2;
var actualService = 1;
var actualPlot = 1;
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
    if(actualService != 2 && actualService != 3){   
        clearTimeout(slideShow);
    }
    else {
        // console.log('Current Slide');
        // console.log(currentSlide);
        if(currentSlide == lastSlide) {
            currentSlide = 1;
            // console.log(path + currentSlide + extension);
            slideShowVar[0].src = path + currentSlide + extension;
            slideShowVar[0].classList.add('fade');
            // setTimeout(removeFade,1500);
            setTimeout(slideShow,5000);
        } else {
            currentSlide++;
            // console.log(path + currentSlide + extension);
            slideShowVar[0].src = path + currentSlide + extension;
            slideShowVar[0].classList.add('fade');
            // setTimeout(removeFade,1500);
            setTimeout(slideShow, 5000);
        }    
    }
}

function getServiceDOM(actualService) {
    if(document.querySelector('body').dataset.theme == 'enus'){
        return document.getElementById('en-service-'+actualService);
    }
    return document.getElementById('service-'+actualService);
}

function getPlotDOM(actualPlot) {
    if(document.querySelector('body').dataset.theme == 'enus'){
        return document.getElementById('en-plot-'+actualPlot);
    }
    return document.getElementById('plot-'+actualPlot);
}

function nextButtonClick() {
    let service = getServiceDOM(actualService);
    service.classList.remove('fade');
    service.classList.remove('enabled');
    service.classList.add('disabled');
    if(actualService == IDsLength){
        actualService = 1;
    } else {
        actualService += 1;
    }
    service = getServiceDOM(actualService);
    service.classList.add('fade');
    service.classList.remove('disabled');
    service.classList.add('enabled');
    if(actualService == 2) {
        if(document.querySelector('body').dataset.theme == 'ptbr'){
            slideShowVar = document.getElementsByClassName('projects-pictures');
        }
        else if(document.querySelector('body').dataset.theme == 'enus'){
            slideShowVar = document.getElementsByClassName('en-projects-pictures');
        }
        path = 'files/vendas_';
        extension = '.png';
        currentSlide = 1;
        lastSlide = 7;
        slideShow()
    }
    if(actualService == 3) {
        if(document.querySelector('body').dataset.theme == 'ptbr'){
            slideShowVar = document.getElementsByClassName('projects-pictures-gestao');
        }
        else if(document.querySelector('body').dataset.theme == 'enus'){
            slideShowVar = document.getElementsByClassName('en-projects-pictures-gestao');
        }
        path = 'files/gestao_pedidos_';
        extension = '.png';
        currentSlide = 1;
        lastSlide = 10;
        slideShow()
    }
}

function previousButtonClick(){
    let service = getServiceDOM(actualService);
    service.classList.remove('fade');
    service.classList.remove('enabled');
    service.classList.add('disabled');
    if(actualService == 1){
        actualService = IDsLength;
    } else {
        actualService -= 1;
    }
    service = getServiceDOM(actualService);
    service.classList.add('fade');
    service.classList.remove('disabled');
    service.classList.add('enabled');
    if(actualService == 2) {
        if(document.querySelector('body').dataset.theme == 'ptbr'){
            slideShowVar = document.getElementsByClassName('projects-pictures');
        }
        else if(document.querySelector('body').dataset.theme == 'enus'){
            slideShowVar = document.getElementsByClassName('en-projects-pictures');
        }
        path = 'files/vendas_';
        extension = '.png';
        currentSlide = 1;
        lastSlide = 7;
        slideShow()
    }
    if(actualService == 3) {
        if(document.querySelector('body').dataset.theme == 'ptbr'){
            slideShowVar = document.getElementsByClassName('projects-pictures-gestao');
        }
        else if(document.querySelector('body').dataset.theme == 'enus'){
            slideShowVar = document.getElementsByClassName('en-projects-pictures-gestao');
        }
        path = 'files/gestao_pedidos_';
        extension = '.png';
        currentSlide = 1;
        lastSlide = 10;
        slideShow()
    }

    /*if(actualService == 2) {
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
    }*/
}

function nextPlotButtonClick(){
    plot = getPlotDOM(actualPlot);
    plot.classList.remove('fade')
    plot.classList.add('disabled');
    if(actualPlot == plotsLength){
        actualPlot = 1;
    }
    else{
        actualPlot += 1;
    }
    plot = getPlotDOM(actualPlot);
    plot.classList.add('fade');
    plot.classList.remove('disabled');
}

function previousPlotButtonClick(){
    plot = getPlotDOM(actualPlot);
    plot.classList.remove('fade')
    plot.classList.add('disabled');
    if(actualPlot == 1){
        actualPlot = plotsLength;
    }
    else{
        actualPlot -= 1;
    }
    plot = getPlotDOM(actualPlot);
    plot.classList.add('fade');
    plot.classList.remove('disabled');
}

function setPTBR(){
    actualService = 1;
    currentSlide = 1;
    actualPlot = 1;
    const ptbr = document.getElementsByClassName('ptbr')
    const enus = document.getElementsByClassName('enus')
    document.querySelector('body').dataset.theme = 'ptbr';
    for (i=0; i < ptbr.length; i++){
        ptbr[i].classList.remove('disabled');
    }

    for (i=0; i < enus.length; i++){
        enus[i].classList.add('disabled');
    }
}

function setENUS(){
    actualService = 1;
    currentSlide = 1;
    actualPlot = 1;
    const ptbr = document.getElementsByClassName('ptbr')
    const enus = document.getElementsByClassName('enus')
    document.querySelector('body').dataset.theme = 'enus';
    for (i=0; i < ptbr.length; i++){
        ptbr[i].classList.add('disabled');
    }

    for (i=0; i < enus.length; i++){
        enus[i].classList.remove('disabled');
    }
}