const printReversedWordBySymbol = (name) => {
    let i = name.length - 1;
    while (i >= 0) {
        console.log(name[i]);
        i = i - 1;
    }
};
console.log(printReversedWordBySymbol('12345'))