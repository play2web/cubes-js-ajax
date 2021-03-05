
var dogBreeds = [
    'affenpinscher',
    'african',
    'airedale',
    'akita',
    'appenzeller',
    'basenji',
];

for (i = 0; i < dogBreeds.length; i++) {
    document.getElementById('currentDog').innerHTML += '<option value="' + dogBreeds[i] + '">' + dogBreeds[i] + '</option>';
}

var currentDogBreed = document.getElementById('currentDog').value;

function addSelectEvent() {
    var select = document.getElementById('currentDog')
    select.addEventListener('change', function (e) {
        curentDogBreed();
    }, false);
}

function curentDogBreed() {
    currentDogBreed = document.getElementById('currentDog').value;
}

function setCurrentDogImage(imageUrl) {
    var image = document.getElementById('dogImage');
    image.setAttribute('src', imageUrl);
}

function getDogBreedImages() {
    setInterval(function () {
        getCurrentDogBreedRandomImage(
            setCurrentDogImage,
            currentDogBreed
        );
        return false;
    }, 3000);
}

function getCurrentDogBreedRandomImage(whatFunction, currentBreed) {
    var currentApiUrl = 'https://dog.ceo/api/breed/' + currentBreed + '/images/random';
    var req = new XMLHttpRequest();
    req.open('GET', currentApiUrl);
    req.onload = function () {
        if (req.status === 200 || req.status === 200) {
            var imageUrl = JSON.parse(req.responseText).message;
            whatFunction(imageUrl);
        }
    };
    req.send();
}

addSelectEvent();
getDogBreedImages();