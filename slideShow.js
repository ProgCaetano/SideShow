'use strict';

const images = [
    {'id': '1', 'url':'./img/star1.jpg'},
    {'id': '2', 'url':'./img/star2.jpg'},
    {'id': '3', 'url':'./img/star3.jpg'},
    {'id': '4', 'url':'./img/star4.jpg'},
]


const container = document.querySelector('#container-item')

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML  += `
            <div class ="item">
                <img src='${image.url}'
            </div>
        ` 
    });
}


loadImages(images, container);