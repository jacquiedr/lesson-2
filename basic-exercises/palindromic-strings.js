function isPalindrome(str) {
    let chars = str.split('');
    let reversedChars = str.split('').reverse();
    for (let index = 0; index < chars.length; index++) {
        if(chars[index] !== reversedChars[index]) {
            return false;
        }
    }
    return true;
}

// Further Exploration

function isPalindromeFE(string) {
    string = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return string === string.split('').reverse().join('');
}

let number = String(00100).split('');

console.log(isPalindromeFE(number));