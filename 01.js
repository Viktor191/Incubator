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
//------------------------------------------------------

function mystery() {
    var results =
        {sanity: 'Hello'};
    return results.sanity;

}
console.log(mystery())


function repeatStr (n, s) {
  let result = ''
  for(i = 0; i < n; i++) {
    result = result + s
  }
  return result;
}
console.log(repeatStr (5, '0'))
//-----------------------------------
function shortcut (string) {
    let sl = string.split('')

    sl = sl.filter( a => a !== 'a')
    sl = sl.filter( a => a !== 'i')
    sl = sl.filter( a => a !== 'o')
    sl = sl.filter( a => a !== 'u')
    let result = sl.filter( a => a !== 'e').join('')

    return result;
}
console.log(shortcut("hello"))
//---------------------------------------------
let arr = [
    [10, 5, 6, 2, 3],
    [41, 50, 61, 8, 5],
    [14, 18, 84, 74, 89]
];
let m = Math.min(...arr[0]);
let b = Math.min(...arr[1]);
let c = Math.min(...arr[2]);
result = m + b + c
console.log(m,b,c)
//console.log(myArray[1][0])
console.log(result)
console.log(arr.length)
//--------------------------------------------
let arr = [
    [10, 5, 6, 2, 3],
    [41, 50, 61, 8, 5],
    [14, 18, 84, 74, 89]
];
function sumOfMinimums(arr) {
    let m = 0
    let result = 0
    for(i = 0; i < arr.length; i++) {
        m = Math.min(...arr[i]);
        result = result + m
    }
    return result
}
console.log(sumOfMinimums(arr))
//--------------------------------------------------
var arr = [0, 1, 2, 2, 3, 5, 5];

const fNamber = (n) => {
    let b = 0

    arr.forEach(function(item, index, array) {
        // ... делать что-то с item
        if(n === item) {
            b = b + 1
        }

    });
    return b + ' b'

}
console.log(fNamber(5))
//-------------------------------------------------
const comparison = (a, b) => {
    let result = ''
    if (a.length !== b.length) {
        return false
    }
    for (i = 0; i < a.length; i++) {
        result = a[i] === b[i]
        if(result === false){
            return result
        }
    }
    return result

}
console.log(comparison([1, 2, 3], [1, 2, 3]))

console.log(comparison([1, 2, 3, 4], [1, 2, 3]))

console.log(comparison([1, 2, 3, 7], [1, 2, 3, 6]))
//-------------------------------
let speak = function () {
    console.log(this.sound + '! Меня зовут ' + this.name + '!')
}
const cat = {
    sound: 'Мяу',
    name: 'Варежка',
    speak: speak
}
console.log(cat.speak())
cat.speak()
//-------------------------------------
// Разворот строки берем '12345' получаем '54321'
function solution(str){
    let result = ''
    for(i = 0; i < str.length; i++) {
        result = str[i] + result;
    }
    return result
}
console.log(solution('12345'))
//-------------------------------------------------
function trim(str, size) {
    let result = ''
    let a = size
    //let srt2 = str

    if(str.length <= size) {
        return str
    }
    if(str.length < 3) {
        return str[0] + '...'
    }

    if(a <= 3) {
        for(i = 0; i < a; i++) {

            result = result + str[i];

        }
        return result + '...';
    }
    for(i = 0; i < a - 3; i++) {

        result = result + str[i];

    }

    return result + '...';
}
console.log(trim('sk', 2))
//--------------------------------------------------
function pairZeros(arr) {
    let b = 0
    let result = ''

    for(i = 0; i < arr.length; i++) {
        result = result + arr[i]
        if(arr[i] === 0) {
            i = i + 1
        }

    }
    return result
}

console.log(pairZeros([0, 1, 7, 0, 2, 2, 0, 0, 1, 0]))
//-------------------------------------------------------
const test = () = > {
    let arr = {name: 'Jeremy', age: 24, role: 'Software Engineer'}
    arr = Object.entries(arr).sort()
}

console.log(arr);
//------------------------------------------------------
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
console.log(arrMaxNumber(3, [7,7,5,4,3,2,1]))
//------------------------------------------------
function largest(n, array) {
    let d = ''
    array.sort(function(a, b) {
        return a - b;
    });
    let revArr = array.reverse();
    d = revArr.splice(0, n);
    d = d.sort(function(a, b) {
        return a - b;
    });
    return d
}
console.log(largest(4, [7,7,5,5,3,2,1]))
//------------------------------------------
function largest(n, array) {
    let d = ''
    array.sort(function(a, b) {
        return a - b;
    });
    let revArr = array.reverse();
    d = revArr.splice(0, n);
    d = d.sort(function(a, b) {
        return a - b;
    });
    return d
}
console.log(largest(4, [7,7,5,5,3,2,1]))
//-----------------------------------------
const stringToNumber = function(str){
    // put your code here
    return a = Number(str); ;
}
console.log(stringToNumber('2356485'))
//--------------------------------------------
function sumStr(a,b) {
    if (a == undefined) {
        a = 0
    }
    if (b == undefined) {
        b = 0
    }
    let c = Number(a);
    let d = Number(b);
    let v = (c + d).toString()
    return v
}
console.log(sumStr( '4'))
//------------------------------------------------

var arr = ['a', 'b', 'c', 'd', 'e'];

function first(arr, n) {
    if (n == undefined) {

        return arr.splice(0, 1);
    }
    // return arr;
    return arr.splice(0, n);
}
console.log(first(arr, 0))
//--------------------------------------------------
function shortcut (str) {
    let a = str.toLowerCase()

    let sl = a.split('')

    sl = sl.filter( a => a !== 'a')
    sl = sl.filter( a => a !== 'i')
    sl = sl.filter( a => a !== 'o')
    sl = sl.filter( a => a !== 'u')

    sl = sl.filter( a => a !== '0')
    sl = sl.filter( a => a !== '1')
    sl = sl.filter( a => a !== '2')
    sl = sl.filter( a => a !== '3')
    sl = sl.filter( a => a !== '4')
    sl = sl.filter( a => a !== '5')
    sl = sl.filter( a => a !== '6')
    sl = sl.filter( a => a !== '7')
    sl = sl.filter( a => a !== '8')
    sl = sl.filter( a => a !== '9')

    sl = sl.filter( a => a !== ' ')
    sl = sl.filter( a => a !== '!')


    let result = sl.filter( a => a !== 'e').join('')

    const newSet = new Set(result);//Убирает дубли из массива и возвращает строку 
    const uniqueNumbers = Array.from(newSet);// переводит строку снова в массив
    console.log(uniqueNumbers)
    return uniqueNumbers.length
}
console.log(shortcut("Count my unique consonants!!"))
//----------------------------------------------------
let a = ['a', 'b', 'c', 'd', 'e']
function check(a, x) {
    if(a.indexOf(x) !== -1) {
        return true
    } else {
        return false
    }
}
console.log(check(a, 'w'))
//--------------------------------------------------------
function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj[checkProp] === undefined) {
        return "Not Found"
    } else {
        return obj[checkProp]
    }

    //return obj[checkProp];
    // Only change code above this line
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gt") ) //should return the string pony.
//--------------------------------------------------------------
function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    if(n > m) {
        return n % m
    } else {
        return m % n
    }
}
console.log(remainder(13, 0))
//-------------------------------------------------------
