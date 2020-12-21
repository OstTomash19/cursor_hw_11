async function getChineseLetter() {
    return new Promise((resolve) => {
        let letter = Date.now().toString().slice(-5);
        letter = String.fromCharCode(letter);
        resolve(letter);
    });
};

async function load(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

async function getRandomChinese(length) {
    let resultLine = '';
    while (length-- > 0) {
        await load(50);
        let tempLetter = await getChineseLetter();
        resultLine += tempLetter;
    }
    return resultLine;
}

getRandomChinese(5).then(result => console.log(result));