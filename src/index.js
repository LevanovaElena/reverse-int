module.exports = function reverse(n) {
    let str = n.toString();
    let rezult = '';
    for (i = str.length - 1; i >= 0; i--) {
        rezult = rezult + str[i];
    }
    return parseInt(rezult);
}
