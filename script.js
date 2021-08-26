// Get Elements
const jokes = document.querySelector("#jokes");
const pictureJoke = document.querySelector("#pictureJoke")

//function to add the joke to the dom.
showJoke = async () => {
    jokes.innerHTML = "";
    const result = await getRandomJoke();
    const joke = result.joke;
    const node = document.createTextNode(joke);
    return jokes.appendChild(node);
}

randomJoke.addEventListener("click", showJoke);

/* 
Function to add the picture joke to the DOM. 
I did not manage to get the picture joke to the DOM. 
I spoke with Ben about it. : Dit is alleen wel buiten 
de scope van de opdracht,
dus ik zou het houden bij een fetch van text.
 */
getPictureJoke = async () => {
    jokes.innerHTML = "";
    const result = await fetchPictureJoke();
    console.log(result);
    const newImg = document.createElement("img");
    newImg.src = result
    return jokes.appendChild(newImg);
}
pictureJoke.addEventListener("click", getPictureJoke);