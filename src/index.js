console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

const imgDiv = document.getElementById('dog-image-container');
const breedUl = document.getElementById('dog-breeds')


fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => addImageElements(data.message))


fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => addBreedListItems(data.message));


function addImageElements(imgArr) {
    imgArr.forEach(addImage);
}

function addImage(imgUrl){
    const dogImg = document.createElement('img');
    dogImg.src = imgUrl;
    dogImg.classList.add('dog-image');
    imgDiv.append(dogImg);
}

function addBreedListItems(itemObject) {
    const itemKeys = Object.keys(itemObject);
    itemKeys.forEach((item) => addBreedListItems(item, itemObject[item]));
}

function addBreedItem(breed, subBreeds) {
    addBreedListItems(breed);
    subBreeds.forEach(sb => addBreed(`${sb} ${breed}`));
}