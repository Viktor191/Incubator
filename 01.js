const printReversedWordBySymbol = (name) => {
    let i = name.length - 1;
    while (i >= 0) {
        console.log(name[i]);
        i = i - 1;
    }
};
console.log(printReversedWordBySymbol('12345'))

//-------------------------------------
const countChars = (str, char) => {
    let i = 0;
    let count = 0;
    while (i < str.length) {
        if (str[i].toLowerCase() === char.toLowerCase()) {
            // Считаем только подходящие символы
            count = count + 1;
        }
        // Счетчик увеличивается в любом случае
        i = i + 1;
    }

    return count;
};
console.log(countChars('FEar cuts deeper than swords.', 'E'))
//--------------------------------------------------------

const reverse = (str, a) => {
    let i = 0;
    // Нейтральный элемент для строк это пустая строка
    let result = '';
    while (i < str.length) {
        if(str[i] === a ) {
            i = i + 1
        } else {
            result = `${result}${str[i]}`

            // То же самое через конкатенацию
            // result = str[i] + result;
            i = i + 1;
        }

    }

    return result;
};
//const name = 'test';
console.log(reverse('If I look back I am lost', 'I'))