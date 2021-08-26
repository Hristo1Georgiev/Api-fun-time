// Declare variables

const apiUrl = "https://icanhazdadjoke.com/";
const apiPic = "https://icanhazdadjoke.com/j/R7UfaahVfFd.png"

//Function to fetch date from API.
const getRandomJoke = async () => {
    const result = await fetch(apiUrl, {
        headers: {
            'accept': 'application/json',
            'User-Agent': 'https://github.com/Hristo1Georgiev',
        },
    });
    const randomJoke = await result.json();
    return randomJoke;
};


// Function to fetch the picture joke.
const fetchPictureJoke = async () => {
    const result = await fetch(apiPic, {
        mode: 'no-cors',
        headers: {
            'accept': 'application/json',
            'User-Agent': 'https://github.com/Hristo1Georgiev'
        }
    });

    const blob = await result.blob();
    const picture = URL.createObjectURL(blob);
    return picture;
};