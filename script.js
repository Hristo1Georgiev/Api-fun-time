
const jokes = document.querySelector("#jokes");
const pictureJoke = document.querySelector("#pictureJoke")

showJoke = async () => {
    jokes.innerHTML = "";
    const result = await getRandomJoke();
    const joke = result.joke;
    const node = document.createTextNode(joke);
    return jokes.appendChild(node);
}

randomJoke.addEventListener("click", showJoke);


getPictureJoke = async () => {
    jokes.innerHTML = "";
    const result = await fetchPictureJoke();
    const newImg = document.createElement("img");
    newImg.src = "img src=https://icanhazdadjoke.com/j/R7UfaahVfFd.png"

    return jokes.appendChild(newImg);
}
pictureJoke.addEventListener("click", getPictureJoke);