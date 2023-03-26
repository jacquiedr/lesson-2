function isPalindromicNumber(number) {
    let digits = String(number).split('').join('');
    let reversed = String(number).split('').reverse().join('');
    return digits === reversed;
}

console.log(isPalindromicNumber(0000));