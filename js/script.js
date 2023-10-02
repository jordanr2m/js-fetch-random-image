const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    // console.log(images); Confirmed an array of 100 objects is returned
    selectRandomImage(images);
};

// Randomly Select the Index of an Image (& display the image)
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    // console.log(randomIndex); Confirmed a random whole number between 0 and 99 (the index numbers) is selected //
    const randomImage = images[randomIndex]; // Grabbing a single random image from the array using randomIndex instead of specific index number
    // console.log(randomImage); Confirmed a random image is chosen from the array
    displayImage(randomImage);
};

// Display the Image
const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

// Add Click Event to button - Move API function call from top to here so that it only happens when the button is clicked
button.addEventListener("click", function () {
    getImage();
});