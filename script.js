/* 



*/
let upArrowEl = document.getElementById('upArrow');

let downArrowEl = document.getElementById('downArrow');


let imagesList = ['img/01.webp' , 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp' ];

let imageEl = document.getElementById('image');

let index = 0

let thumbnailsEl = document.getElementById('thumbnails')

for (let i=0; i<imagesList.length; i++){

    let newEl = document.createElement('img');
    newEl.src=(imagesList[i]);
    newEl.classList.add('thumbStyle');
    thumbnailsEl.append(newEl)
}


let allImages = document.querySelectorAll('.thumbStyle')

imageEl.src = (imagesList[index]);

allImages[index].classList.add('active')

downArrowEl.addEventListener('click', function(){
    index++;

    if (index <= imagesList.length - 1){

    
        imageEl.src = (imagesList.at(index));

        
        allImages[index].classList.add('active')

        allImages[index - 1].classList.remove('active')
        



    } else {
        index = 0;

        imageEl.src = (imagesList.at(index));

        allImages[index].classList.add('active')

        allImages[allImages.length - 1].classList.remove('active')

        

    }

})

upArrowEl.addEventListener('click', function(){
    
    index--;

    if (index < 0){
        
        index = allImages.length - 1

        imageEl.src = (imagesList.at(index));

        allImages[index].classList.add('active')

        allImages[allImages.length -1 - index].classList.remove('active')

        

    } else {
        

        imageEl.src = (imagesList.at(index));

        allImages[index].classList.add('active')

        allImages[index + 1].classList.remove('active')

        

    }

})

