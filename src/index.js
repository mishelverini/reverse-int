module.exports = function reverse (n) {
    return (Math.abs(n) + '').split('').reverse().map(function (element) {
        return Number.parseInt(element);
    }).join('');
}
