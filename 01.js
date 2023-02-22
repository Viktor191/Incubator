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
//----------------------------------
const test = (str) => {
    let d = 1
    let i = 0
    let k = 1
    let res = '';
    while (k < str.length) {
        res = res + (str[d] + str[i]);
        k = k + 2;
        i = i + 2;
        d = d + 2;

    }
    if(str.length % 2 !== 0) {
        return res = res + str[str.length - 1]
    } else {
        return res
    }

}
console.log(test('attack'));
//encrypt('attack'); // 'taatkc'
//encrypt('move'); // 'omev'
//-------------------------------------------------
/*
<h2>CatPhotoApp</h2>
<main>
    <p>Click here to view more <a href="#">cat photos</a>.</p>

    <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
                     alt="A cute orange cat lying on its back."></a>

    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://www.freecatphotoapp.com/submit-cat-photo">
        <label htmlFor="indoor"><input value="indoor" id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>

        <label htmlFor="outdoor"><input value="outdoor" id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>

        <label htmlFor="loving"><input id="loving" value="loving" type="checkbox" name="personality"> Loving</label>

        <label htmlFor="lazy"><input value="lazy" id="lazy" type="checkbox" name="personality"> Lazy</label>

        <label htmlFor="energetic"><input value="energetic" id="energetic" type="checkbox" name="personality"> Energetic</label><br>

        <input value="indoor" type="text" placeholder="cat photo URL" required>

            <button type="submit">Submit</button>
    </form>
</main>
*/

//-------------------------------------------------
// Удаляет из строки заданный знак, в примере = восклицательнй знак '!'
function removeExclamationMarks(s) {
    let result = ''
    for(i = 0; i < s.length; i++) {
        if(s[i] === '!') {
            i = i + 1
        } else {
            result = result + s[i]
            //console.log(result)
        }
    }
    return result;
}
console.log(removeExclamationMarks('Hi Hello!'))
//---------------------------------------------------

function maxNam(arr) {
    return Math.max.apply(null, arr);
}

function cutArr(arr, max) {
    return arr.filter(function(f) { return f !== max })
}


function arrMaxNumber(n, arr) {

    let arr2 = []

    for(i = 0; i < n; i++) {
        let resultMax = (maxNam(arr))
        arr = cutArr(arr, resultMax)

        arr2[i] = resultMax

    }

    return arr2.reverse();
}
console.log(arrMaxNumber(3, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
//---------------------------------------------------------------
const test = (a) => {
    //let a = 1
    switch (a) {
        case 1:
            console.log('statement1');
            break;

        case 2:
            console.log('statement2');
            break;

        default:
            console.log('statement default');
            break;
    }
}
console.log(test(2))
//--------------------------------------------------------------
const test = (str) => {
    let result = str.split(' ');
    console.log(result)
    let result2 = ''
    let str2 = ''
    for(i = 0; i < result.length; i++) {
        result2 = `${result[i]} ${result[i].length},`
        //console.log(result2)
        str2 = str2 + result2// + ','
        //console.log(str2)
    }
    console.log(str2)
    //let result3 = str2
    let x = result.length
    let arr = str2.split(',', x);

    return arr
}
console.log(test('you will win'))
//-----------------------------------------------------------------
const test = (str) => {
    let result = str.split(' ');
    console.log(result)
    let result2 = ''
    let str2 = ''
    for(i = 0; i < result.length; i++) {
        result2 = `${result[i]} ${result[i].length},`
        //console.log(result2)
        str2 = str2 + result2// + ','
        //console.log(str2)
    }
    console.log(str2)
    //let result3 = str2
    let x = result.length
    let arr = str2.split(',', x);

    return arr
}
console.log(test('you will win'))
//--------------------------------------------------------------------
function litres(time) {
    let result
    // console.log(Math.floor(74.5));
    result = (Math.floor(time)) / 0.5
    return (Math.floor(result / 4))
}
console.log(litres(1))
//--------------------------------------------------------------------

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        let a = obj[checkProp];
        return a
    } else {
        return "Not Found";
    }
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "bed")) 
//-------------------------------------------------------------------
const revers = (arr) => {
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i] * -1 + ','


    }
    return result.split(',', arr.length)
}
let arr = [1,2,3,4,-5]
console.log(revers(arr))
//--------------------------------------------
const revers = (arr) => {
    let result = ''
    result = arr.map(num => num * -1 + ' ')
    result = arr.map(num => num * -1)

    return result
}
let arr = [1,2,3,4,10]
console.log(revers(arr))
//-------------------------------
function learnJavaScript() {
    let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]

    let fahrenheit = celsius.map(t => t * 1.8 + 32 + ' ')

    return fahrenheit
}

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){

  let arr = str.split(' ')
  let result = arr.reverse();
  let a = result.join(' ')
  return a // reverse those words
}
console.log(reverseWords("The greatest victory is that which requires no battle"))

var arr = [ 1, 2, 3, 4, 5 ];
var rev = [...arr].reverse();
console.log(rev);