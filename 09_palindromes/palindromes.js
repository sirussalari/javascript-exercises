const palindromes = function (str) {
    const lower = str.toLowerCase();
    const strArr = Array.from(lower);
    let letters = [];
    let reverseWord = '';
    let forwardWord = '';
    for (let char of strArr) {
        const ord = char.charCodeAt();
        if (64 < ord  && ord < 123) {
            letters.push(char);
            forwardWord += char;
        }
    }
    const amtLetters = letters.length - 1;
    for (let i = amtLetters; i > -1; i--) {
        reverseWord += letters[i]
    }
    if (reverseWord === forwardWord) {
        return true;
    }
    else {
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
