

const apiUrl = "https://icanhazdadjoke.com/";
const apiPic = "https://icanhazdadjoke.com/j/R7UfaahVfFd.png"

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


const fetchPictureJoke = async () => {
    const result = await fetch(apiPic, {
        mode: 'no-cors',
        headers: {
            'accept': 'application/json',
            'User-Agent': 'https://github.com/Hristo1Georgiev'

        },
    });
    const picture = await result.json();
    return picture;
};


