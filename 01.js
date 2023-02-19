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
//-------------------------------------------------------
const makeItFunny = (str, a) => {
    let i = 0
    let result = ''
    while (i < str.length) {
        if((i + 1) % a === 0 ) {
            result = `${result}${str[i].toUpperCase()}`
            console.log(result)
            i = i + 1
        } else {
            result = `${result}${str[i]}`
            //console.log(result)
            i = i + 1;
        }
    }
    return result;
}
const text = 'I never look back';
// Каждый третий элемент
console.log(makeItFunny(text, 3)); // 'I NevEr LooK bAck'
// .toUpperCase()
//---------------------------------------------------------
const reverse = (str, a) => {
    let i = 0;
    // Нейтральный элемент для строк это пустая строка
    let result = '';
    while (i < str.length) {
        if(str[i] === a ) {
            result = true
            return result

        } else {
            i = i + 1;
        }

    }


    return false;
};
//const name = 'test';
console.log(reverse('exlet', 'H'))
//-----------------------------------------------------

const takeTwo = (str) => {
    let a = 0
    let b = 1

    let c = str[a] + str[b]
//console.log(c)
    return c
}
console.log(takeTwo('1234'))
  //--------------------------------------
const mixTwo = (str) => {
    let result = ''
    for (let i = 0; i < 2; i += 1) {
        result = `${str[i]}${result}`;
    }
    return result;

}

console.log( mixTwo('at')) // 'taatkc'
