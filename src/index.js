module.exports = function toReadable(number) {
    const ones = [
        '', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (number === 0) return 'zero';

    let result = '';

    if (Math.floor(number / 100) > 0) {
        result += ones[Math.floor(number / 100)] + ' hundred ';
    }

    if (number % 100 < 20) {
        result += ones[number % 100];
    } else {
        result += tens[Math.floor((number % 100) / 10)] + ' ';
        result += ones[number % 10];
    }

    return result.trim();
};
