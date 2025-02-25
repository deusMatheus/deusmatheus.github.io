//let previousButton = document.getElementById('previous_service_button')
//let nextButton = document.getElementById('next_service_button')

const IDsLength = 3;
var actualService = 1;

function getServiceDOM(actualService) {
    return document.getElementById('service-'+actualService);
}

function nextButtonClick() {
    let service = getServiceDOM(actualService)
    service.classList.remove('enabled')
    service.classList.add('disabled')
    if(actualService == IDsLength){
        actualService = 1;
    } else {
        actualService += 1;
    }
    service = getServiceDOM(actualService)
    service.classList.remove('disabled')
    service.classList.add('enabled')
}

function previousButtonClick(){
    let service = getServiceDOM(actualService)
    service.classList.remove('enabled')
    service.classList.add('disabled')
    if(actualService == 1){
        actualService = IDsLength;
    } else {
        actualService -= 1;
    }
    service = getServiceDOM(actualService)
    service.classList.remove('disabled')
    service.classList.add('enabled')
}

/*nextButton.onclick = function(){
};

previousButton.onclick = function(){
    console.log('Hah! Previous!');
}*/