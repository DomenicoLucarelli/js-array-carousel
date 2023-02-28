/* 



*/
let upArrowEl = document.getElementById('upArrow');

let downArrowEl = document.getElementById('downArrow');


let imagesList = ['img/01.webp' , 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp' ];

let imageEl = document.getElementById('image');

let index = 0

imageEl.src = (imagesList[index]);

downArrowEl.addEventListener('click', function(){

    if (index < imagesList.length - 1){

        index++;
    
        imageEl.src = (imagesList.at(index));

    } else {
        index = 0;

        imageEl.src = (imagesList.at(index));

    }

})

upArrowEl.addEventListener('click', function(){

    if (index > -imagesList.length ){

        index--;
    
        imageEl.src = (imagesList.at(index));

    } else {
        index = -1;

        imageEl.src = (imagesList.at(index));

    }

})



