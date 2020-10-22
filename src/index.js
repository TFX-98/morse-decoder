const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decode = '';
    let wordArr = expr.match(/.{1,10}/g);
    wordArr.forEach((word) => {
        let wordDecode = '';
        if (word != '**********') {
            let letterArr = word.split('');
            let letter = '';
            for (let i = 0; i <= letterArr.length; i++) {
                if (letterArr[i] == '1' && letterArr[i + 1] == '0') {
                    letter += '.';
                    i++;
                } else if (letterArr[i] == '1' && letterArr[i + 1] == '1') {
                    letter += '-';
                    i++;
                }
            }
            decode += MORSE_TABLE[letter];
        } else {
            decode += ' '
        }
    });
    return decode;
}

module.exports = {
    decode
}
